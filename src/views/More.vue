<template>
  <div class="more">
    <navbar></navbar>
    <div class="main">
      <div class="title">{{$route.params.title}}</div>
      <div class="list">
        <div class="list-item" v-for="o in 10" :key="o">
          <router-link class="cover" to="/details/焚舟记">
            <img src="https://img3.doubanio.com/view/subject/m/public/s30022290.jpg" class="book-image"/>
          </router-link>
          <div class="info">
            <h2 class="name"><router-link to="/details/焚舟记">焚舟记</router-link></h2>
            <el-rate
              class="rate"
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
              :max="10"
              >
            </el-rate>
            <p class="author">[英] 安吉拉·卡特 / 南京大学出版社 / 2019-6</p>
            <p class="desc">英国大作家安吉拉·卡特短篇小说全集。四十二个故事，四十二段颠倒映射的父权文化盗梦之旅。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  data () {
    return {
      value: 9.2
    }
  },
  components: {
    Navbar
  }
}

</script>
<style scoped lang='scss'>
.more{
  .main{
    width: 60%;
    margin: 30px auto;
    .title{
      word-wrap: break-word;
      font-size: 25px;
      font-weight: bold;
      color: #494949;
      line-height: 1.1;
    }
    .list{
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      .list-item{
        width: 460px;
        height: 145px;
        margin-bottom: 30px;
        .cover{
          float: left;
          .book-image{
            width: 100px;
            height: 145px;
          }
        }
        .info{
          display: block;
          margin-left: 120px;
          .name{
            color: #3377aa;
            font-size: 16px;
          }
          p{
            line-height: 16px;
            margin: 10px 0 11px 0;
          }
          .rate{
            margin: 10px 0;
          }
          .author{
            color: #494949;
            font-size: 13px;
          }
          .desc{
            color: #111;
            font: 12px Helvetica,Arial,sans-serif;
          }
        }
      }
    }
  }
}
</style>
