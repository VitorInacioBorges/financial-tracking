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

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

export default mongoose.model("transaction", transaction_schema);
