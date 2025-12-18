// integration test for findById method

import userModel from "../../../../models/user.model.js";
import userRepository from "../../../../repositories/user.repository.js";

describe("when we try to search an user by it's ID", () => {
  it("returns the correct user", async () => {
    const user = {
      name: "user",
      email: "email@example.com",
      password: "password123",
    };

    const createdUser = await userModel.create(user);
    const foundUser = await userRepository.findUserById(createdUser._id);

    expect(foundUser).toBeDefined();
    expect(foundUser._id.toString()).toBe(createdUser._id.toString());
    expect(foundUser.email).toBe(user.email.toLowerCase());
  });
});
