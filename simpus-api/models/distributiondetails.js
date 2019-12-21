/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('distributiondetails', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'distributiondrug_id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'drug_id': {
      type: DataTypes.CHAR(6),
      allowNull: false,
      comment: "null"
    },
    'jumlah': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'distributiondetails',
    timestamps: false
  });
};
