export default function reducers(state,action){
switch (action.type) {
    case "SET_USER":
        return {...state ,user:action.pyload.user}
        break;

    default:
        return{...state};
}
}