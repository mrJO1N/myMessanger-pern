import { Sequelize } from "sequelize";
import { ConfigService } from "../services/config/config.interface";

const config = new ConfigService();

export default new Sequelize(
  config.get("DB_NAME") ?? "",
  config.get("DB_USER") ?? "",
  config.get("DB_PASS"),
  {
    dialect: "postgres",
    host: config.get("DB_HOST") ?? "localhost",
    port: Number(config.get("DB_PORT") ?? 2345),
    logging: false, // Set this to true to see SQL queries in the console
    // define: {
    //   timestamps: false, // Disable createdAt and updatedAt fields
    // },
  }
);
