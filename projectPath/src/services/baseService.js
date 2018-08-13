import axios from 'axios'

function BaseService(){

}
BaseService.prototype.commonInvoke = function(reqParamVo, callback, ctrlParam){
    let method = ctrlParam.method||"get";//默认以get方式请求
    let url = ctrlParam.url||$config.global.serverPath;//未穿则取配置文件中地址
    let param = reqParamVo||{}
    axios({
        method: method,
        url: url,
        data:param,
        params:param,
        timeout: 30000,
        responseType: 'json', // 默认的
         // `onUploadProgress` 允许为上传处理进度事件
        onUploadProgress: function (progressEvent) {
        // 对原生进度事件的处理
        },
                // `onDownloadProgress` 允许为下载处理进度事件
        onDownloadProgress: function (progressEvent) {
        // 对原生进度事件的处理
        },
         // `maxContentLength` 定义允许的响应内容的最大尺寸
         maxContentLength: 2000,
    
    }).then(callback);
}



export default BaseService