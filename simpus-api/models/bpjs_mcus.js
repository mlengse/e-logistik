/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_mcus', {
    'id': {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'bpjs_visit_id': {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "null"
    },
    'kdMCU': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'noKunjungan': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'kdProvider': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    },
    'tglPelayanan': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'tekananDarahSistole': {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'tekananDarahDiastole': {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'radiologiFoto': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'darahRutinHemo': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'darahRutinLeu': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'darahRutinErit': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'darahRutinLaju': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'darahRutinHema': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'darahRutinTrom': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'lemakDarahHDL': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'lemakDarahLDL': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'lemakDarahChol': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'lemakDarahTrigli': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'gulaDarahSewaktu': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'gulaDarahPuasa': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'gulaDarahPostPrandial': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'fungsiHatiSGOT': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'fungsiHatiSGPT': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'fungsiHatiGamma': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'fungsiHatiProtKual': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'fungsiHatiAlbumin': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'fungsiGinjalCrea': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'fungsiGinjalUreum': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'fungsiGinjalAsam': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'fungsiJantungABI': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'fungsiJantungEKG': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'fungsiJantungEcho': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'urinRutin': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'funduskopi': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'pemeriksaanLain': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'keterangan': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'ws_response': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'last_try': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'sender': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'sent': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'deleted': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'deleted_at': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'bpjs_mcus',
    timestamps: false
  });
};
