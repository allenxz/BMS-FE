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
      <!-- 相关信息，包括内容简介，作者简介，目录以及联系阅读 -->
      <div class="related-info">
        <div class="related-info-title">
          <span>内容简介</span>
          · · · · · ·
        </div>
        <div class="intro">
          <p>深受医生、诗人、战士喜爱的鸦片怎么风靡世界6000年？</p>
          <p>奎宁在英国怎么就成了禁用药，后来又怎么再次崛起的？</p>
          <p>煤渣中提炼出来的染料如何带来了抗生素，改变整个医药行业？</p>
          <p>用不起眼的柳树皮造出来的阿司匹林如何逆袭成为百药之王？</p>
          <p>◎你吞下的每一粒药丸，背后都有一段精彩绝伦的传奇故事。</p>
          <p>化学制药兴起之前，人们能够享用到的真正有用的药物其实只有罂粟、金鸡纳树皮、柳树皮等寥寥几种，即便到了20世纪初期，大多数医生治疗疾病采用的方法一般是砒霜、水银和泻药，偶尔加上不限量的咖啡和威士忌……真正改变药物历史的是化学家和生物学家，他们带来了抗生素，带来了更有针对性的施医用药的方法，也让我们看见药物、疾病、身体之间的关联。这本书是他们的故事。</p>
          <p>◎与众不同的医学史读物，观点很颠覆，很有启发。</p>    <p>药物由前现代到现代的演变，不是传统医学史著作所讲述的英雄人物和伟大发现的历史，是我们...</p>
        </div>
        <div class="related-info-title">
          <span>作品简介</span>
          · · · · · ·
        </div>
        <div class="intro">
          <p>德劳因·伯奇（Druin Burch），曾在英国东南部多家医院工作，现任牛津大学医院主治医生，并在牛津大学教授人类进化学、生理学、生态学等学科，并为《泰晤士报文学增刊》和《卫报》撰稿，著有关于维多利亚时代外科医生阿斯特利·帕斯顿·库珀（Astley Paston Cooper）的传记《挖掘死者》（Digging up the Dead）。</p>
        </div>
        <div class="related-info-title">
          <span>目录</span>
          · · · · · ·
        </div>
        <div class="indent">
          引 言 1<br>
          第一部分 前现代药物<br>
          第1 章 早期医学与鸦片 2<br>
          第2 章 诡辩与鸦片酊 13<br>
          第3 章 自信与奎宁 25<br>
          第4 章 学习做实验 39<br>
          第5 章 树的味道 48<br>
          第二部分 化学的崛起<br>
          第6 章 甜菜根、催眠术与有机化学 54<br>
          第7 章 新英格兰与新思路 61<br>
          第8 章 染料、着色剂与抗生素 69<br>
          第9 章 医学传教士 85<br>
          第三部分 抗生素时代<br>
          第10 章 阿司匹林与药物研发 96<br>
          第11 章 止咳良药海洛因 106<br>
          第12 章 弗朗西斯·高尔顿：几近革新 110<br>
          第13 章 抗生素与纳粹时期的诺贝尔奖 116<br>
          第14 章 盘尼西林与链霉素 129<br>
          第四部分 统计学与药物试验的争议<br>
          第15 章 “萨洛尼卡之病——我的第一次、最糟糕也最成功的临床试验” 146<br>
          第16 章 死神之首 157<br>
          第17 章 伦理与未来一瞥 171<br>
          第18 章 沙利度胺的未竟之殇 185<br>
          第19 章 梅毒、麻风与颅脑外伤 198<br>
          第五部分 药物的新挑战<br>
          第20 章 阿司匹林与心脏 216<br>
          第21 章 大规模试验与宏伟蓝图 236<br>
          第22 章 为心脏与心智而战 245<br>
          第23 章 意见的风险 252<br>
          第六部分 为何医学总被愚昧围绕<br>
          第24 章 革命的自信 262<br>
          第25 章 怀疑之美 272<br>
          参考文献 285<br>
          致 谢 294<br>
        </div>
        <div class="related-info-title">
          <span>喜欢"{{$route.params.name}}"的人也喜欢</span>
          · · · · · ·
        </div>
        <div class="intro">
          <div class="display-area">
            <el-row>
              <el-col :span="5" v-for="o in 8" :key="o">
                <a>
                  <el-card :body-style="cardStyle" shadow="hover">
                    <img src="https://img1.doubanio.com/view/subject/m/public/s33301849.jpg" class="card-image">
                    <div class="info">
                      <div class="title">创世纪</div>
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
import Navbar from '../components/Navbar'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      value: 4.6,
      myValue: null,
      cardStyle: {
        padding: '0px',
        margin: '0px',
        height: '196px',
        width: '115px'
      }
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
