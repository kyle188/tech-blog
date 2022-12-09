const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model{

}
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        updatedAt: false,
        freezeTableName: true,
        underscored: true,
        modelName: "post"        
    } 
)
module.exports = Post


// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Project extends Model {}

// Project.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//     },
//     date_created: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: DataTypes.NOW,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'project',
//   }
// );

// module.exports = Project;
