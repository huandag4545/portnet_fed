<template>
  <div class="header-container">
    <div class="logo-area">
        <!-- <router-link to="/"> -->
            <img src="../../assets/logo.png">
        <!-- </router-link> -->
    </div>
    <div class="button-box">
        <template v-if="isUserLogin">
            <router-link to="/loginpage" class="top-button btn_blue">마이페이지</router-link>
            <button class="top-button btn_blue" @click="logout">로그아웃</button>
        </template>
        <template v-else>
            <router-link to="/loginpage" class="top-button btn_blue">로그인</router-link>
            <router-link to="/join" class="top-button btn_blue">회원가입</router-link>
        </template>
    </div>
  </div>
</template>

<script>
export default {
    computed:{
        isUserLogin(){
            return this.$store.getters.isLogin;
        },
    },
    methods:{
        logout(){

        }
    }
}
</script>

<style scoped>
.header-container{
    height: 60px;
    display: flex;
    width: 1200px;
    margin : 0 auto;
    margin-top: 20px;
    align-items: center;
}

.logo-area{
    width: 85%;
}
.button-box{
    width: 15%;
}

.top-button{
   display: inline-block;
   margin-right: 12px;
}

</style>