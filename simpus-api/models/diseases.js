/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diseases', {
    'id': {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      comment: "null"
    },
    'icdx': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'groupdisease_id': {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'lb1': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      comment: "0 : false, 1 : true"
    },
    'menular': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      comment: "0 : false, 1 : true"
    },
    'bpjs_disease_kode': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'diseases',
    timestamps: false
  });
};
