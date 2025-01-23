import { atom, selector } from "recoil";
import axios from "axios";

// export const notifications = atom({
//     key : "notification",
//     default : {
//         networks : 0,
//         jobs : 0,
//         messaging : 0,
//         notification : 0
//     }
// })

export const notifications = atom({
    key : "notification",
    default : selector({
        key : "notificationSelector",
        get : async () => {
            const res = await axios.get("http://localhost:3000/")
            return res.data
        }
    })
})

export const totalNotificationSelector = selector({
    key : "totalNotificationSelector",
    get : ({get}) => {
        const allNotification = get(notifications)
        return allNotification.networks + 
        allNotification.jobs + 
        allNotification.notification + 
        allNotification.messaging
    }
})