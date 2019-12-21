/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_sp', {
    'id': {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'nmSpesialis': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'bpjs_sp',
    timestamps: false
  });
};
