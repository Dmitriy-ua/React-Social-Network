import * as axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2e4d1a37-98f2-4af6-8745-ad2694696f6e',
    }
});

export const usersAPI = {
    getUsers (currentPage=1, pageSize=10) {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        }).then( response => { return response.data; })
    },

    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
    },

    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
    }
}