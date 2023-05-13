import { DataTypes, Model } from "sequelize";
import sequelize from ".";

class ClinicModel extends Model<ClinicAtributes, ClinicCreationalAtributes> {
  declare  id: number;
  declare  name: string;
  declare  address: string;
  declare  phone: string;
};

export interface ClinicAtributes {
  id: number;
  name: string;
  address: string;
  phone: string;
  
};

export type ClinicCreationalAtributes = Omit<ClinicAtributes, 'id'>

ClinicModel.init({
    id:{
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
        tableName: 'clinics',
        sequelize,
        timestamps: false,
    });

export default ClinicModel;