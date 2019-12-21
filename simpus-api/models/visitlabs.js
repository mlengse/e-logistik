/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('visitlabs', {
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
    'visit_id': {
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
    },
    'keterangan': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'visitlabs',
    timestamps: false
  });
};
