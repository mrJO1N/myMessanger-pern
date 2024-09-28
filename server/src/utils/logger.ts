import winston from "winston";

export default winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss-ms" }),
    winston.format.printf(
      ({ timestamp, level, message, stack }) =>
        `${timestamp} ${level}: ${message}${stack ? `\n${stack}` : ""}`
    )
  ),
  transports: [new winston.transports.Console()],
  level: "debug",
});
