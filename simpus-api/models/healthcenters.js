/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('healthcenters', {
    'id': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      comment: "null"
    },
    'kode': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'puskesmas': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'alamat': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'kecamatan': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'kabupaten': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'propinsi': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'kepala': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'nip_kepala': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'petugas': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'nip_petugas': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'petugas_lplpo': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'nip_petugas_lplpo': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'penanggung_jawab_lab': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'nip_penanggung_jawab_lab': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'bayar': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "0 : false, 1 : true"
    },
    'cetak': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "0 : false, 1 : true"
    },
    'header': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'kasir_resep': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "0 : false, 1 : true"
    },
    'resep': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'putihx': {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      comment: "null"
    },
    'putihy': {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      comment: "null"
    },
    'hitamx': {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      comment: "null"
    },
    'hitamy': {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      comment: "null"
    },
    'administrasi_pasien': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'administrasi_pasien_ranap': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'versi': {
      type: DataTypes.CHAR(7),
      allowNull: false,
      comment: "null"
    },
    'icpc': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'kode_pusdatin': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'pcare_user': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'pcare_pass': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'cons_user': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'cons_pass': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'kode_bpjs': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'kode_kancab': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'nama_kancab': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'bridging_online': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'auto_sync_simkes': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'healthcenters',
    timestamps: false
  });
};
