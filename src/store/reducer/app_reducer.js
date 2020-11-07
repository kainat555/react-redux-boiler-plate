//store created here
// or you can create multiple stores like auth_reducer , app_reducer


const INITIAL_STATE = {
    app_name :'practice_app',
}


export default (state = INITIAL_STATE,  action) => {
    console.log('app_action => ', action)
    // update state 
    switch (action.type) {
        case 'SET_DATA':
            
           return({
               ...state,
               app_name: action.data        // data sends in action will be saved in app_name
           })
    }
    return state;
};