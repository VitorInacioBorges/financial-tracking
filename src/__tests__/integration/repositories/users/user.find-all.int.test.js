import userRepository from "../../../../repositories/user.repository.js";
import userModel from "../../../../models/user.model.js";

describe("when trying to find all user", () => {
  it("return all users", async () => {
    const user1 = {
      name: "example",
      email: "email@example.com",
      password: "password123",
    };

    const user2 = {
      name: "example",
      email: "email@example.com",
      password: "password123",
    };

    const created_user1 = await userModel.create(user1);
    const created_user2 = await userModel.create(user2);
    const all_users = await userRepository.findAllUsers();

    expect(Array.isArray(all_users)).toBe(true);

    const emails = all_users.map((x) => x.email.toLowerCase());

    expect(emails).toContain(created_user1.email.toLowerCase());
    expect(emails).toContain(created_user2.email.toLowerCase());
  });
});
