const categoryApi = '/category'

// 分页查询分类信息
const getCategoryPageApi = (params) => {
  return $axios({
    url: `${categoryApi}/page`,
    method: 'get',
    params
  })
}

// 删除分类
const deleteCategoryApi = (id) => {
  return $axios({
    url: `${categoryApi}/${id}`,
    method: 'delete',
  })
}

// 修改分类信息
const editCategoryApi = (data) => {
  return $axios({
    url: `${categoryApi}`,
    method: 'put',
    data
  })
}

// 新增分类
const addCategoryApi = (data) => {
  return $axios({
    url: `${categoryApi}`,
    method: 'post',
    data
  })
}

// 条件查询分类信息
const getCategoryListApi = (params) => {
  return $axios({
    url: '/category/list',
    method: 'get',
    params
  })
}