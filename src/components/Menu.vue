<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router
    >
    <el-menu-item index="/index">
        <el-icon><Document/></el-icon>
        <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/census">
        <el-icon><Location/></el-icon>
        <span>统计管理</span>
    </el-menu-item>
    <el-menu-item index="/order">
        <el-icon><Setting/></el-icon>
        <span>订单管理</span>
    </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const  handleOpen = (key: string, keyPath: string[]) => {};
const  handleClose = (key: string, keyPath: string[]) => {};
</script>

<style>

</style>