import { config, DotenvParseOutput } from "dotenv";
import { IConfig } from "./config.service";

export class ConfigService implements IConfig {
  private env: DotenvParseOutput;

  constructor() {
    let { parsed } = config();
    this.env = parsed ?? {};
  }
  get(key: string): string | undefined {
    return this.env[key];
  }
}
