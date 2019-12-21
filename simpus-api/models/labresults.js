/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('labresults', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'visitlab_id': {
      type: DataTypes.INTEGER(7),
      allowNull: false,
      comment: "null"
    },
    'datetime_hasil': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'laborat_id': {
      type: DataTypes.CHAR(4),
      allowNull: false,
      comment: "null"
    },
    'hasil': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'keterangan': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'worker_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'lokasi': {
      type: DataTypes.STRING(8),
      allowNull: false,
      comment: DataTypes.INTEGER
    },
    'bpjs_mcu_field': {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'labresults',
    timestamps: false
  });
};
