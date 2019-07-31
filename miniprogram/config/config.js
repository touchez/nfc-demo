// 服务器域名
// const baseUrl = 'https://touchez.cn:8090/';
const baseUrl = 'http://localhost:8080/';
// 获取用户病历接口
const getMedicalHistoryByUserUrl = baseUrl + 'medicalRecord/';
// 获取用户检查记录接口
const getCheckReportUrl = baseUrl + 'examination_report/get';
// 检查是否活跃
const checkActiveUrl = baseUrl + 'examination/check_active';

module.exports = {
  getMedicalHistoryByUserUrl: getMedicalHistoryByUserUrl,
  getCheckReportUrl: getCheckReportUrl,
  checkActiveUrl: checkActiveUrl
};
