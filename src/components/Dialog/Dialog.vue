<template>
  <transition name="fade" v-if="isShow">
    <div class="dialog-page">
      <div class="dialog-box">
        <h3 class="title">{{ title }}</h3>
        <span class="close" @click="close">X</span>
        <el-button type="primary" class="confirm-btn" @click="confirm">确定</el-button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
    window.addEventListener('keyup', this.close)
    this.isShow = true;
  },
  methods: {
    close() {
      this.isShow = false;
      this.$nextTick(() => {
        this.$emit('close')
      })
    },

    confirm() {
      this.$emit('confirm')
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99999;

  .dialog-box {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    margin: auto;
    width: 700px;
    height: 400px;
    padding-top: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 6px 0 #fff;

    .title {
      text-align: center;
      font-size: 22px;
      color: #333;
    }

    .close {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
    }

    .confirm-btn {
      width: 80%;
      position: absolute;
      left: 10%;
      bottom: 50px;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>