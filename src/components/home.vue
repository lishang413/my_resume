<template>
  <div class="home">
    <div class="blank"></div>
    <div class="avatar">
      <img src="../assets/images/avatar.jpg" alt="">
    </div>
    <h1 class="name">{{ name }}</h1>

    <div class="info-container">
      <ul class="info-list">
        <li>
          <div class="info-img">
            <img src="../assets/images/i_age.svg" alt="age">
          </div>
          <div class="info-txt">年龄/{{age}}岁</div>
        </li>
        <li>
          <div class="info-img">
            <img src="../assets/images/i_edu.svg" alt="edu">
          </div>
          <div class="info-txt">学历/{{ diploma }}</div>
        </li>
        <li>
          <div class="info-img">
            <img src="../assets/images/i_site.svg" alt="site">
          </div>
          <div class="info-txt">坐标/{{ location }}</div>
        </li>
        <li>
          <div class="info-img">
            <img src="../assets/images/i_status.svg" alt="status">
          </div>
          <div class="info-txt">状态/{{ status }}</div>
        </li>
      </ul>
      <div class="info-description">
        求职意向城市：
        <span class="workPlace" v-for="item in workPlace">{{item.place}}</span>
      </div>
      <div class="info-description">{{readme}}</div>
    </div>


  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {homeInfo} from "@/info/info";


export default defineComponent({
  name: 'home',
  data(){
    return {
      name:  new homeInfo().name,
      age:new homeInfo().age,
      location:new homeInfo().location,
      diploma:new homeInfo().diploma,
      status:new homeInfo().status,
      readme:new homeInfo().readme,
      workPlace:new homeInfo().workPlace,
    }
  }
});
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>


.home {
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  height: auto;
  min-height: 100%;
  width: 100%;
  color: aliceblue;
  .blank{
    display: block;
    height: 70px;
  }
.avatar {
  width: 150px;
  height: 150px;
  margin: auto ;
  border-radius: 50%;
  background-color: #fff;
  border: 5px solid #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,.5);
  overflow: hidden;

img {
  width: 100%;
  text-align: center;
  display: block;
}
}

.shortDescription {
  color: #eee;
}
}


.info-container{
  top: 200px;
  left: 0;
  right: 0;
  bottom: 0;
  .info-list{
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    font-size: 18px;
    li{
      list-style-type:none;
      width: 100px;
      margin: 0 20px;
      .info-img{
        width: 90px;
        height: 90px;
        cursor: pointer;
        transition: background .2s,-webkit-transform ease-out .1s;
        transition: transform ease-out .1s,background .2s;
        transition: transform ease-out .1s,background .2s,-webkit-transform ease-out .1s;
        background: rgba(255,255,255,.1);
        border-radius: 50%;
        position: relative;
        margin: 0 auto;
        &:hover{
          background: rgba(255,255,255,0.05);
          transform: scale(0.93);
          color: #fff;
        }
        &::after{
          content: '';
          position: absolute;
          box-shadow: 0 0 0 2px rgba(255,255,255,.1);
          opacity: 0;
          transform: scale(.9);
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        &:hover:after{
          animation: effect 1.3s ease-out 75ms;
        }
        img{
          width: 50%;
          position: absolute;
          top: 50%;
          right: 50%;
          transform: translateY(-50%) translateX(50%);
        }
      }
      .info-txt{
        text-align: center;
        margin-top: 20px;
        color: #FFF;
      }
    }
  }
  .info-description{
    text-align: center;
    width: 80%;
    margin: 4% auto 0;
    line-height: 24px;
    font-size: 18px;
    color: #FFF;

    .workPlace{
     padding: 5px;
    }
  }
}
@keyframes effect {
  0% {
    opacity: 0.3;
  }
  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #109085, 0 0 0 10px rgba(255,255,255,0.5);
  }
  100% {
    box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #109085, 0 0 0 10px rgba(255,255,255,0.5);
    transform: scale(1.5);
    opacity: 0;
  }
}
@media screen and (max-width: 768px){
  .info-container{
    top:100px;
    .info-list{
      li{
        .info-img{
          width: 50px;
          height: 50px;
        }
        .info-txt{
          font-size: 12px;
          margin: 20px 0;
        }
      }
      .info-description{
        font-size: 14px;
      }
    }
  }
}
@media screen and (min-width: 1500px){
  .info-container{
    top: 300px;
    left: 0;
    right: 0;
    bottom: 0;
    .info-list{
      max-width: 1200px;
      li{
        width: 150px;
        margin: 0 20px;
        .info-img{
          width: 120px;
          height: 120px;
        }
      }
    }
    .info-description{
      text-align: center;
      line-height: 30px;
      padding-top: 100px;
      font-size: 20px;
      color: #FFF;


      .workPlace{
        letter-spacing: 20px;
      }
    }
  }
}
</style>