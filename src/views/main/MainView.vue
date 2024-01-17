<template>
  <!-- 배너영역 -->
  <div>
    <section>
      <div class="banner-area">
        <div class="banner-box">
          <div class="banner-contents">
            <h2>나만의 포트폴리오를 작성해보세요</h2>
            <h5>포트폴리오 관리사이트 포트넷</h5>
            <button class="banner-button">포트폴리오 작성</button>
          </div>
        </div>    
      </div>
    </section>
    <!--전문가 목록영역-->
    <!-- <section>
      <div class="contens">
        <h2 class="contents-title" style="margin-left: 60px;">전문가 목록</h2>
        <div class="contents-list">
          <div class="item">
            <img class="img-box">
            <div></div>
          </div>
          <div class="item">
              <img class="img-box">
              <div></div>
          </div>
          <div class="item">
              <img class="img-box">
              <div></div>
          </div>
          <div class="item">
              <img class="img-box">
              <div></div>
          </div>
        </div>
      </div>
    </section> -->
    <section>
      <div class="contens">
        <div class="intro-container">
          <div class="intro-contents">
            <h2>전현덕</h2>
            <p class="fs-16px">&bull;  남서울대학교 광고홍보학 전공</p>
            <p class="fs-16px">&bull;  기술스택 <br>
              <span style="margin-left: 5px;">java, Spring Boot, </span>
            </p>
          </div>
          <div class="intro-contents"></div>
        </div>
      </div>

    </section>
  
  
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.banner-area{
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #eff3fb;
}

.banner-box{
  margin: 0 auto;
  margin-top: 30px;
  height: 350px;
  text-align: center;
}

.banner-contents{
  margin-top : 60px;
  display: inline-block;
}

.banner-button{
  margin-top: 50px;
  width: 300px;
  height: 100px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  background: rgb(6,14,131);
  background: linear-gradient(0deg, rgba(6,14,131,1) 0%, rgba(12,25,180,1) 100%);
  border: none;
}

.banner-button:hover {
     background: rgb(0,3,255);
background: linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%);
}


.contens{
  margin: 0 auto;
  width: 80%;
  height: 420px;
  border: 1px solid black;
}

.contents-list{
  width: 100%;
  border: 1px solid black;
  height: 300px;
  display: flex;
}

.item{
  margin-left: 50px;
  border: 1px solid black;
  width: 250px;
}

.img-box{
  height: 60%;
  border: 1px solid black;
  margin: 0;
  width: 100%;
}

.intro-container{
  margin: 30px;
  border: 1px solid black;
  height: 350px;
  display: flex;
}

.intro-contents{
  width: 40%;
  border: 1px solid black;
  margin-left: 60px;
}
</style>