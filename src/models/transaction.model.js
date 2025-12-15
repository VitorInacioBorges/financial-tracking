import mongoose from "mongoose";

const transaction_schema = new mongoose.Schema({
  type: {
    type: Boolean,
    required: true,
  },

  name: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.model("transaction", transaction_schema);
