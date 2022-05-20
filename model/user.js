const {Sequelize, pool} = require('../common/mysql');

const User = pool.define('koa_user', {
  // 账号
  account: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // 密码
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

User.sync();

User.upsert({
  account: 'admin',
  password: 'admin',
});
module.exports = User;