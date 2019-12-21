/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_expenses', {
    'id': {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'bpjs_visit_id': {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "null"
    },
    'kdTindakanSK': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'noKunjungan': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'kdTindakan': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'biaya': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'keterangan': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'hasil': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'ws_response': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'last_try': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'sender': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'sent': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'deleted': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'deleted_at': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'bpjs_expenses',
    timestamps: false
  });
};
