/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_polyclinics', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'kdPoli': {
      type: DataTypes.STRING(3),
      allowNull: false,
      comment: "null"
    },
    'nmPoli': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'poliSakit': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'bpjs_polyclinics',
    timestamps: false
  });
};
