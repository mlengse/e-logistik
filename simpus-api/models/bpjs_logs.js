/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_logs', {
    'id': {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'user_id': {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'url': {
      type: DataTypes.STRING(500),
      allowNull: false,
      comment: "null"
    },
    'data': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'method': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'response': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'timestamp': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "null"
    }
  }, {
    tableName: 'bpjs_logs',
    timestamps: false
  });
};
