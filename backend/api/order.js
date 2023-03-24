const orderApi = '/order'

// 分页+条件查询订单信息
const getOrderPageApi = (params) => {
  return $axios({
    url: `${orderApi}/page`,
    method: 'get',
    params
  })
}

// 修改订单信息
const editOrderApi = (data) => {
  return $axios({
    url: `${orderApi}`,
    method: 'put',
    data
  })
}
