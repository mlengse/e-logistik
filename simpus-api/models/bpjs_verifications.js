/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_verifications', {
    'id': {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'no_bpjs': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'json_response': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'checked': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "null"
    }
  }, {
    tableName: 'bpjs_verifications',
    timestamps: false
  });
};
