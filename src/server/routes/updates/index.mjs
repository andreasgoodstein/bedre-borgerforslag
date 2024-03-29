import Update from "../../database/models/update.mjs";

export const getUpdates = async (req, res) => {
  try {
    res.set("Content-Type", "application/json");
    res.set("Cache-Control", "public, max-age=60");

    res.status(200).send(await Update.find());
  } catch (error) {
    res.sendStatus(500);
    throw error;
  }
};

export default {
  getUpdates,
};
