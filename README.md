### 基于 Vue.js 网易严选 WebApp

#### 技术栈   vue + vue-router + axios + vuex + better-scroll

#### 该项目是一个组件化，工程化，模块化的项目,接口来自网易严选官方的地址，配置代理解决跨域问题。

### 遇到的问题
  1. 所有数据是异步获取的，这时候组件对象可能已经创建并且挂载，初次渲染到了页面，此时使用 BS 要监视数据的变化
     并且调用 nextTick 实例化 BS 对象。
  2. 二级路由首次跳转没有数据显示，因为没有二级路由的组件没法获得 query 参数ID，可以在计算属性中判断返回
  3. 下拉监视 pullingUp 事件，回调里发送请求，实现下拉刷新页面。


![](https://github.com/asiyuan/netease_shop/tree/master/static/demo1.png)
![](https://github.com/asiyuan/netease_shop/tree/master/static/demo2.png)
![](https://github.com/asiyuan/netease_shop/tree/master/static/demo3.png)
![](https://github.com/asiyuan/netease_shop/tree/master/static/demo4.png)