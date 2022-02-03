import { updateForslag } from "./logic/updateforslag/index.mjs";
import { connect } from "./database/connect.mjs";

const runUpdate = async () => {
  try {
    console.log("Running update job");

    connect();
    await updateForslag();

    console.log("Finished update");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

runUpdate();
