<template>
  <el-menu
    default-active="/index"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router
    >
    <el-menu-item index="/index">
        <el-icon><icon-menu /></el-icon>
        <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/census">
        <el-icon><icon-menu /></el-icon>
        <span>统计管理</span>
    </el-menu-item>
    <el-menu-item index="/order">
        <el-icon><document /></el-icon>
        <span>订单管理</span>
    </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
function handleOpen(key: string, keyPath: string[]){}
function handleClose(key: string, keyPath: string[]){}

</script>

<style>

</style>