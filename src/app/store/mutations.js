export const REQUEST_TASK_CREATION = `REQUEST_TASK_CREATION`;
export const CREATE_TASK = `CREATE_TASK `;
export const SET_TASK_COMPLETE = `SET_TASK_COMPLETE`;
export const SET_TASK_GROUP = `SET_TASK_GROUP`;
export const SET_TASK_NAME = `SET_TASK_NAME`;
export const REQUEST_EXPENS_CREATION = `REQUEST_EXPENS_CREATION`;
export const CREATE_EXPENS = `CREATE_EXPENS`;
export const SET_EXPENS_NAME = `SET_EXPENS_NAME`;
export const SET_EXPENS_AMOUNT = `SET_EXPENS_AMOUNT`;


export const SET_BUDGET = `SET_BUDGET`;

export const REQUEST_AUTHENTICATE_USER = `REQUEST_AUTHENTICATE_USER`;
export const AUTHENTICATING = `AUTHENTICATING`;
export const AUTHENTICATED = `AUTHENTICATED`;
export const NOT_AUTHENTICATED = `NOT_AUTHENTICATED`;
export const PROCESSING_AUTHENTICATE_USER= `PROCESSING_AUTHENTICATE_USER`;
export const SET_STATE = `SET_STATE`;

export const DELETE_TASK = `DELETE_TASK`;
export const DELETE_EXPENS = `DELETE_EXPENS`;



export const requestTaskCreation = (groupID) => ({
  type: REQUEST_TASK_CREATION,
  groupID
});

export const createTask = (taskID, groupID, ownerID) => ({
  type: CREATE_TASK,
  taskID,
  groupID,
  ownerID
});
export const setTaskCompletion = (id, isComplete) => ({
    type: SET_TASK_COMPLETE,
    taskID: id,
    isComplete,
  });
  
  export const setTaskName = (id, name) => ({
    type: SET_TASK_NAME,
    taskID: id,
    name,
  });
  
  export const setTaskGroup = (id, groupID) => ({
    type: SET_TASK_GROUP,
    taskID: id,
    groupID,
  });

  export const requestExpensCreation = (budID)=>({
     type:REQUEST_EXPENS_CREATION,
     budID
     
  });
  export const createExpens = (expensID, budID, ownerID )=>({
    type: CREATE_EXPENS,
    expensID,
    budID,
    ownerID
  });

  export const setExpensName = (id, name)=>({
    type: SET_EXPENS_NAME,
    expensID: id,
    name,
  });
  export const setExpensAmount = (id, amount)=>({
    type: SET_EXPENS_AMOUNT,
    expensID: id,
    amount,
  });

  export const setBudget = (id, amountB ) => ({
    type: SET_BUDGET,
    budgetID: id,
    amountB,
  });
  
  export const requestAuthenticateUser = (username,password)=>({
    type: REQUEST_AUTHENTICATE_USER,
    username,
    password
  });

  export const processAuthenticateUser = (status = AUTHENTICATING, session = null)=>({
    type: PROCESSING_AUTHENTICATE_USER,
    session,
    authenticated: status
  });

  export const setState = (state = {}) => ({
    type: SET_STATE,
    state
  });

  export const substractBudget = (id, amIni, amSub) => ({
    type: SUBSTRACT_BUDGET,
    id,
    amIni,
    amSub

  });

  export const deleteTask = (id) => ({
    type:DELETE_TASK,
    id
  });
  
  export const deleteExpens = (id) => ({
    type:DELETE_EXPENS,
    id
  });