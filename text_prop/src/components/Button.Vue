<script>
export default {
    // 自定义属性选项
    props: {
        title: {
            type: String,
            required: true
        },
        error: Boolean,
        flat: Boolean,
        tips: {
            type: String,
            default: '我是一个普通的按钮'
        }
    },
    methods: {
        showPropsData() {
            // 在选项式 API JS 中，可以通过 this.$props 来访问 props 中的内容
            console.log(this.$props)
            console.log(this.$props.title)
            console.log(this.$props.error)
            console.log(this.$props.flat)
        },
        changeErrorProps() {
            // 不能直接修改 props 的数据，因为是只读的
            this.$props.error = !this.$props.error
        }
    }
}
</script>

<template>
    <!-- 在视图模板上，可直接使用 props 中的属性 -->
    <button :title="tips" :class="{ error, flat }" @click="showPropsData" @mousedown.right="changeErrorProps">
        {{ title }}
    </button>
</template>

<style>
button {
    border: none;
    padding: 12px 25px;
}

.error {
    background-color: rgb(197, 75, 75);
    color: white;
}

.flat {
    box-shadow: 0 0 10px grey;
}
</style>