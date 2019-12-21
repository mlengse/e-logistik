/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Drugs = sequelize.define('drugs', {
    'id': {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'singkatan': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'kelas': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'satuan': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'stok_awal': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'penerimaan': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'persediaan': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'pemakaian': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'sisa': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'stok_optimal': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'permintaan': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'inpres': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'askes': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'apbd': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'lain': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'asal': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'kodegf': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'generik': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      comment: "0 : non generik, 1 : generik, 2 : Lainnya"
    },
    'injeksi': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      comment: "0 : non injeksi, 1 : injeksi"
    },
    'antibiotik': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      comment: "0 : non antibiotik, 1 : antibiotik"
    },
    'psikotropika': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      comment: "0 : non psikotropika, 1 : psikotropika"
    },
    'harga': {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'aktif': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      comment: "0 : false, 1 : true"
    },
    'bpjs_drug_kode': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'bpjs_drug_id': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'drugs',
    timestamps: false
  });

  Drugs.associate = models => {
    Drugs.hasMany(models.recipes, {
      foreignKey: 'drug_id'
    })
  }

  return Drugs
};
