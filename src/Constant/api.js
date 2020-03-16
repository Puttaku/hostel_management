const API = "https://4c363ac4-f68e-4cb3-ab4f-4f9626d86a61.mock.pstmn.io";
const getUser = API + "/getUser"
const regisUser = API + "/regisUser"
const getHotel = API + "/getHotel"
const bookHotel = API + "/bookHotel"
const getList = API + "/getList"
export default {
    USER : {
        GETUSER : getUser,
        REGISUSER : regisUser
    },
    HOTEL : {
        GETHOTEL : getHotel,
        BOOKHOTEL : bookHotel
    },
    LIST : getList
}