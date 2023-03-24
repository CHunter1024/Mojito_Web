const commodityApi = '/commodity'

// 条件查询商品信息
function getCommodityListApi(params) {
    return $axios({
        url: `${commodityApi}/list`,
        method: 'get',
        params
    })
}