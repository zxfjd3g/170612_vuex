<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除2</button>
  </li>
</template>

<script>
  export default {
    props: {
      todo: Object,
      index: Number
    },

    data () {
      return {
        isShow: false, //button是否显示
        bgColor: 'white' // 背景颜色
      }
    },

    methods: {
      handleEnter (isEnter) {
        if(isEnter) { // 进入
          this.isShow = true
          this.bgColor = 'gray'
        } else { // 离开
          this.isShow = false
          this.bgColor = 'white'
        }
      },

      deleteItem () {
        // this.deleteTodo(this.index)
        this.$store.dispatch('deleteTodo', this.index)
      }
    }
  }
</script>

<style>

</style>