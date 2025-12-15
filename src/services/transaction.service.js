import repo from "../repositories/transaction.repository";
import { createError } from "../utils/error.utils.js";
import { hashPassword, compareHashPassword } from "../utils/hash.utils";
import { tokenGenerator } from "../utils/token.utils.js";

function ensureValidInfo({ type, value, name, userRef }) {
  if (!type) throw createError("type cannot be blank", 400);
  if (!name?.trim()) throw createError("Name cannot be blank", 400);
  if (!userRef) throw createError("User reference cannot be blank", 400);
  if (!value) throw createError("Value cannot be blank", 400);
}

export default {
  async createTransaction(data) {
    ensureValidInfo(data);

    const transaction = await repo.createTransaction({
      type: data.type,
      value: data.value,
      name: data.name.trim(),
      user: data.userRef,
    });

    return transaction;
  },

  async listTransactions() {
    return await repo.findAllTransactions();
  },

  async getTransaction(id) {},
  async listTransactionsByType(type) {
    return await repo.findTransactionByType();
  },
  async updateTransaction(id, data) {},
  async deleteTransaction(id) {},
};
