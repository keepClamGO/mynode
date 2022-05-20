const xlsx = require('xlsx');
const fs = require('fs');
const moment = require('moment');
const util = require('../common/util');
const {
  MobileBrand,
} = require('../model');
// excel分析结果保存到数据库
const MoblieBrand = async (data) => {
  const keys = {
    order: '序号',
    secondaryUnit: '二级单位',
    managementModel: '经营模式',
    status: '项目状态',
    fbackground: '甲方背景',
    province: '省/直辖市',
    city: '市',
    district: '区/县（行政区）',
    devarea: '区（开发区）',
    contractCost: '合同造价/万元',
    progress: '形象进度',
    output: '开累产值/万元',
    pmName: '项目经理姓名',
    pmPhone: '项目经理电话',
    piName: '项目巡检员姓名',
    piPhone: '项目巡检员电话',
    gpName: '集团巡检管理员姓名',
    gpPhone: '集团巡检管理员电话'
  };
  console.log(data)
  const results = util.chineseKeyToEnglish(data, keys);
  console.log(results)
  for (let result of results) {
    await util.upsert(MobileBrand, result, {
      secondaryUnit: result.secondaryUnit,
    });
  }
};

// 上传并解析excel
exports.readExcel = async (path, name) => {
  const work = xlsx.readFile(path, { cellDates: true });
  const SheetNames = work.SheetNames;
  for (let SheetName of SheetNames) {
    let worksheet = work.Sheets[SheetName];
    let result = xlsx.utils.sheet_to_json(worksheet);
    if (SheetName === '项目') {
      await MoblieBrand(result);
    }
  }
  fs.renameSync(path, `upload/mobile/${moment().format('YYYY-MM-DD HH-mm-ss')}_${name}`);
  return '解析成功';
};