'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class applicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  applicant.init(
    {
      applicantId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        required: true,
      },
      postId: {
        required: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        required: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "applicant",
      timestamps: false,
    }
  );

//   likes.associate = function (models) {
//     models.likes.belongsTo(models.posts, {
//       foreignKey: 'postId',
//       onDelete: 'cascade',
//     });
//     models.likes.belongsTo(models.users, {
//       foreignKey: 'userId',
//       onDelete: 'cascade',
//     });
//   };
  return likes;
};
