import request from '@/utils/request'

export function getEmailLists () {
	return request({
		url: '/email/getEmailLists',
		method: 'get'
	});
}

export function getEmail (email) {
	return request({
		url: '/email/getEmail',
		method: 'get',
		data: {email: email}
	});
}