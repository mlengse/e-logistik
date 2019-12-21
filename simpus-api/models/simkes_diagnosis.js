/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('simkes_diagnosis', {
    'visit_id': {
      type: DataTypes.CHAR(50),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'disease_id': {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'groupdiagnosi_id': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    }
  }, {
    tableName: 'simkes_diagnosis',
    timestamps: false
  });
};
