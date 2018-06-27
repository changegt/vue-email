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
				getEmailLists().then(response => {
					const data = response.data;
					if(data.errorCode === 0){
						commit('SET_LISTS', data.result);
						resolve(data.result);
					}else{
						alert('error');
					}
				}).catch(error => {
		          reject(error)
		        });
			});
		}
	}
}

export default email;