<template>
  <div class="hi2">
    <hr>
    <h1>{{ msg }}</h1>
    <button v-on:click="reverseMessage"> 뒤집기 </button>
    <input v-model="msg">
    <Hi3World/>
  </div>
</template>

<script>
import Hi3World from './Hi3World'
export default {
  name: 'Hi2World',
  data () {
    return {
      msg: '저는 Hi2World 입니다.'
    }
  },
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
    }
  },
  components: {
    Hi3World
  },
  beforeCreate () {
    console.log(' /***** (1.1) [Hi2] beforeCreate *****/')
  },
  created () {
    console.log(' /***** (1.2) [Hi2] created : 데이터, 이벤트 접근 (API) *****/')
  },
  beforeMount () {
    console.log(' /***** (2.1) [Hi2] beforeMount : *****/')
  },
  mounted () {
    console.log(' /***** (2.2) [Hi2] mounted : 인스턴스 생성 / DOM 접근 가능 *****/')
  },
  beforeUpdate () {
    console.log(' /***** (3.1) [Hi2] beforeUpdate *****/')
  },
  updated () {
    console.log(' /***** (3.2) [Hi2] updated : DOM 재렌더링 *****/')
  },
  beforeDestroy () {
    console.log(' /***** (4.1) [Hi2] beforeDestroy *****/')
  },
  destroyed () {
    console.log(' /***** (4.2) [Hi2] destroyed : 인스턴스 제거 (DOM,데이터,이벤트) *****/')
  }
}

</script>
