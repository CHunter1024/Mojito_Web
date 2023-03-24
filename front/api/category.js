const categoryApi = '/category'

// 查询所有分类信息
function getCategoryListApi() {
    return $axios({
        url: `${categoryApi}/list`,
        method: 'get'
    })
}