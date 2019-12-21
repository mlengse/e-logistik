/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('polireferences', {
    'id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      comment: "null"
    },
    'polirujukan': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'bpjs_polireference_kode': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'polireferences',
    timestamps: false
  });
};
