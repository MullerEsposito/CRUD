import "reflect-metadata";
import path from "path";
import { DataSource } from "typeorm";

export const PGDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "crud_user",
  password: "12345",
  database: "crud_db",
  logging: "all",
  entities: [path.join(__dirname, "..", "modules", "**", "entities", "{*.js,*.ts}")],
  migrations: [path.join(__dirname,"migrations", "*.ts")],
});

PGDataSource.initialize()
  .then(() => {    
    console.log(`Postgres database running.`);    
  })
  .catch(error => console.log(error));