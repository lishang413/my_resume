<template>
  <div class="contactMe">
    <h1 class="title">联系我</h1>
    <div class="content">
      <div class="keywords">
        <div v-for="keywords in keywordsList">{{ keywords.keywords }}</div>
      </div>
      <div class="briefDescription" v-html="briefDescription"> </div>
      <div class="briefDescription" v-for="item in contactInformation">{{ item.title }}:{{item.content}}</div>
      <a v-if="downloadWord.allow" :href="downloadWord.href" :download="downloadWord.documentName">Word简历件下载</a>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {contactMeInfo} from "@/info/info";

export default defineComponent({
  name: "contactMe",
  data(){
    return{
      keywordsList:new contactMeInfo().keywordsList,
      briefDescription: new contactMeInfo().briefDescription,
      contactInformation:new contactMeInfo().contactInformation,
      downloadWord:new contactMeInfo().downloadWord,

    }
  }
})
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>

.contactMe {
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  color: #FFFFFF;
  width: 100%;
  height: 100%;
  //background: #f3f2f3;
  display: block;
  //overflow: scroll;


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
    position: absolute;
    top: 20vh;
    left: 10vw;
    right: 10vw;
    margin: 0 auto;
    text-align: center;
    color: #fff;

    .keywords{
      font-size: 1.3rem;
      margin: 0 auto;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between
    }

    .briefDescription{
      font-size: 0.9rem;
      margin: 20px auto ;
      line-height: 2rem;
    }
  }

  @media screen and(min-width: 600px) {
    .content{top: 25vh;}
  }

}


</style>