/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('units', {
    'id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      comment: "null"
    },
    'unit': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'aktif': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      comment: "0 : false, 1 : true"
    },
    'bpjs_polyclinic_id': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'units',
    timestamps: false
  });
};
