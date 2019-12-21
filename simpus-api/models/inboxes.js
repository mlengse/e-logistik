/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inboxes', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'patient_id': {
      type: DataTypes.STRING(11),
      allowNull: false,
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'no_hp': {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "null"
    },
    'tgl_sms': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    'tgl_kunjungan': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    'unit_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'status': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "0 : belum registrasi , 1 : sudah registrasi"
    }
  }, {
    tableName: 'inboxes',
    timestamps: false
  });
};
