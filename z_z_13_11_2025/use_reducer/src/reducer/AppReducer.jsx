const AppReducer = (state, action) => {
    switch(action.type){
        case "add_user": return {
                            ...state,
                            users : [...state.users, action.payload]
        }
        case 'update_counter' : return {
                            ...state,
                            counter : state.counter + 1
        }
    }
}

export default AppReducer