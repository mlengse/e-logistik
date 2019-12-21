/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('works', {
    'id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'pekerjaan': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'works',
    timestamps: false
  });
};
