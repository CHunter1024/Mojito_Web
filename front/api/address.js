const addressApi = '/addressBook'

// 查询所有地址信息
function getAddressListApi() {
    return $axios({
        url: `${addressApi}`,
        method: 'get',
        headers: {'Cache-Control': 'no-cache'}
    })
}

// 新增地址
function addAddressApi(data) {
    return $axios({
        url: `${addressApi}`,
        method: 'post',
        data
    })
}

// 根据id查询地址信息
function getAddressByIdApi(id) {
    return $axios({
        url: `${addressApi}/${id}`,
        method: 'get'
    })
}

// 修改地址信息
function editAddressApi(data) {
    return $axios({
        url: `${addressApi}`,
        method: 'put',
        data
    })
}

// 删除地址
function deleteAddressApi(id) {
    return $axios({
        url: `${addressApi}/${id}`,
        method: 'delete'
    })
}

// 查询下单地址信息
function getOrderAddressApi() {
    return $axios({
        url: `${addressApi}/order`,
        method: 'get'
    })
}