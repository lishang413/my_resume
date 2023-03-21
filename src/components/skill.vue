<template>
<div class="skill">
    <h1 class="main-title">技能</h1>
    <div class="skill-container">
      <div class="skill-circle">
        <ul class="out-circle">
          <li class="out" v-for="item in outCircleList" :key="item.name">{{item.name}}</li>
        </ul>
        <ul class="inner-circle">
          <li class="inner" v-for="item in innerCircleList" :key="item.name">{{item.name}}</li>
        </ul>
      </div>
      <div class="skill-description" v-html="readme ">

      </div>
  </div>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {skillInfo} from "@/info/info";

export default defineComponent({
  name: 'skill',
  data(){
    return {
      outCircleList: new skillInfo().outCircleList,
      innerCircleList: new skillInfo().innerCircleList,
      readme: new skillInfo().readme,
    }
  },

});


</script>

<style scoped lang="scss" >
.skill {
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  height: auto;
  min-height: 100%;
  div {
    padding: 150px 0 0  0;
  }
}
.skill-container{
  margin: 0 auto;
  max-width: 800px;
  min-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .skill-circle{
    padding: 5px;
    position: relative;
    font-size: 12px;
    width: 300px;
    color: #fff;
    .out-circle{
      width: 242px;
      height: 242px;
      border: 4px dashed #999;
      border-radius: 50%;
      position: relative;
      margin: 0 auto;
      .out{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        text-align: center;
        line-height: 50px;
        backface-visibility: hidden;
        &:nth-child(1) {
          background-color: rgba(121, 100, 102, 0.8);
          animation: outX 8s cubic-bezier(.36, 0, .64, 1) -4s infinite alternate,
          outY 8s cubic-bezier(.36, 0, .64, 1) 0s infinite alternate;
        }
        &:nth-child(2) {
          background-color: rgba(49,65,82,0.8);
          animation: outX 8s cubic-bezier(.36, 0, .64, 1) -6s infinite alternate,
          outY 8s cubic-bezier(.36, 0, .64, 1) -2s infinite alternate;
        }
        &:nth-child(3) {
          background-color: rgba(76,157,160,0.8);
          animation: outX 8s cubic-bezier(.36, 0, .64, 1) -8s infinite alternate,
          outY 8s cubic-bezier(.36, 0, .64, 1) -4s infinite alternate;
        }
        &:nth-child(4) {
          background-color: rgba(66, 66, 66, 0.8);
          animation: outX 8s cubic-bezier(.36, 0, .64, 1) -10s infinite alternate,
          outY 8s cubic-bezier(.36, 0, .64, 1) -6s infinite alternate;
        }
        &:nth-child(5) {
          background-color: rgba(193,131,106,0.8);
          animation: outX 8s cubic-bezier(.36, 0, .64, 1) -12s infinite alternate,
          outY 8s cubic-bezier(.36, 0, .64, 1) -8s infinite alternate;
        }
        &:nth-child(6) {
          background-color: rgba(117,148,179,0.8);
          animation: outX 8s cubic-bezier(.36, 0, .64, 1) -14s infinite alternate,
          outY 8s cubic-bezier(.36, 0, .64, 1) -10s infinite alternate;
        }
        &:nth-child(7) {
          background-color: rgba(71,83,94,0.8);
          animation: outX 8s cubic-bezier(.36, 0, .64, 1) -16s infinite alternate,
          outY 8s cubic-bezier(.36, 0, .64, 1) -12s infinite alternate;
        }
        &:nth-child(8) {
          background-color: rgba(147,147,189,0.8);
          animation: outX 8s cubic-bezier(.36, 0, .64, 1) -18s infinite alternate,
          outY 8s cubic-bezier(.36, 0, .64, 1) -14s infinite alternate;
        }
      }
    }
    .inner-circle{
      width: 142px;
      height: 142px;
      border: 4px dashed #999;
      border-radius: 50%;
      position: absolute;
      text-align: center;
      line-height: 50px;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      .inner{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: absolute;
        text-align: center;
        line-height: 40px;
        backface-visibility: hidden;
        &:nth-child(1) {
          background-color: rgba(171,209,220,0.8);
          animation: innerX 8s cubic-bezier(.36, 0, .64, 1) -4s infinite alternate,
          innerY 8s cubic-bezier(.36, 0, .64, 1) 0s infinite alternate;
        }
        &:nth-child(2) {
          background-color: rgba(179,164,140,0.8);
          animation: innerX 8s cubic-bezier(.36, 0, .64, 1) -8s infinite alternate,
          innerY 8s cubic-bezier(.36, 0, .64, 1) -4s infinite alternate;
        }
        &:nth-child(3) {
          background-color: rgba(207,184,178,0.8);
          animation: innerX 8s cubic-bezier(.36, 0, .64, 1) -12s infinite alternate,
          innerY 8s cubic-bezier(.36, 0, .64, 1) -8s infinite alternate;
        }
        &:nth-child(4) {
          background-color: rgba(238,215,163,0.8);
          animation: innerX 8s cubic-bezier(.36, 0, .64, 1) -16s infinite alternate,
          innerY 8s cubic-bezier(.36, 0, .64, 1) -12s infinite alternate;
        }
      }
    }
  }
  .skill-description{
    text-align: left;
    flex: 1;
    max-width: 400px;
    word-break: break-all;
    color: #FFF;
    line-height: 24px;
    font-size: 18px;
    padding: 0 10%;

  }
}
@keyframes outX {
  0% {
    left: -27px;
  }
  100% {
    left: 217px;
  }
}
@keyframes outY {
  0% {
    top: -27px;
  }
  100% {
    top: 217px;
  }
}
@keyframes innerX {
  0% {
    left: -22px;
  }
  100% {
    left: 122px;
  }
}
@keyframes innerY {
  0% {
    top: 122px;
  }
  100% {
    top: -22px;
  }
}

@media screen and (max-width: 768px){
  .skill-container{
    min-width: 0;
    flex-direction: column;
    .skill-circle{
      margin: 0 auto;
    }
    .skill-description{
      margin-top: 40px;
      font-size: 14px;
      line-height: 16px;
    }
  }
}
@media screen and (min-width: 1500px){
  .skill-container{
    max-width: 1000px;
    .skill-circle{
      transform: scale(1.5, 1.5);
    }
    .skill-description{
      line-height: 30px;
      font-size: 22px;
    }
  }
}

li, ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-title{
  position: absolute;
  top: 70px;
  left: 20%;
  right: 20%;
  font-size: 24px;
  font-weight: normal;
  color: #fff;
  text-align: center;
}
@media screen and (max-width: 768px){
  .main-title{
    position: absolute;
    top: 4vh;
    left: 20%;
    right: 20%;
    font-size: 18px;
    font-weight: normal;
    color: #fff;
    text-align: center;
  }
}
@media screen and (min-width: 1500px){
  .main-title{
    top: 100px;
    font-size: 30px;
  }
}

@media screen and (max-width: 768px){
  #fp-nav{
    display: none;
  }
}

</style>