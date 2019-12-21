/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupdiagnosis', {
    'id': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'groupdiagnosis',
    timestamps: false
  });
};
