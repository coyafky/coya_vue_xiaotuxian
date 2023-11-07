<script>
import ButtonVue from './components/Button.vue';
export default {
    components: { ButtonVue },
    data: () => ({
        isError: false, // 主题
        isFlat: false, // 阴影
        btnText: '普通按钮'// 按钮文本
    })
}
</script>

<template>
    主题：<input type="checkbox" v-model="isError">
    阴影：<input type="checkbox" v-model="isFlat">
    按钮文本：<input type="text" v-model="btnText">
    <hr>
    <!-- 父向子传值，可采用属性的方式赋值 -->
    <ButtonVue :title="btnText" :error="isError" :flat="isFlat" />
</template>