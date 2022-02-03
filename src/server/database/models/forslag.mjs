import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  externalId: { type: String, unique: true },
  title: String,
  date: String,
  votes: Number,
  status: String,
  url: String,
});

export const requestModel = mongoose.model("Forslag", requestSchema, "forslag");

export default requestModel;
