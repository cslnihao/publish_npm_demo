import VFocus from './directive'

const install = function (Vue) {
  Vue.directive('focus', VFocus)
}

// 引入
if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}

export default {
  install
}

