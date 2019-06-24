<template>
  <div class="details">
    <navbar></navbar>
    <div class="main">
      <div class="title">{{$route.params.name}}</div>
      <!-- 图书信息，包括图书封面，图书信息以及评分 -->
      <div class="subject">
        <div class="mainImage">
          <a class="nbg" href="https://img3.doubanio.com/view/subject/l/public/s30022290.jpg" title="焚舟纪">
            <img src="https://img3.doubanio.com/view/subject/l/public/s30022290.jpg" title="点击看大图" alt="焚舟纪" style="width: 135px;max-height: 200px;">
          </a>
        </div>
        <div class="info">
          <span>
            <span class="desc">作者:</span>
            <span class="content">[英] 安吉拉·卡特</span>
          </span>
          <br/>
          <span>
            <span class="desc">出版社:</span>
            <span class="content">南京大学出版社</span>
          </span>
          <br/>
          <span>
            <span class="desc">出品方:</span>
            <span class="content">全本书店</span>
          </span>
          <br/>
          <span>
            <span class="desc">副标题:</span>
            <span class="content">附赠精美2020年日历</span>
          </span>
          <br/>
          <span>
            <span class="desc">原作名:</span>
            <span class="content">Burning Your Boats</span>
          </span>
          <br/>
          <span>
            <span class="desc">译者:</span>
            <span class="content">严韵</span>
          </span>
          <br/>
          <span>
            <span class="desc">出版年:</span>
            <span class="content">2019-6-1</span>
          </span>
          <br/>
          <span>
            <span class="desc">页数:</span>
            <span class="content">616</span>
          </span>
          <br/>
          <span>
            <span class="desc">定价:</span>
            <span class="content">120</span>
          </span>
          <br/>
          <span>
            <span class="desc">装帧:</span>
            <span class="content">精装全一册</span>
          </span>
          <br/>
          <span>
            <span class="desc">ISBN:</span>
            <span class="content">9787305204784</span>
          </span>
          <br/>
        </div>
        <div class="rate">
          <div class="rate-title">图书评分</div>
          <div class="rate-number">{{value*2}}</div>
          <el-rate
            v-model="value"
            disabled
            text-color="#ff9900">
          </el-rate>
        </div>
        <div class="my-rate" v-if="isLogin">
          <div class="demonstration">我的评分</div>
          <el-rate 
            v-model="myValue"
            show-text
          >
          </el-rate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      value: 4.6,
      myValue: null
    }
  },
  components: {
    Navbar
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  }
}

</script>
<style scoped lang='scss'>
.details{
  .main{
    width: 70%;
    margin: 30px auto;
    .title{
      word-wrap: break-word;
      font-size: 25px;
      font-weight: bold;
      color: #494949;
      line-height: 1.1;
    }
    .subject{
      width: 775px;
      height: 313px;
      margin-top: 20px;
      .mainImage{
        float: left;
        text-align: center;
        margin: 3px 12px 0 0;
        max-width: 155px;
        overflow: hidden;
      }
      .info{
        float: left;
        max-width: 248px;
        word-wrap: break-word;
        margin-top: -5px;
        margin: 0 100px 0 10px;
        span{
          font: 13px Arial, Helvetica, sans-serif;
          line-height: 150%;
        }
        .desc{
          color: #666666;
        }
        .content{
          margin-left: 5px;
          color: #111;
        }
      }
      .rate{
        float: left;
        width: 155px;
        margin: 2px 0 0 0;
        padding: 0 0 0 15px;
        border-left: 1px solid #eaeaea;
        .rate-title{
          line-height: 1;
          font-size: 12px;
          color: #9b9b9b;
          margin-bottom: 10px;
        }
        .number{
          line-height: 2;
          color: #494949;
          padding: 0;
          min-width: 30%;
          font-size: 28px;
          font-weight: bold;
        }
      }
      .my-rate{
        clear: both;
        display: block;
        padding: 20px 0 3px;
        .demonstration{
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
