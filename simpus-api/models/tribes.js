/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tribes', {
    'id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'suku': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'tribes',
    timestamps: false
  });
};
