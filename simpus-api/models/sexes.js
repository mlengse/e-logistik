/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sexes', {
    'id': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'singkatan': {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "null"
    },
    'kelamin': {
      type: DataTypes.CHAR(9),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'sexes',
    timestamps: false
  });
};
