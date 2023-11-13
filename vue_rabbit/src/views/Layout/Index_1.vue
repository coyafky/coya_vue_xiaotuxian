
import { RouterLink } from 'vue-router';

import { RouterView } from 'vue-router';
<template>
    <div>我是首页</div> 
       <!--二级路由出口组件-->
     <router-link to="catagory">
        <RouterView/>
     </router-link>
        <RouterView>

        </RouterView>
    
 </template>
 