<template>
  <div class="hi3">
    <hr>
    <h1>{{ msg }}</h1>
    <ol>
      <li v-for="(todo, id) in todoList" v-bind:key="id">
          {{ todo.text }}
      </li>
    </ol>
    <button v-on:click="reverseList"> 뒤집기 </button>
    <p>{{ countNum }}</p>
    <button v-on:click="addCount"> 횟수 </button>
  </div>
</template>

<script>
export default {
  name: 'Hi3World',
  data () {
    return {
      msg: '저는 Hi3World 입니다.',
      todoList: [
        { id: 0, text: '스쿼트' },
        { id: 1, text: '런지' },
        { id: 2, text: '벤치프레스' },
        { id: 3, text: '덤벨플라이' },
        { id: 4, text: '데드리프트' },
        { id: 5, text: '풀업' },
        { id: 6, text: '바벨로우' },
        { id: 7, text: '기타 머신' }
      ],
      props: ['todo'],
      countNum: 0
    }
  },
  methods: {
    reverseList: function () {
      this.todoList = this.todoList.reverse()
    },
    addCount () {
      this.countNum += 2
    }
  },
  computed: {
    doubleNum: {
      get: function () {
        console.log(`countNum: ${this.countNum}`)
        return this.countNum
      },
      set: function (newNum) {
        this.countNum = newNum
      }
    }
  },
  watch: {
    countNum (newValue, oldValue) {
      console.log(`new: ${newValue} / old: ${oldValue}`)
    }
  },
  beforeCreate () {
    console.log(' /***** (1.1) [Hi3] beforeCreate *****/')
  },
  created () {
    console.log(' /***** (1.2) [Hi3] created : 데이터, 이벤트 접근 (API) *****/')
  },
  beforeMount () {
    console.log(' /***** (2.1) [Hi3] beforeMount : *****/')
  },
  mounted () {
    console.log(' /***** (2.2) [Hi3] mounted : 인스턴스 생성 / DOM 접근 가능 *****/')
  },
  beforeUpdate () {
    console.log(' /***** (3.1) [Hi3] beforeUpdate *****/')
  },
  updated () {
    console.log(' /***** (3.2) [Hi3] updated : DOM 재렌더링 *****/')
  },
  beforeDestroy () {
    console.log(' /***** (4.1) [Hi3] beforeDestroy *****/')
  },
  destroyed () {
    console.log(' /***** (4.2) [Hi3] destroyed : 인스턴스 제거 (DOM,데이터,이벤트) *****/')
  }
}
</script>
