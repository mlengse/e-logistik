/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('simkes_visits', {
    'id': {
      type: DataTypes.CHAR(50),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'patient_id': {
      type: DataTypes.CHAR(11),
      allowNull: false,
      defaultValue: '00000000',
      comment: "null"
    },
    'tanggal': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00',
      comment: "null"
    },
    'pushealth_id': {
      type: DataTypes.CHAR(15),
      allowNull: false,
      comment: "null"
    },
    'poscheck_id': {
      type: DataTypes.CHAR(15),
      allowNull: false,
      comment: "null"
    },
    'worker_id': {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "null"
    },
    'nama_kk': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'work_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'groupage_id': {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      comment: "null"
    },
    'groupvisit_id': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      comment: "null"
    },
    'patienttype_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'action_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'consignor_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'sex_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'subdistrict_id': {
      type: DataTypes.CHAR(15),
      allowNull: false,
      comment: "null"
    },
    'district_id': {
      type: DataTypes.CHAR(15),
      allowNull: false,
      comment: "null"
    },
    'unit_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'kartusehat': {
      type: DataTypes.CHAR(13),
      allowNull: true,
      comment: "null"
    },
    'bulannya': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'tahunnya': {
      type: DataTypes.CHAR(4),
      allowNull: true,
      comment: "null"
    },
    'minggu': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'polireference_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'hospital_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'education_id': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'perawat_id': {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "null"
    },
    'entry_id': {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "null"
    },
    'nik': {
      type: DataTypes.STRING(16),
      allowNull: false,
      comment: "null"
    },
    'wilayahasal': {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "null"
    },
    'gakin': {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "null"
    },
    'tribe_id': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'sent': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'last_try': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'simkes_visits',
    timestamps: false
  });
};
