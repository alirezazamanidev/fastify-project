import { Sequelize } from "sequelize";


export const sequelize=new Sequelize('postgres://postgres:root@localhost:5432/fastify');
const dbConnection=async ()=>{
    await  sequelize.authenticate();
    console.log('postgress is connect! ');
}
dbConnection();