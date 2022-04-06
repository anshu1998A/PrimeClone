const initialState = false;
const statusReducer = (state = initialState, action) => {
    switch(action.type){
        case  'LogIn' : return state= true;
        case 'LogOut' : return state = false;
        default : return state;
    }
}

export default statusReducer;