// 获取验证码
function getCodeApi(email, purpose) {
    return $axios({
        url: `common/getCode/${email}/${purpose}`,
        method: 'get',
    })
}

// 文件上传
function uploadFileApi(file) {
    // 文件上传需要以表单的形式发送
    const data = new FormData()
    data.append("file", file)  // 这里一定要双引号
    return $axios({
        url: '/common/upload',
        method: 'post',
        headers: {'Content-Type': 'multipart/form-data'},
        data
    })
}