<template>
  <ul class="todo-main">
    <todo-item v-for="(todo, index) in todos" :todo="todo" :key="index" :index="index"></todo-item>
  </ul>
</template>

<script type="text/ecmascript-6">
  import todoItem from './todoItem'
  import storageUtil from '../util/storageUtil'

  export default {

    components: {
      todoItem
    },

    computed: {
      todos () {
        return this.$store.getters.todos
      }
    },

    watch: {
      todos: {// 深度监视todos, 一旦有变化立即保存
        handler: storageUtil.save,
        deep: true
      }
    },
  }
</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
