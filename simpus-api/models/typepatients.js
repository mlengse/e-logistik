/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('typepatients', {
    'id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      comment: "null"
    },
    'jenis': {
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
    'gakin': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    },
    'bpjs': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "0 = bukan jenis pasien BPJS; 1 = jenis pasien BPJS"
    },
    'aktif': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'typepatients',
    timestamps: false
  });
};
