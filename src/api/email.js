import request from '@/utils/request'
import Vue from 'Vue'
import vueJsonp from 'vue-jsonp'

Vue.use(vueJsonp)

export function getEmailLists () {
	return Vue.jsonp('http://localhost:7001/email/getEmailLists',{
		uname: 'yaoyongfang'
	});
}

export function getEmail (emailpath) {
	return Vue.jsonp('http://localhost:7001/email/getEmail',{
		emailpath: emailpath
	});
	// return request({
	// 	url: '/email/getEmail',
	// 	method: 'get',
	// 	data: {
	// 		emailpath: emailpath
	// 	}
	// });
}