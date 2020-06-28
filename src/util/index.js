/*
* @Author: Administrator
* @Date:   2020-06-28 17:41:46
* @Last Modified by:   Administrator
* @Last Modified time: 2020-06-28 18:29:07
*/
import mpx from '@mpxjs/core'
import mpxFetch from '@mpxjs/fetch'
mpx.use(mpxFetch)

function request (url, params = '', method = 'GET', data = '', isJson = false) {
  method = method.toUpperCase()
  const config = {
    url: url,
    method: method
  }
  if (params) {
    Object.assign(config, { params: params })
  }
  if (data) {
    Object.assign(config, { data: data })
  }
  if (isJson) {
    Object.assign(config, { emulateJSON: isJson })
  }
  // console.log(config)
  return mpx.xfetch.fetch(config)
}

export const interceptors = mpx.xfetch.interceptors
export const get = (url, params) => request(url, params, 'GET')
export const post = (url, data, isJson) => request(url, '', 'POST', data, isJson)
export const put = (url, data, isJson) => request(url, '', 'PUT', data, isJson)
export const del = (url, params) => request(url, params, 'DELETE')
