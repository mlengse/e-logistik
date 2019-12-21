/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('workers', {
    'id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'nip': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'aktif': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      comment: "0 : false, 1 : true"
    },
    'bpjs_worker_kode': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'workers',
    timestamps: false
  });
};
