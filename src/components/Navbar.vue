<template>
  <div class="navbar">
    <div class="nav-items">
      <ul>
        <li v-if="!isLogin"><router-link to="/login" >登录</router-link></li>
        <li v-else><a @click="loginOut">注销</a></li>
      </ul>
    </div>
    <div class="nav-wrap">
      <div class="nav-logo">
        <router-link to="/">
          <img src="@/assets/logo.png"/>
        </router-link>
      </div>
      <div class="nav-search">
        <el-input placeholder="输入您想查询的书籍名称" v-model="input" class="nav-ipt">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from '../bus'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      input: ''
    }
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  mounted () {
    this.input = localStorage.getItem('keyword')
  },
  methods: {
    loginOut: function () {
      this.$notify({
        message: '成功登出',
        type: 'success'
      });
      localStorage.removeItem('token')
      localStorage.removeItem('keyword')
      this.$store.commit('logout');
    },
    search (e) {
      Bus.$emit('searchBook', e.target, this.input)
    }
  }
}
</script>
<style scoped lang='scss'>
.navbar{
  box-shadow: 0 1px 2px rgba(0,0,0,.05), 0 5px 10px rgba(0,0,0,.05);
  .nav-items{
    height: 28px;
    width: 100%;
    background-color: #545652;
    padding: 0;
    ul {
      display:flex;
      justify-content: flex-end;
      align-items: flex-end;
      margin-right: 15px;
      li{
        list-style: none;
        display: inline;
        font-size:14px;
        vertical-align: middle;
        line-height: 28px;
        color: white;
        padding: 0 12px;
        a{
          color: white;
        } 
      }
    }
  }
  .nav-wrap{
    display: flex;
    height: 115px;
    width: 100%;
    background-color: #F6F6F1;
    .nav-logo {
      a{
        img{
          width: 150px;
          margin: 38.25px 50px;
        }
      }
    }
    .nav-search{
      flex: 1;
      .nav-ipt{
        width: 80%;
        max-width: 470px;
        margin: 38px 20%;
        box-shadow: 0 1px 2px rgba(0,0,0,.05), 0 5px 10px rgba(0,0,0,.05);
      }
    }
  }
}

</style>
