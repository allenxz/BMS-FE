<template>
  <div class="home">
    <el-row class="main">
      <el-col :span="18" class="main-left">
        <div class="new-books block">
          <span class="title">新书速递</span>
          <span class="link-more"><a>更多 》</a></span>
        </div>
        <div class="display-area">
          <el-row>
            <el-col :span="6" v-for="o in 8" :key="o">
              <el-card :body-style="cardStyle" shadow="never">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="card-image">
                <div>
                  <span>好吃的汉堡</span>
                  <div>
                    <time class="time">jidsds</time>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        </el-col>
      <el-col :span="6" class="main-right">
        <div class="hot-tags block">
          <div>
            <span class="title">热门标签</span>
            <span class="link-more"><a>更多 》</a></span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
    border-bottom: 1px solid #ddd;
  }
  .card-image{
    width: 115px;
    height: 172px;
  }
  .el-card{
    height: 250px;
    width: 184px;
    margin: 10px auto;
    border: 0;
  }
  .main-left{
    padding-right: 100px;

  }
  .main-right{

  }
}
</style>
