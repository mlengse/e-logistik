/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stps', {
    'id': {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'disease_id': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'icdx': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'stps',
    timestamps: false
  });
};
