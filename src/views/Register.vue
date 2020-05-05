<template>
  <div class="register"> 
    <div class="register-warp"></div>
    <div class="register-card">
      <button class="btn back">
        <router-link to="/"><i class="el-icon-arrow-left"></i></router-link>
      </button>
      <button class="btn to">
        <router-link to="/login">去登录 ></router-link>
      </button>
      <div class="card-title">注册</div>
      <div class="register-form">
        <input class="ipt" v-model="userName" placeholder="想个响亮的名字"/>
        <input class="ipt" v-model="password" placeholder="密码谁都不要告诉！" type="password"/>
        <button class="submmit">Register</button>
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
  }
}

</script>
<style scoped lang='scss'>
.register{
  .register-warp{
    height: 100vh;
    background: linear-gradient(to right, #ffdde1, #ee9ca7);
  }
  .register-card{
    position: absolute;
    top: 55%;
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
      background: #F0A5AF;
      a{
        color: #fff;
      }
      transition: all .3s;
      &:hover{
        background-color: white;
        a{
          color: #F0A5AF;
        }
      }
    }
    .card-title{
      font-weight: bold;
      font-size: 1.8rem;
      color: #F0A5AF;
      text-align: center;
      margin-top:60px;
    }
    .register-form{
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
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        text-align: center;
        border-radius: 10px;
        margin-bottom: 30px;
        color: #F0A5AF;
        border-color: rgba(238,156,167,.25);
        &:focus {
          box-shadow: 0 0 0 0.2rem rgba(238,156,167,.25);
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
        background: #F0A5AF;
        &:hover{
          background: #fff;
          color: #F0A5AF;
          border: 2px solid #F0A5AF;
        }
      }
    }
  }
}
</style>
