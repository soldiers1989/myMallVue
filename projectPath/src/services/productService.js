import $service from './baseService.js';
/**
 * 获取广告图
 * @param {} param 
 * @param {*} callback 
 * @param {*} ctrlParam 
 */
$service.prototype.queryCommendProduct = function(param, callback, ctrlParam) {
    var paraMap = {};
    paraMap["funcNo"] = "1000065";
    paraMap["recommend_type"] = param.recommend_type;
    paraMap["page"] = param.page;
    paraMap["numPerPage"] = param.numPerPage;
    paraMap["opstation"] = ",,,web";
    this.commonInvoke(paraMap, callback, ctrlParam)
}
/**
 * 查询基金列表
 * @param {*} param 
 * @param {*} callback 
 * @param {*} ctrlParam 
 */
$service.prototype.queryFundList = function(param, callback, ctrlParam) {
    var paraMap = {};
    paraMap["funcNo"] = "1000051";
    paraMap["fund_type"] = param.fund_type;
    paraMap["page"] = param.page;
    paraMap["numPerPage"] = param.numPerPage;
    paraMap["isMonthRate"] = param.isMonthRate;
    paraMap["is_year_rate"] = param.is_year_rate;
    paraMap["is_season_rate"] = param.is_season_rate;
    paraMap["is_half_year_rate"] = param.is_half_year_rate;
    paraMap["isSeven"] = param.isSeven;
    paraMap["opstation"] = ",,,web";
    this.commonInvoke(paraMap, callback, ctrlParam)
}



let  productService = new $service();
export default productService