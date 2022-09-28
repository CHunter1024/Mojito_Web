(function (win) {
  axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
  // 创建axios实例
  const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: '/backend',
    // 超时
    // timeout: 10000
    timeout: 100000000
  })

  // 请求拦截器
  service.interceptors.request.use(
    config => {
      // 是否需要设置 token
      // const isToken = (config.headers || {}).isToken === false
      // if (getToken() && !isToken) {
      //   config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
      // }

      // get请求拼接params参数
      if (config.method === 'get' && config.params) {
        let url = config.url + '?'
        for (const propName of Object.keys(config.params)) {
          const value = config.params[propName]
          let part = encodeURIComponent(propName) + "="
          if (value !== undefined && value !== null) {
            if (typeof value === 'object') {
              for (const key of Object.keys(value)) {
                let params = propName + '[' + key + ']'
                let subPart = encodeURIComponent(params) + "="
                url += subPart + encodeURIComponent(value[key]) + "&"
              }
            } else {
              url += part + encodeURIComponent(value) + "&"
            }
          }
        }
        url = url.slice(0, -1)  // 删除最后一个&
        config.params = {}
        config.url = url
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  // 响应拦截器
  service.interceptors.response.use(
    response => {
      // 根据后端数据判断登录状态
      if (response.data.code === 0 && response.data.msg === 'not logged in') {
        window.top.location.href = '/backend/page/login/login.html'
      } else {
        return response.data
      }
    },
    error => {
      let { message } = error
      if (message === "Network Error") {
        message = "后端接口连接异常"
      } else if (message.includes("timeout")) {
        message = "系统接口请求超时";
      } else if (message.includes("Request failed with status code")) {
        message = "系统接口" + message.substr(message.length - 3) + "异常";
      }
      window.ELEMENT.Message({
        message: message,
        type: 'error'
      })
      return Promise.reject(error)
    }
  )
  win.$axios = service
})(window);
