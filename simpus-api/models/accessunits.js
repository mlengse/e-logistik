/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accessunits', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'group_id': {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      comment: "null"
    },
    'unit_id': {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'accessunits',
    timestamps: false
  });
};
