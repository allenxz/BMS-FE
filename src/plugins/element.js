import Vue from 'vue'
import { Button, Input, Row, Col, Card, Rate, Icon, Tag, Notification,PageHeader  } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Button)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Rate)
Vue.use(Icon)
Vue.use(Tag)
Vue.use(PageHeader)

Vue.prototype.$notify = Notification;