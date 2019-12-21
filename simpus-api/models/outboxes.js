/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('outboxes', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'patient_id': {
      type: DataTypes.CHAR(11),
      allowNull: true,
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'nama_kk': {
      type: DataTypes.STRING(225),
      allowNull: false,
      comment: "null"
    },
    'no_hp': {
      type: DataTypes.CHAR(12),
      allowNull: false,
      comment: "null"
    },
    'pesan': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'timestamp_kirim': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '1970-01-01 00:00:01',
      comment: "null"
    }
  }, {
    tableName: 'outboxes',
    timestamps: false
  });
};
