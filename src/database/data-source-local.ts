import { DataSource, DataSourceOptions } from "typeorm";

const dbDir = "src/database/";

const conectionOptions: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "todo_express",
  synchronize: false,
  logging: true,
  entities: [dbDir + "entities/**/*.{ts,js}"],
  migrations: [dbDir + "migrations/**/*.{ts,js}"],
};

export default new DataSource({
  ...conectionOptions,
});
