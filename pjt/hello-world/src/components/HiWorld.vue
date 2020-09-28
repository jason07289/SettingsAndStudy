<template>
  <div class="hi">
    <hr>
    <h1>{{ msg }}</h1>
    <h1 v-bind:title="msg">title에 있지롱</h1>
    <h1 v-if="seen">seen을 true하면 보이죠</h1>
    <ol>     
      <li v-for="(todo, i) in todoArray" :key="i">
        {{ todo.text }}
      </li>
    </ol>
    <Hi2World/>
  </div>
</template>

<script>
import Hi2World from './Hi2World'
export default {
  name: 'HiWorld',
  data () {
    return {
      msg: '저는 HiWorld 입니다.',
      seen: true,
      todoArray: [
        { text: '스쿼트' },
        { text: '런지' },
        { text: '벤치프레스' },
        { text: '덤벨플라이' },
        { text: '데드리프트' },
        { text: '풀업' },
        { text: '바벨로우' },
        { text: '기타 머신' }
      ]
    }
  },
  components: {
    Hi2World
  },
  beforeCreate () {
    console.log(' /***** (1.1) [Hi] beforeCreate *****/')
  },
  created () {
    console.log(' /***** (1.2) [Hi] created : 데이터, 이벤트 접근 (API) *****/')
  },
  beforeMount () {
    console.log(' /***** (2.1) [Hi] beforeMount : *****/')
  },
  mounted () {
    console.log(' /***** (2.2) [Hi] mounted : 인스턴스 생성 / DOM 접근 가능 *****/')
  },
  beforeUpdate () {
    console.log(' /***** (3.1) [Hi] beforeUpdate *****/')
  },
  updated () {
    console.log(' /***** (3.2) [Hi] updated : DOM 재렌더링 *****/')
  },
  beforeDestroy () {
    console.log(' /***** (4.1) [Hi] beforeDestroy *****/')
  },
  destroyed () {
    console.log(' /***** (4.2) [Hi] destroyed : 인스턴스 제거 (DOM,데이터,이벤트) *****/')
  }
}
</script>
