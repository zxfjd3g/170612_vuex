<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认2"
           v-model="inputTodo" @keyup.enter="add"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        inputTodo: ''
      }
    },

    methods: {
      add () {
        const inputTodo = this.inputTodo.trim()
        if(!inputTodo) {
          return
        }

        // 根据输入封装todo对象
        const todo = {
          title: inputTodo,
          complete: false
        }
        // 添加到todos
        // this.addTodo(todo)
        // 触发事件(addTodo)
       this.$store.dispatch('addTodo', todo)

        // 清除输入
        this.inputTodo = ''
      }
    }
  }
</script>

<style>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>