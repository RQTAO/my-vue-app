<template>
    <div class="header">
      <div class="l-content">
        <el-button size="small" @click="handleCollapse">
          <component class="icons" is="menu"></component>
        </el-button>
        <el-breadcrumb separator="/" class="bread">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="r-content">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img :src="getImageUrl('user')" class="user"/> 
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
</template>

<script setup>
import { useAllDataStore} from '@/stores'
const getImageUrl =(user)=>{  
  return new URL(`../assets/images/${user}.png`, import.meta.url).href;  
}; 
const store =useAllDataStore()
const handleCollapse = ()=>{
    store.state.isCollapse = !store.state.isCollapse
}
</script>

<style lang="less" scoped>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;/* 注意：这里的高度可能需要根据实际情况调整 */  
  background-color: #333;
}
.icons{
  width: 20px;
  height: 20px;

}
.l-content{
  display: flex;
  align-items: center; /* 可能需要添加以垂直居中 */ 
  .el-button{
    margin-right: 20px;
  }
}
.r-content{
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    // object-fit: cover; /* 确保图片覆盖整个区域 */ 
  }
}
:deep(.bread span){
  color: #fff !important;
  cursor: pointer !important;
}
</style>
