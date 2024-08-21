import Mock from "mockjs";
import homeApi from "./mockData/home";
//拦截的路径，方法，制造出假数据
Mock.mock(/api\/home\/getTableDat/,"get", homeApi.getTableData);