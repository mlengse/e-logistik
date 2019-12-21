/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patients', {
    'id': {
      type: DataTypes.CHAR(11),
      allowNull: false,
      defaultValue: '00000000',
      primaryKey: true,
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'alamat': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'orchard_id': {
      type: DataTypes.CHAR(4),
      allowNull: false,
      comment: "null"
    },
    'village_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'tgl_lahir': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'nama_kk': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'sex_id': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      comment: "null"
    },
    'work_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'no_kartu': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'typepatient_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'education_id': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'nik': {
      type: DataTypes.STRING(16),
      allowNull: false,
      comment: "null"
    },
    'no_hp': {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "null"
    },
    'schedule_id': {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: '00',
      comment: "null"
    },
    'tanggal_rutin': {
      type: DataTypes.STRING(2),
      allowNull: false,
      comment: "null"
    },
    'tribe_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'patients',
    timestamps: false
  });
};
