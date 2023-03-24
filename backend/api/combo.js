const comboApi = '/combo'

// 分页+条件查询套餐信息
const getComboPageApi = (params) => {
  return $axios({
    url: `${comboApi}/page`,
    method: 'get',
    params
  })
}

// 删除套餐
const deleteComboApi = (data) => {
  return $axios({
    url: `${comboApi}`,
    method: 'delete',
    data
  })
}

// 修改套餐信息
const editComboApi = (data) => {
  return $axios({
    url: `${comboApi}`,
    method: 'put',
    data
  })
}

// 新增套餐
const addComboApi = (data) => {
  return $axios({
    url: `${comboApi}`,
    method: 'post',
    data
  })
}

// 根据id查询套餐信息
const getComboByIdApi = (id) => {
  return $axios({
    url: `${comboApi}/${id}`,
    method: 'get'
  })
}

// 修改套餐状态
const editComboStatusApi = (params) => {
  return $axios({
    url: `${comboApi}/${params.status}`,
    method: 'put',
    data: params.ids
  })
}
