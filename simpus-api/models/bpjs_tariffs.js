/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_tariffs', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'kdTindakan': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'nmTindakan': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'maxTarif': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'withValue': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    },
    'kdTkp': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'bpjs_tariffs',
    timestamps: false
  });
};
