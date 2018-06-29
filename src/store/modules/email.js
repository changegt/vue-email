import { getEmailLists, getEmail } from '@/api/email'
import { getToken, setToken, removeToken } from '@/utils/auth'

const email = {
	state: {
		lists: [],
		token: getToken()
	},
	mutations: {
		SET_LISTS (state, lists) {
			state.lists = lists;
		}
	},
	actions: {
		getEmailLists ({commit}) {
			return new Promise((resolve, reject) => {
				getEmailLists().then(data => {
					if(data.errorCode === 200){
						commit('SET_LISTS', data.result);
						resolve(data.result);
					}else{
						alert('error');
					}
				}).catch(error => {
		          reject(error)
		        });
			});
		},

		getEmail ({commit}, {emailpath}) {
			return new Promise((resolve, reject) => {
				getEmail(emailpath).then(data => {
					if(data.errorCode === 200){
						resolve(data.result);
					}else{
						alert('error');
					}
				}).catch(error => {
					reject(error);
				})
			})
		}
	}
}

export default email;