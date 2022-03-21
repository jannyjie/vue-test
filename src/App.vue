<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PropsTest from "@/components/PropsTest.vue";
import TitleBar from "@/components/TitleBar.vue";
import ListItem from "@/components/ListItem.vue";
import EmitTest from "@/components/EmitTest.vue";
import TimerBox from "@/components/TimerBox.vue";
import {ref, reactive, onMounted} from 'vue';
export default {
  components: {
    Header,
    Footer,
    TitleBar,
    PropsTest,
    ListItem,
    EmitTest,
    TimerBox,
  },
  setup() {
    const data = ref("HI");

    const bool = ref(true);

    const num = ref(0);

    const arr = reactive([]);

    const obj = reactive({});

    const handclickFn = () => {

    }

    const handclickBackFn = (num) => {
      console.log("app => ", num);
    }

    const handCallBackFn = (num) => {
      window.alert("time is out!",)
    }

    const isAmin = ref(false);

    const handAminClick = () => {
      isAmin.value = !isAmin.value;
    }

    const isOpen = ref(true);

    const HandListShow = () => {
      isOpen.value = !isOpen.value;
    };

    const handCliclFn = (e) => {
      console.log(e);
    }

    const nums = ref(1243567);

    console.log(data);
    // console.log(textInput);  
    // const textInput = ref(null);

    onMounted(() => {
      // document.getElementById("textBar").focus();
      // 在 main 掛載 focus 這裡就不用寫了
      // console.log(textInput);
      // textInput.value.focus();
    })
    return {
      // textInput,
      data,
      bool,
      num,
      arr,
      obj,
      handclickFn,
      handclickBackFn,
      handCallBackFn,
      isAmin,
      handAminClick,
      isOpen,
      HandListShow,
      handCliclFn,
      nums
    }
  }
};
</script>

<template>
<!-- 抓取 DOM 實體 -->
  <input v-focus v-model="nums" ref="textInput" id="textBar" placeholder="input text" type="text">
<h1 v-price="nums"></h1>
<!-- 內部event 事件 -->
<!-- <a href="javascript:;" @click="handCliclFn($event)">a連結 $event</a>
  <Header /> -->
  <!-- 父傳子 -->
  <!-- <PropsTest 
    :data="data"
    :bool="bool"
    :num="num"
    :arr="arr"
    :obj="obj"
    :handclickFn="handclickFn"
  />
  <TitleBar :HandListShow="HandListShow" />
  <ListItem :isOpen="isOpen" /> -->
  <!-- 計時器 -->
  <!-- <TimerBox @TimeOut="handCallBackFn"/> -->
  <!-- 子傳父 -->
  <!-- <EmitTest @callBack="handclickBackFn"/> -->
 
  <!-- <Footer /> -->
  <!-- 動畫按鈕 -->
  <!-- <button @click="handAminClick">click</button>
  <transition name="fade">
    <div v-if="isAmin" id="box">box</div>
  </transition>
   -->
</template>

<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: slategray;
}
#app {
  width: 400px;
  overflow: hidden;
  border: 1px solid #42b983;
  border-radius: 10px;
}

#box{
  width: 100px;
  height: 100px;
  background: red;
}
.fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}

.fade-leave-from{
  opacity: 1;
}
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active{
  animation: bounce 0.5s;
}

.fade-leave-active{
  animation: bounce 0.5s reverse;
}


@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

input{
  display: block;
  width: 100%;
  height: 30px;
  background-color: rgb(173, 173, 173);
  padding-left: 10px;
}

</style>
