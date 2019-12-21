/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('distributiondrugprograms', {
    'id': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'tanggal': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    'worker_id': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    'program_id': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    'keterangan': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'distributiondrugprograms',
    timestamps: false
  });
};
