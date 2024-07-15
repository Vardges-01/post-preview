"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const dotenv = tslib_1.__importStar(require("dotenv"));
dotenv.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    migrations: ["src/database/migrations/*{.ts,.js}"],
    synchronize: true,
});
//# sourceMappingURL=ormconfig.js.map