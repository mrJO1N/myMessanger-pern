import { DataTypes, ModelDefined } from "sequelize";
import sequelize from "../conn";

export const User: ModelDefined<UserAttrs, UserCreateAttrs> = sequelize.define(
  "user",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    isEmailVerified: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }
);

export type UserCreateAttrs = {
  username: string;
  email: string;
  password: string;
  role: string;
};
export type UserAttrs = {
  id: number;
  username: string;
  email: string;
  isEmailVerified: boolean;
  password: string;
  role: string;
};
