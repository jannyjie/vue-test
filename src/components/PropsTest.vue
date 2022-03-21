<template>
  <h1>{{props.msg}}</h1>
</template>

<script>
export default {
    props: {
        // msg: String,
        msg: {
            type: String,
            // 預設
            default: "圖片"
        },
        bool: {
            type: Boolean,
            default: true,
        },
        num: {
            type: Number,
            default: 0
        },
        arr: {
            type: Array,
            default: () => []
        },
        obj: {
            type: Object,
             default: () => ({}),
            // default: () => {
            //     return {};
            // }
        },
        handclickFn:{
            type: Function,
            default: () => {},
        }
    },
    setup(props) {
        console.log(props);
        return {props};
    }
}
</script>

<style>

</style>