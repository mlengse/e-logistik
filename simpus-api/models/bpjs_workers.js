/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_workers', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'kdDokter': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'nmDokter': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'bpjs_workers',
    timestamps: false
  });
};
