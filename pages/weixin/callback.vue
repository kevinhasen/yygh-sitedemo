<template>
  <!-- header -->
  <div></div>
  <!-- footer -->
</template>
<script>
  export default {
    layout: "empty",
    data() {
      return {}
    },
    mounted() {
      //?号传参必须使用query获取
      let token = this.$route.query.token;
      let openid  = this.$route.query.openid;
      let name  = this.$route.query.name;
      //调用父方法
      window.parent['loginCallback'](name,token,openid)
    }
  }
</script>
