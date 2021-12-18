import {call, put} from 'redux-saga/effects';
import {getUsersSuccess} from '../action/Action';


const url ="https://jsonplaceholder.typicode.com/users";
function getdata(){
    return fetch(url,{
        method:"GET",
        headers:{
            "Content-Type":'application/json'
        }
    })
    .then(response => response.json())
    .catch((err)=>{console.log(err)})
}
function* getUsers() {
  try {  
    const result = yield call(getdata);
    yield put(getUsersSuccess(result));
  } catch (error) {
    console.error(error);
  }
}


export default getUsers;
