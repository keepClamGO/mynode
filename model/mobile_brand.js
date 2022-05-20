const {
  Sequelize,
  pool
} = require('../common/mysql');

const MobileBrand = pool.define('koa_mobile_brand', {
  // 序号
  order: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  // 二级单位
  secondaryUnit: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // 经营模式
  managementModel: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // 项目状态
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // 甲方背景
  fbackground: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // 省/直辖市
  province : {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // 市
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // 区/县（行政区）
  district: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // 区（开发区）
  devarea: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  // 合同造价
  contractCost: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // 形象进度
  progress: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // 开累产值
  output: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //项目经理姓名及电话
  pmName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pmPhone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //项目巡检员姓名及电话
  piName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  piPhone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //集团巡检管理员姓名及电话
  gpName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gpPhone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  // 启用时间
  timestamps: true,
  // 创建时间
  createdAt: 'ctime',
  // 修改时间
  updatedAt: 'mtime',
  // 表注释
  comment: '项目app信息表',
});

MobileBrand.sync();

module.exports = MobileBrand;