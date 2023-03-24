const userApi = '/user'

// 用户登录
function loginApi(data) {
    return $axios({
        url: `${userApi}/login`,
        method: 'post',
        data
    })
}

// 用户登出
function logoutApi() {
    return $axios({
        url: `${userApi}/logout`,
        method: 'post'
    })
}

// 查询用户是否已登录
function isLoginApi() {
    return $axios({
        url: `${userApi}/isLogin`,
        method: 'get'
    })
}

// 查询用户信息
function getUserApi() {
    return $axios({
        url: `${userApi}`,
        method: 'get',
        headers: {'Cache-Control': 'no-cache'}
    })
}

// 修改用户信息
function editUserApi(data) {
    return $axios({
        url: `${userApi}`,
        method: 'put',
        data
    })
}

// 修改用户邮箱
function editUserEmailApi(data) {
    return $axios({
        url: `${userApi}/email`,
        method: 'put',
        data
    })
}