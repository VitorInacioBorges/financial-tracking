import userModel from "../../../../models/user.model.js";
import userRepository from "../../../../repositories/user.repository.js";
import { hashPassword } from "../../../../utils/hash.utils.js";

describe("when trying to update an user", () => {
  it("should return an user updated succesfully", async () => {
    const user = {
      name: "example",
      email: "email@example.com",
      password: "password123",
    };

    const created_user = await userModel.create(user);

    const newUser = {
      name: "example",
      email: "email@example.com",
      password: "password123",
    };

    const updated_user = await userRepository.updateUserById(
      created_user._id,
      newUser
    );

    const found_user = await userModel.findOne(updated_user);

    expect(updated_user).toBeDefined();
    expect(created_user._id).toEqual(updated_user._id);
    expect(found_user).toBeDefined();
    expect(found_user._id).toEqual(created_user._id);
    expect(found_user.name).toBe(created_user.name);
    expect(found_user.email).toBe(created_user.email);
  });
});
