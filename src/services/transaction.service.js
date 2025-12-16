import repo from "../repositories/transaction.repository.js";
import { createError } from "../utils/error.utils.js";

function ensureValidInfo({ type, name, value, userRef }) {
  if (type === undefined || type === null)
    throw createError("Type cannot be blank", 400);
  if (!name?.trim()) throw createError("Name cannot be blank", 400);
  if (!value) throw createError("Value cannot be blank", 400);
  if (!userRef) throw createError("User reference cannot be blank", 400);
}

export default {
  async createTransaction(data) {
    ensureValidInfo(data);

    const transaction = await repo.createTransaction({
      type: data.type,
      name: data.name.trim(),
      value: data.value,
      user: data.userRef,
    });

    return transaction;
  },

  async listTransactions(userId) {
    if (!userId) throw createError("User ID is required", 400);
    return await repo.findAllTransactions(userId);
  },

  async listTransactionsByType(userId, type) {
    if (!userId) throw createError("User ID is required", 400);
    if (type === undefined || type === null)
      throw createError("Type cannot be blank", 400);
    return await repo.filterTransactionByType(userId, type);
  },

  async updateTransaction(userId, id, data) {
    if (!userId) throw createError("User ID is required", 400);
    if (!id) throw createError("Transaction ID is required", 400);

    const payload = { ...data };

    if (payload.name) {
      payload.name = payload.name.trim();
    }

    Object.keys(payload).forEach((key) => {
      if (payload[key] === undefined) delete payload[key];
    });

    if (Object.keys(payload).length === 0) {
      throw createError("No field completed for updating.", 400);
    }

    const updatedTransaction = await repo.updateTransactionById(
      userId,
      id,
      payload
    );
    if (!updatedTransaction) {
      throw createError("Transaction not found.", 404);
    }
    return updated;
  },

  async deleteTransaction(userId, id) {
    if (!userId) throw createError("User ID is required", 400);
    if (!id) throw createError("Transaction ID is required", 400);

    const deletedTransaction = await repo.deleteTransactionById(userId, id);
    if (!deletedTransaction) {
      throw createError("Transaction not found.", 404);
    }
    return transaction;
  },
};
