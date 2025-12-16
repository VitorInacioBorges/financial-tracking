import service from "../services/transaction.service.js";

export default {
  async create(req, res, next) {
    try {
      const user = await service.createTransaction(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const users = await service.listTransactions(req.params.id);
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },

  async filter(req, res, next) {
    try {
      const users = await service.listTransactionsByType(
        req.params.id,
        req.body
      );
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const user = await service.updateTransaction(req.params.id);
      res.status(200).send({
        message: "Updated transaction succesfully",
        updatedTransaction: user,
      });
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const user = await service.deleteTransaction(req.params.id, req.body);
      res.status(200).send({
        message: "Deleted transaction succesfully",
        deletedUser: user,
      });
    } catch (error) {
      next(error);
    }
  },
};
