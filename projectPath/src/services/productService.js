import $service from './baseService.js';

$service.prototype.queryCommendProduct = function(param, callback, ctrlParam) {
    var paraMap = {};
    paraMap["funcNo"] = "1000065";
    paraMap["recommend_type"] = param.recommend_type;
    paraMap["page"] = param.page;
    paraMap["numPerPage"] = param.numPerPage;
    paraMap["opstation"] = ",,,web";
    this.commonInvoke(paraMap, callback, ctrlParam)
}
;


let  productService = new $service();
export default productService