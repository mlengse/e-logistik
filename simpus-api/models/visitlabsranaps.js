/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('visitlabsranaps', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'patient_id': {
      type: DataTypes.STRING(11),
      allowNull: false,
      comment: "null"
    },
    'visitsranap_id': {
      type: DataTypes.STRING(7),
      allowNull: false,
      comment: "null"
    },
    'datetime_register': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'periksa': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'visitlabsranaps',
    timestamps: false
  });
};
