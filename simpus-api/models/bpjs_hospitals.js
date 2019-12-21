/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_hospitals', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'kdProvider': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'nmProvider': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'alProvider': {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "null"
    },
    'ktProvider': {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "null"
    },
    'alamatPpk': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'telpPpk': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'kelas': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'nmkc': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'distance': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'bpjs_hospitals',
    timestamps: false
  });
};
