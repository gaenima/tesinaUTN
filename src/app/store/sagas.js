import { take, put, select } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import * as mutations from "./mutations";
import { history } from './history';

const url = process.env.NODE_ENV == `production`
? ``
: "http://localhost:7789";

export function* taskCreationSaga() {
 while (true) {
    const { groupID } = yield take(mutations.REQUEST_TASK_CREATION);
    const ownerID = `U1`;
    const taskID = uuidv4();
    yield put(mutations.createTask(taskID, groupID, ownerID));
    const { res } = yield axios.post(url + `/task/new`, {
      task: {
        id: taskID,
        group: groupID,
        owner: ownerID,
        isComplete: false,
        name: "Nueva actividad"
       }
    });
   
  }
}
export function* taskModificationSaga() {
  while (true) {
    const task = yield take([
      mutations.SET_TASK_GROUP,
      mutations.SET_TASK_NAME,
      mutations.SET_TASK_COMPLETE
    ]);
    axios.post(url + `/task/update`, {
      task: {
        id: task.taskID,
        group: task.groupID,
        name: task.name,
        isComplete: task.isComplete,
      },
   });
  }
 }

 export function* expensCreationSaga() {
   while(true){
     const {budID} = yield take(mutations.REQUEST_EXPENS_CREATION);
     const ownerID = `U1`;
     const expensID = uuidv4();
     yield put(mutations.createExpens(expensID, budID, ownerID));
     const { res } = yield axios.post(url + `/expens/new`,{
       expens:{
         id:expensID,
         bud: budID,
         owner: ownerID,
         amount: 0,
         name: "Nuevo gasto"       
       }
     });     
   }
 }

 
export function* expensModificationSaga() {
  while (true) {
    const expens = yield take([
      mutations.SET_EXPENS_AMOUNT,
      mutations.SET_EXPENS_NAME
      
    ]);
    axios.post(url + `/expens/update`, {
      expens: {
        id: expens.expensID,
        amount: expens.amount,
        name: expens.name,
        
      },
   });
  }
 }

 export function* budgetModificationSaga() {
  while(true){
    const budget = yield take([
      mutations.SET_BUDGET
    ]);
    axios.post(url + `/budget/update`, {
      budget: {
        id: budget.budgetID,
        amountInitial: budget.amountB,
      },
    });
  }
}

 export function* userAuthenticationSaga(){
   while(true){
     const {username, password} = yield take(mutations
      .REQUEST_AUTHENTICATE_USER);
      try {
        const {data} = yield axios.post(url + `/authenticate`, {username, password});
        if (!data) {
          throw new Error();
        }
        console.log("Autenticado!", data);

        yield put(mutations.setState(data.state));
        yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));

        history.push('/dashboard');

      } catch (e){
        console.log("No se pudo autenticar");
        yield put(mutations.processAuthenticateUser(mutations
          .NOT_AUTHENTICATED));
      }   
   }
 }


// export function* budgetCreationSaga() 
// {//   while(true){
//     const ownerID = `U1`;
//     const budgetID = uuidv4();
//     yield put(mutations.createBudget(budgetID, ownerID));
//     console.log("got budget", budgetID);
//   }
// }



//  export function* taskDeleteSaga(){
//    while (true) {
//     const task = yield delete(mutations.deleteTask());
//     axios.delete(url + `/task/id`, {
//       task: { id: task.taskID},
//     }) ;
//    }
//  }

