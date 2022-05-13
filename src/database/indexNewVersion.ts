import "reflect-metadata";
import { DataSource } from "typeorm";

export const PGDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "crud_user",
  password: "12345",
  database: "crud_db",
  entities: ["src/modules/**/entities/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
});

PGDataSource.initialize()
  .then(() => {
    console.log(`Postgres database running.`);    
  })
  .catch(error => console.log(error));