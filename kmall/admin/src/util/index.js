import axios from 'axios'


export const request = (options)=>{
	return new Promise((resolve,reject)=>{
		const params = {
        	method:options.method || 'get',	
			url:options.url || '',
			data:options.data || ''
		}
		axios(params)
		.then(result=>{
			resolve(result.data);
		})
		.catch(err=>{
			reject(err)
		})
	})
}
export const setUserName = (username)=>{
	window.localStorage.setItem('username',username)
}
export const getUserName = ()=>{
	return window.localStorage.getItem('username')
}
export const removeUserName = ()=>{
	window.localStorage.removeItem('username')
}

