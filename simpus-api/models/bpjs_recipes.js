/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_recipes', {
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
    'kdObatSK': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      comment: "null"
    },
    'noKunjungan': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'racikan': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    },
    'kdRacikan': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "null"
    },
    'obatDPHO': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    },
    'kdObat': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    },
    'signa1': {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'signa2': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'jmlObat': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'jmlPermintaan': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'nmObatNonDPHO': {
      type: DataTypes.STRING(50),
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
    tableName: 'bpjs_recipes',
    timestamps: false
  });
};
