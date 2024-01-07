import { Model,DataTypes } from "sequelize";
import { sequelize } from "../config/sequlize.config";

export class User extends Model {}
User.init({
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    first_name:{type:DataTypes.STRING},
    last_name:{type:DataTypes.STRING},
    username:{type:DataTypes.STRING,unique:true,allowNull:false},
    password:{type:DataTypes.STRING,allowNull:false},
    active:{type:DataTypes.BOOLEAN,defaultValue:false}    
},{sequelize,name:'user'})
User.sync({force:true})