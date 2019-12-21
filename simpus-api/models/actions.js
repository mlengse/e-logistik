/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('actions', {
    'id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'tindak_lanjut': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'ranap': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'bpjs_action_kode': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'actions',
    timestamps: false
  });
};
