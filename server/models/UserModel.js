module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define(
      "Users",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        imageUrl: {
          type: DataTypes.STRING
      },
        refresh_token: {
            type: DataTypes.TEXT
        }
      },
      {
        timestamps: true,
        paranoid: true,
        updatedAt: "updatedAt",
        createdAt: "createdAt",
      }
    );
  
    // Define associations or other custom methods here
  
    return Users;
  };
  