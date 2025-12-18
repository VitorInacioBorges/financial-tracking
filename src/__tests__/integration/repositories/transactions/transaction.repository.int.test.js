import transactionRepository from "../../../../repositories/transaction.repository.js";
import transactionModel from "../../../../models/transaction.model.js";
import userModel from "../../../../models/user.model.js";

describe("Transaction Repository Integration", () => {
  let user;
  beforeAll(async () => {
    user = await userModel.create({
      name: "Test User",
      email: "testuser@example.com",
      password: "password123",
    });
  });

  afterAll(async () => {
    await transactionModel.deleteMany({ user: user._id });
    await userModel.deleteOne({ _id: user._id });
  });

  it("should create a transaction", async () => {
    const transaction = {
      type: true,
      value: 100,
      name: "Salary",
      user: user._id,
    };
    const created = await transactionRepository.createTransaction(transaction);
    expect(created).toBeDefined();
    expect(created.name).toBe(transaction.name);
    expect(created.value).toBe(transaction.value);
    expect(created.user.toString()).toBe(user._id.toString());
  });

  it("should find all transactions for a user", async () => {
    const transactions = await transactionRepository.findAllTransactions(
      user._id
    );
    expect(Array.isArray(transactions)).toBe(true);
    transactions.forEach((t) =>
      expect(t.user.toString()).toBe(user._id.toString())
    );
  });

  it("should find a transaction by id", async () => {
    const transaction = await transactionModel.create({
      type: false,
      value: 50,
      name: "Groceries",
      user: user._id,
    });
    const found = await transactionRepository.findTransactionById(
      user._id,
      transaction._id
    );
    expect(found).toBeDefined();
    expect(found._id.toString()).toBe(transaction._id.toString());
  });

  it("should find transactions by type", async () => {
    const type = true;
    await transactionModel.create({
      type,
      value: 200,
      name: "Bonus",
      user: user._id,
    });
    const found = await transactionRepository.findTransactionByType(
      user._id,
      type
    );
    expect(Array.isArray(found)).toBe(true);
    found.forEach((t) => expect(t.type).toBe(type));
  });

  it("should update a transaction by id", async () => {
    const transaction = await transactionModel.create({
      type: false,
      value: 30,
      name: "Snacks",
      user: user._id,
    });
    const updated = await transactionRepository.updateTransactionById(
      user._id,
      transaction._id,
      { value: 40 }
    );
    expect(updated).toBeDefined();
    expect(updated.value).toBe(40);
  });

  it("should delete a transaction by id", async () => {
    const transaction = await transactionModel.create({
      type: false,
      value: 10,
      name: "Coffee",
      user: user._id,
    });
    const deleted = await transactionRepository.deleteTransactionById(
      user._id,
      transaction._id
    );
    expect(deleted).toBeDefined();
    expect(deleted._id.toString()).toBe(transaction._id.toString());
    const found = await transactionModel.findById(transaction._id);
    expect(found).toBeNull();
  });
});
