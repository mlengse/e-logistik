/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('distributiondrugdetails', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'distributiondrugprogram_id': {
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
    },
    'keterangan': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'distributiondrugdetails',
    timestamps: false
  });
};
