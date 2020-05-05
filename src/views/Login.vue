<template>
  <div class="login">
    <div class="login-wrap"></div> 
    <div class="login-card">
      <button class="btn back">
        <router-link to="/"><i class="el-icon-arrow-left"></i></router-link>
      </button>
      <div class="card-title">登录</div>
      <div class="login-form">
        <input class="ipt" v-model="userName" placeholder="请输入用户名"/>
        <input class="ipt" v-model="password" placeholder="请输入密码" type="password"/>
        <button class="submmit" @click="toLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    toLogin: function () {
      this.$http.post('/login',{
        username: this.userName,
        password: this.password
      }).then(res => {
        if (res.data) {
          this.$notify({
            message: '成功登录',
            type: 'success'
          });
          localStorage.setItem('token', res.data.token)
          this.$store.commit('login');
          this.$router.go(-1);
        } else {
          this.$notify({
            message: res.exception,
            type: 'error'
          });
        }
      })
    }
  }
}

</script>
<style scoped lang='scss'>
.login{
  .login-wrap{
    height: 100vh;
    background: linear-gradient(to right, #a7bfe8, #6190e8);
  }
  .login-card{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    transform: translate(-50%,-50%);
    box-shadow: 0 1px 2px rgba(0,0,0,.05), 0 5px 10px rgba(0,0,0,.05);
    background: #fff;
    .back{
      position: absolute;
      top: 0;
      left: 0;
      width: 3rem;
      height: 3rem;
      font-size: 1.5rem;
    }
    .to{
      position: absolute;
      top: 0;
      right: 0;
      width: 5rem;
      height: 3rem;
      font-size: 1rem;
    }
    .btn{
      border-radius: 0;
      border: 0;
      background: #A7BFE8;
      a{
        color: #fff;
      }
      transition: all .3s;
      &:hover{
        background-color: white;
        a{
          color: #A7BFE8;
        }
      }
    }
    .card-title{
      font-weight: bold;
      font-size: 1.8rem;
      color: #a7bfe8;
      text-align: center;
      margin-top:60px;
    }
    .login-form{
      margin: 30px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      .ipt{
        width: 50%;
        display: block;
        height: calc(2.25rem + 2px);
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        text-align: center;
        border-radius: 10px;
        margin-bottom: 30px;
        color: #A7BFE8;
        border-color: rgba(167,191,232,.25);
        &:focus {
          box-shadow: 0 0 0 0.2rem rgba(167,191,232,.25);
        }
      }
      .submmit{
        color: #fff;
        padding: .5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        width: 10em;
        transition: all .4s;
        border-radius: 20px;
        border: 2px solid transparent;
        background: #a7bfe8;
        &:hover{
          background: #fff;
          color: #a7bfe8;
          border: 2px solid #a7bfe8;
        }
      }
      .forget{
        margin-top: 20px;
        color: #A7BFE8;
      }
    }
  }
}
</style>
