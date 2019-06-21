<template>
  <div id="Navbar">
    <div class="nav-items">
      <ul>
        <li><a>登录</a></li>
        <li><a>注册</a></li>
      </ul>
    </div>
    <div class="nav-wrap">
      <div class="nav-logo">
        <router-link to="/">图书推荐系统</router-link>
      </div>
      <div class="nav-search">
        <el-input placeholder="输入您想查询的书籍名称" v-model="input" class="nav-ipt">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}

</script>
<style scoped lang='scss'>
#Navbar{
  box-shadow: 0 1px 2px rgba(0,0,0,.05), 0 5px 10px rgba(0,0,0,.05);
  .nav-items{
    height: 28px;
    background-color: #545652;
    padding: 0;
    ul {
      float: right;
      margin-right: 15px;
      li{
        list-style: none;
        display: inline;
        font-size:14px;
        vertical-align: middle;
        line-height: 28px;
        color: white;
        padding: 0 12px; 
      }
    }
  }
  .nav-wrap{
    display: flex;
    height: 115px;
    width: 100%;
    background-color: #F6F6F1;
    .nav-logo {
      flex: 0 0 400px;
      width: 30%;
      a{
        color: #614e3c;
        font-family: Helvetica,Arial, sans-serif;
        font-size: 30px;
        font-weight: 600;
        line-height: 115px;
        vertical-align: middle;
        margin-left: 100px;
      }
    }
    .nav-search{
      flex: 1 1 auto;
      .nav-ipt{
        width: 470px;
        margin: 38px auto;
        box-shadow: 0 1px 2px rgba(0,0,0,.05), 0 5px 10px rgba(0,0,0,.05);
      }
    }
  }
}

</style>
