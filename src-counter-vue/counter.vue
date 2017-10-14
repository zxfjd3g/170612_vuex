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
    data () {
      return {
        count: 0
      }
    },

    computed: {
      oddOrEven () {
        return this.count%2===0 ? '偶数' : '奇数'
      }
    },

    methods: {
      increment () {
        const number = this.$refs.numberSelect.value*1
        this.count += number
      },
      decrement () {
        const number = this.$refs.numberSelect.value*1
        this.count -= number
      },
      incrementIfOdd () {
        if(this.count%2===1) {
          const number = this.$refs.numberSelect.value*1
          this.count += number
        }
      },
      incrementAsync () {
        setTimeout(() => {
          const number = this.$refs.numberSelect.value*1
          this.count += number
        }, 1000)
      }
    }
  }
</script>

<style>

</style>