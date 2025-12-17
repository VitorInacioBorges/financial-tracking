import service from "../services/transaction.service.js";

export default {
  async create(req, res, next) {
    try {
      const transaction = await service.createTransaction({
        ...req.body,
        user: req.params.id || req.body.user,
      });
      res.status(201).json(transaction);
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const transactions = await service.listTransactions(req.params.id);
      res.status(200).json(transactions);
    } catch (error) {
      next(error);
    }
  },

  async filter(req, res, next) {
    try {
      const transactions = await service.listTransactionsByType(
        req.params.id,
        req.body.type
      );
      res.status(200).json(transactions);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const updatedTransaction = await service.updateTransaction(
        req.params.id,
        req.params.transactionId || req.body._id,
        req.body
      );
      res.status(200).send({
        message: "Updated transaction successfully",
        updatedTransaction,
      });
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const deletedTransaction = await service.deleteTransaction(
        req.params.id,
        req.params.transactionId || req.body._id
      );
      res.status(200).send({
        message: "Deleted transaction successfully",
        deletedTransaction,
      });
    } catch (error) {
      next(error);
    }
  },
};
