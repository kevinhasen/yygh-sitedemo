import request from '@/utils/request'

const api_name = '/api/hosp/hospital'
export default {
  //带条件分页查询医院列表
  getHospitalPage(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  //根据医院名称获取医院列表
  findByHosname(hosname) {
    return request({
      url: `${api_name}/findByHosname/${hosname}`,
      method: 'get'
    })
  },
  //获取科室列表
  getDepartmentTree(hoscode) {
    return request({
      url: `${api_name}/department/${hoscode}`,
      method: 'get'
    })
  },
  //医院预约挂号详情
  getHospByHoscode(hoscode) {
    return request({
      url: `${api_name}/${hoscode}`,
      method: 'get'
    })
  },
  //获取可预约排班数据
  getBookingSchedule(page, limit, hoscode, depcode) {
    return request({
      url: `${api_name}/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
      method: 'get'
    })
  },
  //获取排班数据
  findScheduleList(hoscode, depcode, workDate) {
    return request({
      url: `${api_name}/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`,
      method: 'get'
    })
  },
//根据排班id获取排班详情
    getSchedule(id) {
        return request({
            url: `${api_name}/getSchedule/${id}`,
            method: 'get'
        })
    }




}
