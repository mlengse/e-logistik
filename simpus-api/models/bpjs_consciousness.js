/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_consciousness', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      comment: "null"
    },
    'kdSadar': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'nmSadar': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'bpjs_consciousness',
    timestamps: false
  });
};
