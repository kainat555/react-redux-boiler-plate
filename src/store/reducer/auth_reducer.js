//store created here
// or you can create multiple stores like auth_reducer , app_reducer


const INITIAL_STATE = {
    username :'Nimra Sharif',
    email:'faryashah555@gmail.com',
}


export default (state = INITIAL_STATE , action) => {
    console.log('auth_action=> ', action)
    return state;
};