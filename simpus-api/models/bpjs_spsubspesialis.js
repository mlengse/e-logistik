/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_spsubspesialis', {
    'id': {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'nmSubSpesialis': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'kdRujuk': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'sp_id': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'bpjs_spsubspesialis',
    timestamps: false
  });
};
