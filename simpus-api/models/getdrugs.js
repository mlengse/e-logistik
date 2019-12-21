/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('getdrugs', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'tanggal': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'worker_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'drugfund_id': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'getdrugs',
    timestamps: false
  });
};
