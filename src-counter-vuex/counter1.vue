<template>
  <div>
    <p>clicked: {{count}} times, count is {{oddOrEven}}</p>

    <select ref="numberSelect">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  export default {

    mounted () {
      console.log(this.$store)
    },

    computed: {
      'count' () {
        return this.$store.getters['count']
      },

      oddOrEven () {
        return this.$store.getters.oddOrEven
      }
    },

    methods: {
      increment () {
        const number = this.$refs.numberSelect.value*1
        this.$store.dispatch('increment', number)
      },
      decrement () {
        const number = this.$refs.numberSelect.value*1
        this.$store.dispatch('decrement', number)
      },
      incrementIfOdd () {
        const number = this.$refs.numberSelect.value*1
        this.$store.dispatch('incrementIfOdd', number)
      },
      incrementAsync () {
        const number = this.$refs.numberSelect.value*1
        this.$store.dispatch('incrementAsync', number)
      }
    }
  }
</script>

<style>

</style>

<!--
自定义事件机制(消息):

1. 绑定事件监听(订阅消息)
   事件名(消息名)
   回调函数(event): 读取数据
2. 触发事件(发布消息)
   事件名(消息名)
   数据
3. 2种事件触发的方式
  用户操作
  编码触发(自定义的)
pubsub
  pubsub.subscribe('messageName', function(){'messageName', data})
  pusub.pushlish('messagename', data)
-->

