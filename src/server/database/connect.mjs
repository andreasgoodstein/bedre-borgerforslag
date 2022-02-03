import mongoose from "mongoose";

const DB_URL = process.env.MONGODB_URI || "mongodb://database";

export const connect = () => {
  mongoose.connect(DB_URL, { useNewUrlParser: true });

  const db = mongoose.connection;

  db.on("error", (error) => {
    throw error;
  });
  db.once("open", () => {
    console.log("DB CONNECTED");
  });
};

export default { connect };
