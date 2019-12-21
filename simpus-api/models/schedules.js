/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schedules', {
    'id': {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'schedules',
    timestamps: false
  });
};
