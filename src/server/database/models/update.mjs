import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  externalId: String,
  votes: Number,
  updated: Date,
});

export const requestModel = mongoose.model("Update", requestSchema, "update");

export default requestModel;
