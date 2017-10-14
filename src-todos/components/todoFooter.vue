<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllDone"/>
    </label>
    <span>
      <span>已完成{{completeSize}}</span> / 全部{{totalSize}}
    </span>
    <button class="btn btn-danger" @click="deleteDone" v-show="completeSize>0">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {

    methods: mapActions(['deleteDone']),

    computed: {
      isAllDone: {
        get () {
          return this.$store.getters.isAllComplete
        },
        set (value) {
          //this.$emit('updateTodos', value)
          this.$store.dispatch('updateAllTodos', value)
        }
      },
      ...mapGetters(['completeSize', 'totalSize'])
    }
  }
/*
  const arr1 = [1, 3, 5]
  const arr2 = [4, ...arr1, 7]
  const obj = {
    a: 1,
    b () {

    }
  }
  const obj2 = {
    c: 3,
    ...obj
  }*/
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
