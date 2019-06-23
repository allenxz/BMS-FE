<template>
  <div class="home">
    <!-- 导航栏 -->
    <navbar></navbar>
    <el-row class="main">
      <el-col :span="18" class="main-left">
        <!-- 新书速递 begin-->
        <div class="new-books">
          <div class="block">
            <span class="title">新书速递</span>
            <span class="link-more"><router-link to="/more/新书速递">更多 》</router-link></span>
          </div>
          <div class="display-area">
            <el-row>
              <el-col :span="6" v-for="o in 8" :key="o">
                <a>
                  <el-card :body-style="cardStyle" shadow="hover">
                    <img src="https://img3.doubanio.com/view/subject/m/public/s33297595.jpg" class="card-image">
                    <div class="info">
                      <div class="title">一只计划逃跑的蛋</div>
                      <div class="author">康华 著 / 耿艾慈 绘</div>
                    </div>
                  </el-card>
                </a>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 新书速递 end-->
        <!-- 热门图书 begin-->
        <div class="hot-books">
          <div class="block">
            <span class="title">热门图书</span>
            <span class="link-more"><router-link to="/more/热门图书">更多 》</router-link></span>
          </div>
          <div class="display-area">
            <el-row>
              <el-col :span="6" v-for="o in 8" :key="o">
                <a>
                  <el-card :body-style="cardStyle" shadow="hover">
                    <img src="https://img3.doubanio.com/view/subject/m/public/s32296303.jpg" class="card-image">
                    <div class="info">
                      <div class="title">药物简史</div>
                      <div class="author">[英]德劳因·伯奇（Druin Burch）</div>
                    </div>
                  </el-card>
                </a>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 热门图书 end-->
        <!-- 猜你喜欢 begin-->
        <div class="guess-like" v-show="isLogin">
          <div class="block">
            <span class="title">猜你喜欢</span>
            <span class="link-more"><router-link to="/more/猜你喜欢">更多 》</router-link></span>
          </div>
          <div class="display-area">
            <el-row>
              <el-col :span="6" v-for="o in 8" :key="o">
                <a>
                  <el-card :body-style="cardStyle" shadow="hover">
                    <img src="https://img3.doubanio.com/view/subject/m/public/s30011126.jpg" class="card-image">
                    <div class="info">
                      <div class="title">驯化</div>
                      <div class="author">【英】艾丽丝·罗伯茨</div>
                    </div>
                  </el-card>
                </a>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 猜你喜欢 end-->
      </el-col>
      <el-col :span="6" class="main-right">
        <!-- 热门标签 begin -->
        <div class="hot-tags">
          <div class="block">
              <span class="title">热门标签</span>
              <!-- <span class="link-more"><router-link to="/more">所有热门标签 》</router-link></span> -->
          </div>
          <div class="tags-area">
            <div v-for="o in 100" :key="o" class="tag">
              <a>{{o}}</a>
            </div>
          </div>
        </div>
        <!-- 热门标签 end -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import { mapState } from 'vuex';
export default {
  name: 'home',
  data () {
    return {
      cardStyle: {
        padding: '0px',
        margin: '0px',
        height: '219px',
        width: '115px'
      }
    }
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  components: {
    Navbar
  }
}
</script>
<style scoped lang="scss">
.main{
  width: 80%;
  margin: 40px auto;
  .block{
    .title{
      font-weight: 600;
      margin-right: 20px;
    }
    .link-more{
      display: inline;
      font-size: 13px;
      color: #689AC0;
    }
    padding-bottom: 8px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ddd;
  }
  .card-image{
    width: 115px;
    height: 172px;
  }
  .el-card{
    height: 219px;
    width: 115px;
    margin: 10px auto;
    border: 0;
  }
  .info{
    padding-left: 5px;
    .title{
      color: #3377AA;
      font-size: 14px;
      margin-bottom: 6px;
      line-height: 1.1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .author{
      color: #333;
      width: 102px;
      font-size: 13px;
      margin-bottom: 6px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .hot-books,.guess-like{
    margin-top:50px;
  }
  .main-left{
    padding-right: 100px;
  }
  .tags-area{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 15px;
  }
  .tag{
    color: #3377AA;
    background: #E8E8E8;
    padding: 5px;
    margin: 5px;
  }
}
</style>
