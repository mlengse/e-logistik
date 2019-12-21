/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_polireferences', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'kdPoli': {
      type: DataTypes.CHAR(3),
      allowNull: false,
      comment: "null"
    },
    'nmPoli': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'bpjs_polireferences',
    timestamps: false
  });
};
