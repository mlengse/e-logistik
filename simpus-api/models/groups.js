/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groups', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'name': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'created': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'modified': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'groups',
    timestamps: false
  });
};
