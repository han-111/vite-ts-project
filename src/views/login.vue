<template>
  <div class="login-box">
    <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    status-icon
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名: " prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="密码: " prop="password">
      <el-input type="password" v-model="ruleForm.password" autocomplete="off"/>
    </el-form-item>
    <el-button class="login-btn" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
    </el-form>
    
 </div>
</template>

<script lang="ts" setup>
import { FormInstance, FormRules } from "element-plus";
import {ref, reactive } from "vue";
import { useRouter } from "vue-router";
import {login} from '../http/api.js'
const router = useRouter()
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
    name:'',
    password:''
})
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (ruleForm.password !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const rules = reactive({
    name:[
        {required:true,message:'请输入登录名!', trigger:'blur'},
        {min:3,max:10,message:'登录名长度3-10位'}
    ],
    password:[ 
        // {required:true,message:'请输入密码!', trigger:'blur'},,
        {validator:validatePass, trigger:'blur'}],

})
function submitForm(formEl:FormInstance | undefined){
    if (!formEl) return
    // ruleFormRef.value.validate 这样也可以获取值来校验
    formEl.validate((valid) => {
        if (valid) {
          login({user:ruleForm.name,password:ruleForm.password}).then((res:any) => {

          })
          router.push({
            path:'/index'
          })
          console.log('登录成功')
        } else {
            console.log('登录失败')
            return false
        }
    })
}
</script>

<style lang="scss" scoped>
.login-box{
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid red;
    .demo-ruleForm{
      margin: 20px 0;
       .login-btn{
        width: 200px;
        margin-left: 150px;
      }  
    }
   
}

</style>