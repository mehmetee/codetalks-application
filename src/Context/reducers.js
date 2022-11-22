import AsyncStorage from "@react-native-async-storage/async-storage";

export default function reducers(state,action,){
switch (action.type) {
    case "SET_USER":
        const {user}=action.pyload
        AsyncStorage.setItem('@USER',JSON.stringify(user))
        return {...state ,user}
        case "LOGOUT_USER":
            AsyncStorage.removeItem("@USER")
            return{...state,user:null}

    default:
        return{...state};
}
}