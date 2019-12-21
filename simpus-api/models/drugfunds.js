/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('drugfunds', {
    'id': {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'drugfunds',
    timestamps: false
  });
};
