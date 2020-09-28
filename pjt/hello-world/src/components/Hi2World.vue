<template>
  <div class="hi2">
    <hr>
    <h1>{{ msg }}</h1>
    <button v-on:click="reverseMessage"> 뒤집기 </button>
    <input v-model="msg">
    <br><br>
    <button v-on:click="toggleShow">
      <span v-if="isShowing"> 자식 가리기 </span>
      <span v-else> 보여주기 </span>
    </button>
    <div v-if="isShowing">
      <appChild></appChild>
    </div>
    <div id="childArea" style="display:none">
      <h4> 컴포넌트 생성 </h4>
    </div>
    <Hi3World/>
  </div>
</template>

<script>
import Hi3World from './Hi3World'
export const childArea = {
  template: '#childArea',
  beforeCreate () {
    console.log(' /***** (1.1) [childArea] beforeCreate *****/')
  },
  created () {
    console.log(' /***** (1.2) [childArea] created : 데이터, 이벤트 접근 (API) *****/')
  },
  beforeMount () {
    console.log(' /***** (2.1) [childArea] beforeMount : *****/')
  },
  mounted () {
    console.log(' /***** (2.2) [childArea] mounted : 인스턴스 생성 / DOM 접근 가능 *****/')
  },
  beforeUpdate () {
    console.log(' /***** (3.1) [childArea] beforeUpdate *****/')
  },
  updated () {
    console.log(' /***** (3.2) [childArea] updated : DOM 재렌더링 *****/')
  },
  beforeDestroy () {
    console.log(' /***** (4.1) [childArea] beforeDestroy *****/')
  },
  destroyed () {
    console.log(' /***** (4.2) [childArea] destroyed : 인스턴스 제거 (DOM,데이터,이벤트) *****/')
  }
}
export default {
  name: 'Hi2World',
  data () {
    return {
      msg: '저는 Hi2World 입니다.',
      isShowing: false
    }
  },
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
    },
    toggleShow () {
      this.isShowing = !this.isShowing
    }
  },
  components: {
    Hi3World,
    appChild: childArea
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
