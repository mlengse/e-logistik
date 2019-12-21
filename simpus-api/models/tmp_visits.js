/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_visits', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
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
      comment: "null"
    },
    'poscheck_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'worker_id': {
      type: DataTypes.CHAR(2),
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
    'harilahir': {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      comment: "null"
    },
    'bulanlahir': {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      comment: "null"
    },
    'umur': {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      comment: "null"
    },
    'groupage_id': {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'groupvisit_id': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      comment: "null"
    },
    'typepatient_id': {
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
      type: DataTypes.CHAR(1),
      allowNull: false,
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
    'unit_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'no_kartu': {
      type: DataTypes.STRING(255),
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
    'minggunya': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'kepesertaan': {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "null"
    },
    'education_id': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'perawat_id': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'entry_id': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'nik': {
      type: DataTypes.STRING(16),
      allowNull: false,
      comment: "null"
    },
    'gakin': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    },
    'unit_ref': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'ppk_cocok': {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      comment: "null: bukan pasien BPJS; 0: pasien BPJS, tapi PPK tidak sesuai; 1: pasien BPJS, PPK sesuai"
    },
    'kunj_sakit': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'bpjs_polyclinic_kdPoli': {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "null"
    },
    'tribe_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'kdTacc': {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'alasanTacc': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'fpk': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'rujuk_internal': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tmp_visits',
    timestamps: false
  });
};
