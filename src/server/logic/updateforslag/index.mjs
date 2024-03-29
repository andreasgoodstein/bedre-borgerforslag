import ForslagService from "../../services/forslag/index.mjs";
import Forslag from "../../database/models/forslag.mjs";
import Update from "../../database/models/update.mjs";

import { forslagIsExpires } from "../../helpers/date/index.mjs";

export const updateForslag = async () => {
  const forslagService = new ForslagService();

  const forslagFromService = await forslagService.getAllForslag();

  const serviceIds = forslagFromService.map((forslag) => forslag.externalId);

  const forslagFromDb = await getForslagListFromDb(serviceIds);

  const forslagFromDbMap = forslagFromDb.reduce((map, forslag) => {
    map.set(forslag.externalId, forslag);
    return map;
  }, new Map());

  const forslagTaskList = [];
  const updateTaskList = [];

  forslagFromService.forEach((forslag) => {
    const updateTask = {
      updateOne: {
        filter: { externalId: forslag.externalId },
        update: {
          votes: forslag.votes,
          status: getForslagStatus(forslag),
          title: forslag.title,
          date: forslag.date,
          url: forslag.url,
        },
        upsert: true,
      },
    };

    forslagTaskList.push(updateTask);

    const oldForslag = forslagFromDbMap.get(forslag.externalId);

    if (oldForslag && forslagHasUpdated(oldForslag, forslag)) {
      updateTaskList.push({
        externalId: forslag.externalId,
        votes: forslag.votes,
        updated: new Date(),
      });
    }
  });

  if (forslagTaskList.length > 0) {
    await Forslag.bulkWrite(forslagTaskList);
  }

  if (updateTaskList.length > 0) {
    await Update.insertMany(updateTaskList);
  }
};

const getForslagListFromDb = async (externalIdArray) =>
  await Forslag.find({
    externalId: {
      $in: externalIdArray,
    },
  });

const getForslagStatus = (forslag) => {
  if (forslag.status === "Available") {
    return "Available";
  }

  if (forslag.votes >= 50000) {
    return "Accepted";
  }

  if (forslagIsExpires(forslag.date)) {
    return "Expired";
  }

  return forslag.status;
};

const forslagHasUpdated = (oldForslag, newForslag) =>
  oldForslag.votes !== newForslag.votes;

export default { updateForslag };
