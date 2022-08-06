import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api-nodejs-todolist.herokuapp.com/',
    timeout:1000
})

export const login = async (data) => {
    try{
       return await apiClient.post('/user/login', data)
    }catch(exception){
       return {
        error: true,
        exception
       }
    }
} 

export const register = async (data) => {
    try{
        return await apiClient.post("/user/register")
    }catch(exception){
        return{
            error:true,
            exception
      };
    }
}