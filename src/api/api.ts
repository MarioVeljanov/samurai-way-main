import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': "fccc0afd-70b9-4563-872a-f515b4509003"
    }
    
});

export const userAPI = { 
    getUsers (pageNumber: number, pageSize: number)  {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(res => res.data)
    },
    followUsers (id: number) {
        return instance.post(`follow/${id}`).then(res => res.data)
    },
    unfollowUsers (id: number) {
        return instance.delete(`follow/${id}`).then(res => res.data)
    },
    authUsers () {
        return instance.get(`auth/me`).then(res => res.data)
    },
    getProfile (userId: string) {
        return instance.get(`profile/${userId}`)
    }
}

