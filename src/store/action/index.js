

const set_data = (data) => {
    return (dispatch) => {
        console.log('hello')
        dispatch({type : 'setdata', data : data})
    }
}


export {
    set_data
}