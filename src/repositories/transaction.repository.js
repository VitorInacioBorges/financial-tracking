import Transaction from "../models/transaction.model.js";

export default {
  createTransaction(data) {
    return Transaction.create(data);
  },

  findAllTransactions(userId) {
    return Transaction.find({ user: userId });
  },

  findTransactionByType(userId, type) {
    return Transaction.find({ user: userId, type });
  },

  updateTransactionById(userId, id, data) {
    return Transaction.findOneAndUpdate({ _id: id, user: userId }, data, {
      new: true,
    });
  },

  deleteTransactionById(userId, id) {
    return Transaction.findOneAndDelete({ _id: id, user: userId });
  },
};
