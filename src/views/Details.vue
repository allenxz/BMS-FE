<template>
  <div class="details">
    <el-page-header @back="goBack" class="page-header">
    </el-page-header>
    <div class="main">
      <div class="title">{{bookInfo.name}}</div>
      <!-- 图书信息，包括图书封面，图书信息以及评分 -->
      <div class="subject">
        <div class="mainImage">
          <a class="nbg" :href="bookInfo.url" :title="bookInfo.name">
            <img src="../assets/default.jpg" title="点击看大图" :alt="bookInfo.name" style="width: 135px;max-height: 200px;">
          </a>
        </div>
        <div class="info">
          <span>
            <span class="desc">作者:</span>
            <span class="content">{{bookInfo.author}}</span>
          </span>
          <br/>
          <span>
            <span class="desc">出版社:</span>
            <span class="content">{{bookInfo.issue}}</span>
          </span>
          <br/>
          <!-- <span>
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
          <br/> -->
          <span>
            <span class="desc">出版年:</span>
            <span class="content">{{bookInfo.issue_time}}</span>
          </span>
          <br/>
          <el-tag class="tag" size="mini" v-for="(tag, tagIndex) of bookInfo.tags" :key="tagIndex">{{tag}}</el-tag>
          <!-- <span>
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
          <br/> -->
        </div>
        <div class="rate">
          <div class="rate-title">图书评分</div>
          <div class="rate-number">{{bookInfo.score}}</div>
          <el-rate
            v-model="displayScore"
            disabled
            text-color="#ff9900">
          </el-rate>
        </div>
      </div>
      <!-- 相关信息，包括内容简介，作者简介，目录以及联系阅读 -->
      <div class="related-info">
        <div class="related-info-title">
          <span>喜欢"{{bookInfo.name}}"的人也喜欢</span>
          · · · · · ·
        </div>
        <div class="intro">
          <div class="display-area">
            <el-row>
              <el-col :span="5" v-for="(book, index) in recommend" :key="index">
                <a :href="'http://localhost:8090/details/' + book.bid"> 
                  <el-card :body-style="cardStyle" shadow="hover">
                    <img src="../assets/default.jpg" class="card-image">
                    <div class="info">
                      <div class="title">{{book.name}}</div>
                    </div>
                  </el-card>
                </a>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetch from '@/utils/fetch'
import Navbar from '../components/Navbar'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      cardStyle: {
        padding: '0px',
        margin: '0px',
        height: '196px',
        width: '115px'
      },
      displayScore: [],
      bookInfo: {},
      recommend: []
    }
  },
  components: {
    Navbar
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  mounted() {
    let id = this.$route.params.name;
    fetch.post('/getOneBook',{
      bid: id
    }).then(res => {
      if (res.data.data) {
        this.bookInfo = res.data.data.main
        this.recommend = res.data.data.recommend
        this.displayScore = (this.bookInfo.score/2).toFixed(1) - 0
      } else {
        console.log(res.data.exception)
      }
    })
  },
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}

</script>
<style scoped lang='scss'>
.details{
  .page-header{
    margin: 24px;
  }
  .main{
    width: 70%;
    margin: 30px auto;
    .tag{
      margin-top: 15px;
      margin-right: 5px;
    }
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
        margin: 0 200px 0 30px;
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
    .related-info{
      margin-top: 50px;
      .related-info-title{
        font-size: 16px Arial, Helvetica, sans-serif;
        color: #007722;
        line-height: 150%;
        margin-bottom: 8px;
        span{
          margin-right: 5px;
        }
      }
      .intro{
        margin-bottom: 50px;
        p{
          text-indent: 2em;
          word-break: normal;
          font: 12px Helvetica,Arial,sans-serif;
          line-height: 1.62;
        }
      }
      .indent {
        margin-bottom: 50px;
        word-break: break-all;
        font: 12px Helvetica,Arial,sans-serif;
        line-height: 1.62;
      }
      .display-area{
        display: flex;
        flex-direction: row;
        width: 700px;
        height: 430px;
        .card-image{
          width: 115px;
          height: 165px;
        }
        .el-card{
          height: 196px;
          width: 115px;
          margin: 10px auto;
          border: 0;
        }
        .info{
          padding-left: 5px;
          .title{
            color: #3377AA;
            font-size: 14px;
            margin:6px 0;
            line-height: 1.1;
            text-align: center;
            text-overflow: ellipsis;
          }
        }
      } 
    }
  }
}
</style>
