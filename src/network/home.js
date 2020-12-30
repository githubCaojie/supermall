import {request} from './request';

export function getHomeMultidata() {
  return request({
    url: '/homeMultidata'
  })
}

export function getHomeGoods() {
  return request({
    url: '/homeData'
  })
}