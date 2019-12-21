/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_spkhusus', {
    'id': {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'nmKhusus': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'bpjs_spkhusus',
    timestamps: false
  });
};
