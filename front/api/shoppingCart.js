const shoppingCartApi = '/shoppingCart'

// 购物车中添加商品
function addShoppingCartApi(data) {
    return $axios({
        url: `${shoppingCartApi}`,
        method: 'post',
        data
    })
}

// 清空购物车中的商品
function clearShoppingCartApi() {
    return $axios({
        url: `${shoppingCartApi}/all`,
        method: 'delete'
    })
}

// 修改购物车中的商品
function editShoppingCartApi(data) {
    return $axios({
        url: `${shoppingCartApi}`,
        method: 'put',
        data
    })
}

// 查询购物车中的商品信息
function getShoppingCartApi() {
    return $axios({
        url: `${shoppingCartApi}`,
        method: 'get',
        headers: {'Cache-Control': 'no-cache'}
    })
}