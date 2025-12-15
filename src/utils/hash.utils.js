import bcrypt from "bcryptjs";
import dotenv from "dotenv";

export function hashPassword(password) {
  return bcrypt.hashSync(password, Number(process.env.BCRYPT_SALT_ROUNDS));
}

export function compareHashPassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}
