import envSchema from "env-schema";
import S from "fluent-json-schema";
import { resolve } from "path";

const isTest = new Boolean(process.env.IS_TEST);

const env = envSchema({
  schema: S.object()
    .prop(
      "NODE_ENV",
      S.enum(["local", "test", "development", "production"]).required()
    )
    .prop("PORT", S.number().default(3000).required())
    .prop("MONGO_HOST", S.string().default("localhost").required())
    .prop("MONGO_PORT", S.number().default(27017).required())
    .prop("MONGO_PASSWORD", S.string().default("localhost"))
    .prop("MONGO_DATABASE", S.string().default("fluid").required()),
  dotenv: {
    path: isTest ? resolve("./.test.env") : resolve("./.env"),
  },
  expandEnv: false,
});

export default env;
