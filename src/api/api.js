import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '0823716f-d27f-4dcf-b11c-9a8841cc073b'
    }
})

//синтаксис метода
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getUserProfile(userId) {
        return profileAPI.getUserProfile(userId)
    },
    getMainUser () {
        return instance.get(`auth/me`).then(response => response.data)
    },
    deleteSubscription(id) { 
        return instance.delete(`follow/${id}`)
    },
    addSubscription(id) {
        return instance.post(`follow/${id}`)

    },
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId).then(response => response.data)
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status : status})
    },
    downloadProfilePhoto(file) {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put(`profile/photo`, formData, {
            headers : {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    updateProfileData(profileData) {
        return instance.put('profile', profileData)
    }
}

//где нет необходимости не передаём data дальше в цепочку промисов