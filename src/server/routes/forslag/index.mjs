import Forslag from "../../database/models/forslag.mjs";

export const getForslag = async (req, res) => {
  try {
    res.set("Content-Type", "application/json");
    res.set("Cache-Control", "public, max-age=60");

    res.status(200).send(await Forslag.find());
  } catch (error) {
    res.sendStatus(500);
    throw error;
  }
};

export default {
  getForslag,
};
