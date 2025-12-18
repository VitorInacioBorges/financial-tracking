import userModel from "../../../../models/user.model.js";
import userRepository from "../../../../repositories/user.repository.js";

describe("when we try to search an user by it's email", () => {
  it("returns the correct user", async () => {
    const user = {
      name: "example",
      email: "email@example.com",
      password: "password123",
    };

    const createdUser = await userModel.create(user);
    const foundUser = await userRepository.findByEmail(createdUser.email);

    expect(foundUser).toBeDefined();
    expect(foundUser.email).toBe(createdUser.email.toLowerCase());
    expect(foundUser.email).toBe(user.email.toLowerCase());
  });
});
