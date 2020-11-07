//store created here
// or you can create multiple stores like auth_reducer , app_reducer


// .................single reducer example...................//
// const INITIAL_STATE = {
//     name :'Kainat Sharif',
//     email:'faryashah5@gmail.com',
//     students: ['halima','sultan']
// }


// export default (state = INITIAL_STATE) => {
//     return state;
// };


// .................multiple reducer example...................//
import { combineReducers } from 'redux';
import app_reducer from './app_reducer';
import auth_reducer from './auth_reducer';


export default combineReducers({
    auth: auth_reducer,
    app: app_reducer
})