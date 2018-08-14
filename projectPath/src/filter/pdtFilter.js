/**
 * 处理小数位显示，符号显示
 * @data:处理的数据,@num:保留小数位，@tag：符号，type:符号位置
 */
function numFormatTag(data,num,tag,type){
    //data数据为空
    if(!data){
        return "--"
    }
    num = num||2; //默认保留两位小数
    tag = tag||""
    type = tag||0
    switch (type){
        case 0:return tag+parseFloat(data).toFixed(num);
        case 1:return parseFloat(data).toFixed(num)+tag;
        default:return tag+parseFloat(data).toFixed(num);
    }
}


export default {
    numFormatTag:numFormatTag,//处理小数位显示，符号显示
}