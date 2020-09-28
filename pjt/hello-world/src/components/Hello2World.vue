<template>
  <div class="hello2">
    <hr>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hello2World',
  data () {
    return {
      msg: '(추가) 저는 Hello2World 컴포넌트 입니다.'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
