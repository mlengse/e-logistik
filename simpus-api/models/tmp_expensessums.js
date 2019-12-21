/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_expensessums', {
    'visit_id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'jumlah': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'tmp_expensessums',
    timestamps: false
  });
};
