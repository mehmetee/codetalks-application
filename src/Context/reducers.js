export default function reducers(state,action){
    switch (action.type) {
        case "FAVORI_ADD":
            const {favori}=action.pyload
            return{...state,FavoriJob:[...state.FavoriJob,favori]};
        
        case "REMOVE_FAVORİ":
            const {id}=action.payload
            return{...state,FavoriJob:state.FavoriJob.filter(remove=>remove.id !==id)}
        
        case "SELECT_PAGES":
           
            return{...state,PAGES : state.PAGES+1}
        
        default:
            return state;
    }
}