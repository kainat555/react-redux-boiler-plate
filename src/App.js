import React , {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import reducer from './store/reducer';
import { set_data } from './store/action/index'


// function App() {
//   console.log('redux_data => ', props)
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Learn React</h1>
//       </header>
//     </div>
//   );
// }


class App extends Component {
  render() {
    console.log('redux_data => ', this.props)   //data found
    return (
      <div>
         <h1>Learn React</h1>
         <button onClick={() => this.props.set_data('bhai data yahn se mil raha he')}>Set Data</button>
      </div>
    )
  }
}


// here I'll find global state here in (state params)
// properties found in components props
// use for  properties
// single reducer example
// const mapStateToProps = (state) => ({
//     name: state.name,
//     email: state.email,
//     students: state.students
// })


// multiple reducer example
const mapStateToProps = (state) => ({
  username: state.auth.username,
  email: state.auth.email,
  app_name : state.app.app_name
})


// use for function (function found in components props)
// use to update state properties
const mapDispatchToProp = (dispatch) => ({
set_data: (data) => 
// console.log('hello')      OR
dispatch(set_data(data))  // import function from action index
})

//here we use redux in our app so we keep our App in parenthesis
export default connect(mapStateToProps,mapDispatchToProp) (App);
