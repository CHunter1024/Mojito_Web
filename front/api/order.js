const orderApi = '/order'

// 提交订单
function addOrderApi(data) {
    return $axios({
        url: `${orderApi}`,
        method: 'post',
        data
    })
}

// 分页查询订单信息
function getOrderPageApi(params) {
    return $axios({
        url: `${orderApi}/page`,
        method: 'get',
        params,
        headers: {'Cache-Control': 'no-cache'}
    })
}

// 再来一单
function addOrderAgainApi(data) {
  return $axios({
      url: `${orderApi}/again`,
      method: 'post',
      data
  })
}

// 根据id查询订单信息
function getOrderApi(id) {
    return $axios({
        url: `${orderApi}/${id}`,
        method: 'get'
    })
}

// 删除订单
function deleteOrderApi(id) {
    return $axios({
        url: `${orderApi}/${id}`,
        method: 'delete'
    })
}