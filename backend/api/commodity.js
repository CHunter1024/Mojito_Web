const commodityApi = '/commodity'

// 分页+条件查询商品信息
const getCommodityPageApi = (params) => {
  return $axios({
    url: `${commodityApi}/page`,
    method: 'get',
    params
  })
}

// 删除商品
const deleteCommodityApi = (data) => {
  return $axios({
    url: `${commodityApi}`,
    method: 'delete',
    data
  })
}

// 修改商品信息
const editCommodityApi = (data) => {
  return $axios({
    url: `${commodityApi}`,
    method: 'put',
    data
  })
}

// 新增商品
const addCommodityApi = (data) => {
  return $axios({
    url: `${commodityApi}`,
    method: 'post',
    data
  })
}

// 根据id查询商品信息
const getCommodityByIdApi = (id) => {
  return $axios({
    url: `${commodityApi}/${id}`,
    method: 'get'
  })
}

// 条件查询商品信息
const getCommodityListApi = (params) => {
  return $axios({
    url: `${commodityApi}/list`,
    method: 'get',
    params
  })
}

// 修改商品状态
const editCommodityStatusApi = (params) => {
  return $axios({
    url: `${commodityApi}/${params.status}`,
    method: 'put',
    data: params.ids
  })
}