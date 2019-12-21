/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_diseases', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'kdDiag': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'nmDiag': {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "null"
    },
    'nonSpesialis': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    },
    'bpjsblock': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'bpjs_diseases',
    timestamps: false
  });
};
