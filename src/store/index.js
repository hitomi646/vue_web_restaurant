import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions' // * as，es6语法
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
// vue的插件，每次修改会打出详细数据
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug, 
  plugins: debug ? [createLogger()] : []
})
