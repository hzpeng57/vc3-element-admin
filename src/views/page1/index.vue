<template>
  <div class="main">
    <el-button type="primary" @click="handleClick">测试自定义Dialog</el-button>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog/index'

export default {
  name: 'page1',
  methods: {
    handleClick() {
      Dialog.show({
        title: '测试弹框'
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 20px;
}
</style>
