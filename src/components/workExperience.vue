<template>
<div class="workExperience">
  <h1 class="title">工作经历</h1>
  <div class="content" v-for="list in workExperienceList" >
    <div class="company" >
      <div>{{ list.name }}</div>
      <div>{{ list.startTime }} - {{list.endTime}}</div>
    </div>
    <div class="company_experience">
      <div>主要技术栈：{{list.useSkill}}</div>
      <div>{{list.workDescription}}</div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { workExperienceInfo} from "@/info/info";

export default defineComponent({
  name: "workExperience",
  data(){
    return{
      workExperienceList: new workExperienceInfo().experienceList
    }
  }
})
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
.workExperience {
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  color: #FFFFFF;
  width: 100%;
  height: auto;
  min-height: 100%;
  overflow: auto;


  .title{
    padding: 2rem 0 ;
    left: 20%;
    right: 20%;
    font-size: 24px;
    font-weight: normal;
    color: #fff;
    text-align: center;
  }

  .content{
    width: 80%;
    margin:0 auto 50px;
    border:2px solid #ffffff;
    display: flex;
    flex-flow: wrap;
    text-align: left;
    word-break: break-all;
    word-wrap: break-word;
    white-space: normal;


    .company {
      min-width: 240px;
      max-width: 30%;
      padding: 2% 4%;
      div{
        padding-bottom: 10px;
      }

    }
    .company_experience {
      border-left: 2px solid #ffffff;
      flex: 1;
      min-width: 240px;
      padding: 2% 4%;

      div{
        padding-bottom: 10px;
      }

    }
    @media screen and (max-width: 716px){
      .company_experience{border: 0}
    }
  }
}
</style>