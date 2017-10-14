<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllComplete"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{totalSize}}
        </span>
    <button class="btn btn-danger" v-show="completeSize" @click="clearAllCompleted">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    /*
    ...
    打包: 将多个数据集中到一个变量(数组/对象)中
    拆包: 将数组/对象中的多个数据分解出来

    function test(...ts) { //打包

    }
    test(1, 'abc', true)

    arr1 = [1,3,5]
    arr2 = [3, ...arr1, 6]  //拆包
     */
    computed: {
      ...mapGetters(['completeSize', 'totalSize']),  //拆包
      isAllComplete: {
        get () {
          return this.$store.getters.isAllComplete
        },
        set (value) {
          this.$store.dispatch('selectAll', value)
        }
      }
    },

    methods: mapActions(['clearAllCompleted'])
  }
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