/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programs', {
    'id': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'kode': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'program': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'programs',
    timestamps: false
  });
};
