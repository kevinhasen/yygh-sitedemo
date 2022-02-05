import request from '@/utils/request'

const api_name = '/api/msm'
export default {
    //发送验证码
  sendCode(mobile) {
    return request({
      url: `${api_name}/send/${mobile}`,
      method: 'get'
    })
  }
}
