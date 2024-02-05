import { DataSource, DataSourceOptions } from "typeorm";
import 'dotenv/config';



export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ['dist/**/*.entity.js'],
    synchronize: true
}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource;