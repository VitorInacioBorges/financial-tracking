import User from "../models/user.model.js";

export default {
  createUser(data) {
    return User.create(data);
  },

  findAllUsers() {
    return User.find();
  },

  findUserById(id) {
    return User.findById(id);
  },

  findUserByEmail(email) {
    return User.findOne({ email }).select("+password");
  },

  updateUserById(id, data) {
    return User.findByIdAndUpdate(id, data);
  },

  deleteUserById(id) {
    return User.findByIdAndDelete;
  },
};
