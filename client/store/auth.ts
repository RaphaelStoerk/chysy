import { defineStore } from "pinia"

export const useAuthStore = defineStore('auth', () => {

    const userData = ref(null)
    const isAuthenticated = ref(false)

    function setAuthenticated(value: boolean){ 
        isAuthenticated.value = value
    }

    return {
        userData,
        isAuthenticated,
        setAuthenticated
    }
})