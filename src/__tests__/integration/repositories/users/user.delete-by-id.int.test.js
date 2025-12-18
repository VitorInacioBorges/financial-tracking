import userRepository from "../../../../repositories/user.repository.js";
import userModel from "../../../../models/user.model.js";

describe("when trying to delete an user", () => {
  it("should expect not to find the user in the database", async () => {
    const user = {
      name: "example",
      email: "email@example.com",
      password: "password123",
    };

    const created_user = await userModel.create(user);
    const deleted_user = await userRepository.deleteUserById(created_user._id);
    const found_user = await userModel.findOne(deleted_user);

    expect(created_user).toBeDefined();
    expect(deleted_user).toBeDefined();
    expect(created_user._id).toEqual(deleted_user._id);
    expect(found_user).toBe(null);
  });
});
