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
        return instance.post(`follow/${userId}`);
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object instead ')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {

    getProfile(userId) {
        if(userId == null) userId = 8018;
        return instance.get(`profile/` + userId);
    },

    getStatus(userId) {
        if(userId == null) userId = 8018;
        return instance.get(`profile/status/` + userId);
    },

    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status });
    },

    savePhoto(photoFile) {
        const formDatea = new FormData();
        formDatea.append("image", photoFile)
        return instance.put(`profile/photo/`, formDatea, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile){
        return instance.put(`profile/`, profile);
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`);
    },
    login ( email, password, rememberMe = false, captcha = null ) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha });
    },
    logout () {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}