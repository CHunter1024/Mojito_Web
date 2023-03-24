const employeeApi = '/employee'

// 员工登录
function loginApi(data) {
  return $axios({
    url: `${employeeApi}/login`,
    method: 'post',
    data
  })
}

// 员工登出
function logoutApi(){
  return $axios({
    url: `${employeeApi}/logout`,
    method: 'post',
  })
}

// 获取当前员工信息
function getCurrEmpApi() {
  return $axios({
    url: `${employeeApi}/getCurrEmp`,
    method: 'get'
  })
}

// 修改当前员工信息
function editCurrEmpApi(data) {
  return $axios({
    url: `${employeeApi}/putCurrEmp`,
    method: 'put',
    data
  })
}

// 分页+条件查询员工信息
function getEmployeePageApi(params) {
  return $axios({
    url: `${employeeApi}/page`,
    method: 'get',
    params
  })
}

// 新增员工
function addEmployeeApi(data) {
  return $axios({
    url: `${employeeApi}`,
    method: 'post',
    data
  })
}

// 修改员工信息
function editEmployeeApi(data) {
  return $axios({
    url: `${employeeApi}`,
    method: 'put',
    data
  })
}

// 根据id查询员工信息
function getEmployeeByIdApi(id) {
  return $axios({
    url: `${employeeApi}/${id}`,
    method: 'get'
  })
}
