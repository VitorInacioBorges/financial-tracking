import repo from "../repositories/transaction.repository";
import { createError } from "../utils/error.utils.js";
import { hashPassword, compareHashPassword } from "../utils/hash.utils";
import { tokenGenerator } from "../utils/token.utils.js";

function ensureValidInfo({ type, name, userRef }) {
  if (!type) throw createError("Every transaction has to have a type", 400);
  if (!name?.trim()) throw createError("Name cannot be blank", 400);
  if (!userRef)
    throw createError("This transaction has no user referenced", 400);
}

export default {
  async createTransaction(data) {},
  async listTransactions() {},
  async getTransaction(id) {},
  async filterTransactions(type) {},
  async updateTransaction(id, data) {},
  async deleteTransaction(id) {},
};
