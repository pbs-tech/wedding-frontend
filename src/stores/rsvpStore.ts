import {defineStore} from 'pinia'


interface rsvpStore {
    name: String,
    hasPlusOne: Boolean,
    plusOneName: String
    song: String
    rsvp: String
}

export const rsvpStore = defineStore('rsvp', {
    state: () => {
        return{
            name: null,
            rsvp: null
        }
    },
    actions:{
    }
})