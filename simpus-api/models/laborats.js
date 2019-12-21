/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('laborats', {
    'id': {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'grouplab_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'pemeriksaan': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'nilai_normal': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'bpjs_mcu_field': {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'laborats',
    timestamps: false
  });
};
