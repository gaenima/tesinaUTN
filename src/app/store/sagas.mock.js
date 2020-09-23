import { take, put, select } from "redux-saga/effects";
 import { v4 as uuidv4 } from "uuid";
// import uuid from 'uuid';
import * as mutations from "./mutations";

export function* taskCreationSaga() {
  while (true) {
    const { groupID } = yield take(mutations.REQUEST_TASK_CREATION);
    const ownerID = `U1`;
    const taskID = uuidv4();
    yield put(mutations.createTask(taskID, groupID, ownerID));

    console.log("ESTE CONSOLE!!!! ", groupID);
  }
}

export function* expensCreationSaga() {
  while(true){
    const {budID} = yield take(mutations.REQUEST_EXPENS_CREATION);
   
    const ownerID = `U1`;
    const expensID = uuidv4();
    yield put(mutations.createExpens (expensID,budID,ownerID));
    console.log("Got bud id", budID);
  }
}