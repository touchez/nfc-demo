// 服务器域名
const baseUrl = 'https://touchez.cn:8090/';
// const baseUrl = 'https://localhost:8091/';
// 获取用户病历接口
const getMedicalHistoryByUserUrl = baseUrl + 'medicalRecord/';
// 获取用户检查记录接口
const getCheckReportUrl = baseUrl + 'examination_report/get';
// 检查是否活跃
const checkActiveUrl = baseUrl + 'examination/check_active';
// 获取药品信息
const getMedicineData = baseUrl + 'api/v1/medicine';
// 获取导游机信息
const getGuideMedicineData = baseUrl + 'api/v1/guideMachine';
// 设置挂号状态
const setGuahaoStateApi = baseUrl + 'guahao';
// 开锁的api
const openLock = baseUrl + 'pyapi/openlock';

module.exports = {
  getMedicalHistoryByUserUrl: getMedicalHistoryByUserUrl,
  getCheckReportUrl: getCheckReportUrl,
  checkActiveUrl: checkActiveUrl,
  getMedicineData: getMedicineData,
  getGuideMedicineData: getGuideMedicineData,
  setGuahaoStateApi: setGuahaoStateApi,
  openLock: openLock
};
