<template>
  <div class="container">
    <div class="title">Login</div>
    <div class="login-box">
        <div class="login-title">아이디</div>
        <input type="text" class="login-input" v-model="model.username" v-on:keyup.enter="login">
        <div class="login-title">비밀번호</div>
        <input type="password" class="login-input" v-model="model.password" v-on:keyup.enter="login">
        <div class="btn-box">
            <button class="login-proc btn_blue" v-on:click="login()">로그인</button>
            <button class="login-proc btn_blue">회원가입</button>
        </div>
    </div>
  </div>
</template>

<script>



export default {
  data(){
    return {
      model: {
        username: '',
        password: ''
      }
    }
  },
  methods:{
    login(){
      console.log(this.model.username);
      if(this.model.username === '' || this.model.password === ''){
        alert("아이디 비밀번호가 입력되지 않았습니다.");
        this.model.username = '';
        this.model.password = '';
        return;
      }

      this.$store.dispatch('loginAction',this.model);
      this.$router.push('/');
    }
  }
  
}
</script>

<style scoped>
.login-box{
    width: 40%;
    height: 600px;
    margin: 0 auto;
}

.login-title{
    font-size: 18px;
    color: #333;
    margin-bottom: 15px;
}

.login-input{
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    margin-bottom: 35px;
    background-color: #98DFFF;
    padding: 10px;
    border: solid 1px #ccc;
    border-radius: 5px;
    font-size: 15px;
}

.btn-box{
  margin-top: 40px;
}

.login-proc{
    margin-bottom: 12px;
    width: 100%;
    height: 50px;
    font-size: 18px;
    border: none;
}
</style>