////FOR LATER
const axios = require("axios");

const initalState = {
    tasks: [],Products : {}
    }
const appReducer = (state = initalState, action) =>{
  switch(action.type) {
    case 'GET_DATA':
      // console.log('added ')
      return{
        ...state,
        tasks:state.tasks.concat(action.task),
      }
    case 'ADD_TASK':
            axios
      .get(
        "https://us-central1-elite-conquest-228205.cloudfunctions.net/app/api/read"
      )
      .then(function (response) {
        // handle success
        // console.log(response);
        var data = response.data;
        // setProducts(data);  
        console.log("got data");
        
      return{
        ...state,
        Products: data
      }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      break
      default:
         return state
  }
};
export default appReducer;
// const taskReducer = (action, store = defaultStore) => {
//     switch(action.type){
//     case 'GET_DATA': 
//     (axios
//       .get(
//         "https://us-central1-elite-conquest-228205.cloudfunctions.net/app/api/read"
//       )
//       .then(function (response) {
//         // handle success
//         // console.log(response);
//         const data = response.data;
//         // setProducts(data);
//         products = data;
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       }))
//     default:
//     return [...state, 
//         tasks: tasks.concat(action.task)]
//     }