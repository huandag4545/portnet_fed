<template>
    <div class="container">
        <div class="title">회원가입</div>
        <div class="join-box">
            <div class="join-title">아이디</div>
            <input type="text" class="join-input" v-model="model.userDto.username">
            <button class="join-btn btn_blue" v-on:click="checkUsername(model.userDto.username);"></button>
            <div class="join-title">비밀번호</div>
            <input type="password" class="join-input" v-model="model.userDto.password">
            <div class="join-title">닉네임</div>
            <input type="text" class="join-input" v-model="model.userDto.nickname">
            <div class="join-title">이메일</div>
            <input type="email" class="join-input" v-model="model.userDto.email">
            <div class="btn-box">
                <button class="join-btn btn_blue" v-on:click="insertUser()">회원가입</button>
                <button class="join-btn btn_gray">뒤로가기</button>
            </div>
        </div>
    </div>
</template>

<script>
import * as axios from '../../api/join/JoinApi.js'

export default {
    data(){
        return{
            model: {
                userDto: {}
            },
        }
    },
    created(){
        this.getUser();
        console.log(this.model);
    },
    methods:{
        async getUser(){
            try{
                const response = await axios.getUser();
                this.model = response.data;
            }catch(err){
                alert(err + "서버에러가 발생했습니다.")
            }            
        },
        async insertUser(){
            try{
                await axios.insertUser(this.model);               
                alert("회원가입이 완료되었습니다.")
                this.$router.push('/loginpage');
            }catch(err){
                alert(err + "서버에러가 발생하였습니다.")
            }
        },
        async checkUsername(username){
            try{
                var userCheckDto = {"username" : username};
                var flag = await axios.checkUsername(userCheckDto);
                if(flag){
                    alert("이미 존재하는 아이디입니다.");
                    this.model.userDto.username = "";
                }
            } catch (err) {
                alert(err + "서버에러가 발생하였습니다.")
            }
        }
    }
}
</script>

<style scoped>
.join-box{
    margin: 0 auto;
    width: 60%;


}
.join-title{
    font-size: 18px;
    color: #333;
    margin-bottom: 15px;
}

.join-input{
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
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
}

.join-btn{
    border: none;
    width: 48%;
    height: 40px;
}

</style>