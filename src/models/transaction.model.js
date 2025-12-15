import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  type: {
    type: Boolean,
    required: true,
  },

  value: {
    type: Number,
    required: true,
  },

  name: {
    type: String,
    required: true,
    trim: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

export default mongoose.model("transaction", transaction_schema);
