/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kelompoks', {
    'id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'kelompoks',
    timestamps: false
  });
};
