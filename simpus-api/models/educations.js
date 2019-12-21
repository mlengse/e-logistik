/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('educations', {
    'id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'pendidikan': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'educations',
    timestamps: false
  });
};
