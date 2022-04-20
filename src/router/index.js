import { createRouter, createWebHashHistory } from "vue-router";
import Login from '../views/login.vue'

const routes = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        name:'Login',
        component:() => import('../views/login.vue'),
    },
    {
     path:'/home',
     name:'Home',
     component:() => import('../views/home.vue'),
     children:[
         {
            path:'/index',
            name:'Index',
            component:() => import('../views/index.vue'), 
         },
         {
            path:'/census',
            name:'Census',
            component:() => import('../views/census.vue'), 
         },
         {
            path:'/order',
            name:'Order',
            component:() => import('../views/order.vue'), 
         }
     ]
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router