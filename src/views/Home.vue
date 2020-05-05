<template>
  <div class="more">
    <navbar></navbar>
    <div class="main">
      <p v-if="books.length === 0">搜索结果为空</p>
      <div class="list">
        <div class="list-item" v-for="(book, index) of books" :key="index">
          <router-link class="cover" :to="'/details/' + book.bid">
            <img src="../assets/default.jpg" class="book-image"/>
          </router-link>
          <div class="info">
            <h2 class="name"><router-link :to="'/details/' + book.bid">{{book.name}}</router-link></h2>
            <el-rate
              class="rate"
              v-model="scoreArr[index]"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
              >
            </el-rate>
            <p class="author">{{book.author}} / {{book.issue}} / {{book.issue_time}}</p>
            <div>
              <el-tag class="tag" size="mini" v-for="(tag, tagIndex) of book.tags" :key="tagIndex">{{tag}}</el-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from '../bus'
import Navbar from '../components/Navbar'
export default {
  data () {
    return {
      books: [],
      scoreArr: []
    }
  },
  components: {
    Navbar
  },
  created() {  
    Bus.$on('searchBook', (target, word) => {  
        if (!word) {
          return;
        }
        this.$http.post('/search',{
          keyword: word
        }).then(res => {
          this.books = res.data.recommend
          this.books.forEach(i => {
            this.scoreArr.push((i.score/2).toFixed(1))
          })
          localStorage.setItem('keyword',word)
        })  
    });  
  },
  mounted() {
    let word = localStorage.getItem('keyword')
    if(word) {
      this.$http.post('/search',{
        keyword: word
      }).then(res => {
        this.books = res.data.recommend
        this.books.forEach(i => {
          this.scoreArr.push((i.score/2).toFixed(1))
        })
      }) 
    }
  },
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
          .tag{
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
