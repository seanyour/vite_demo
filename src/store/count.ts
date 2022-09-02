import {defineStore} from "pinia";

const useCountStore = defineStore('count',{
    state:() => {
        return {
            count: 0
        }
    },
    getters: {},
    actions: {}
})

export default useCountStore