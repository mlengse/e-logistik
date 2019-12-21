/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orchards', {
    'id': {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'village_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'dusun': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'jml_pdd': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'acux': {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      comment: "null"
    },
    'acuy': {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      comment: "null"
    },
    'acuepidx': {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      comment: "null"
    },
    'acuepidy': {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'orchards',
    timestamps: false
  });
};
