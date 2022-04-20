<template>
<div class="home">
    <div class="menu">
      <Menu></Menu>
  </div>
  <div class="home-box">
      <div class="header">
          <div>首页</div>
           <el-button type="primary" class="logout" @click="router.push({path:'/'})">退出</el-button>
      </div>
      <div class="content-box">
        <router-view/>
      </div>
  </div>
</div>
  
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Menu from '../components/Menu.vue'
const router = useRouter();
</script>

<style lang="scss" scoped>
.home{
    display: flex;
    .menu{
        width:200px;
        height: 100vh;
        position: absolute;
    }
    .home-box{
        margin-left: 200px;
        width: calc(100% - 200px);
        .header{
        display: flex;
        height: 80px;
        background: teal;
        padding: 0 20px;
        align-items: center;
            .logout{
                margin-left: auto;
                width: 60px;
            }
        }
    }
    .content-box{
        height: calc(100vh - 80px);
        background-color: bisque;
    }
}
</style>