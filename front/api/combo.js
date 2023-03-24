const comboApi = '/combo'

// 条件查询套餐信息
function getComboListApi(params) {
    return $axios({
        url: `${comboApi}/list`,
        method: 'get',
        params
    })
}