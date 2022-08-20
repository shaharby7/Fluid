import { createConnection } from "mongoose";
import env from "../Start/env";

export default async function connect(): Promise<void> {
  await createConnection(
    `mongodb://${env.MONGO_HOST}:${env.MONGO_PORT}/${env.MONGO_DATABASE}`
  );
  return;
}
