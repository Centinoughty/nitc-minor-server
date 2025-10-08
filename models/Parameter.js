import mongoose from "mongoose";

const parameterSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
    },
    minStudents: {
      type: Number,
      required: true,
    },
    maxStudents: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Parameter = mongoose.model("Parameter", parameterSchema);
export default Parameter;