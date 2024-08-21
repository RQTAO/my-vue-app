/**
 * 整个项目api的统一管理
 */
import request from "./request";//  axios 实例配置  

//请求首页左侧的表格的数据

export default {
    getTableData(){
        return request({
            url: "api/home/getTableData",
            // url: "https://apifoxmock.com/m1/4068509-0-default/api/home/getTable",
            method:"get",
            // mock: true,
        })
    }
}

// import request from './request'; // 假设这是您的 axios 实例配置  
 
// export function getTableData() {  
//   return request({  
//     url: '/api/home/getTableData', // 确保这是正确的 URL  
//     method: 'get'  
//   });  
// }