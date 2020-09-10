# publish_npm_demo

## 指令、组件上传npm的demo

说明：dist是打包后的文件，src是自己的文件，test.vue是测试demo	<br/>
[publish-npm-demo](https://github.com/cslnihao/publish_npm_demo)

### 1、将指令或组件定义为全局引入
```js
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
```

### 2、配置package.json

- 打包后的入口文件 "main": "dist/v-focus.umd.min.js"
- 私有开放权限设置 "private": false
- npm install后的文件集 "files": []
- 打包命令配置 scripts： {}

### 3、执行npm run build

- 需先执行 npm install -g @vue/cli-service-global 进行cli全局引入
- 执行 npm run build 打包

### 4、发布至npm

- 登录npm官网，注册登录 https://www.npmjs.com/
- cd到发布文件夹，比如 publis_npm_demo
- npm login
- npm publish

### 5、项目中引入

npm install 包名（比如publish_npm_demo）

```js

import focus from 'publish_npm_demo'

Vue.use(focus)

```