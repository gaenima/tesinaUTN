import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
 //import * as sagas from "./sagas.mock";
import * as sagas from "./sagas";
import * as mutations from "./mutations";
//import currentItem from './reducers/currentItem';
//import results from './reducers/results';
//import suggestions from './reducers/suggestions';

// //import { taskCreationSaga } from './sagas.mock';

export const store = createStore(
  
    combineReducers({

      session(userSession = defaultState.session || {}, action){
        let {type,authenticated,session} = action;
        switch (type){
          case mutations.SET_STATE:
            return {...userSession, id:action.state.session.id}
          case mutations.REQUEST_AUTHENTICATE_USER:
            return {...userSession, authenticated:mutations.AUTHENTICATING};
          case mutations.PROCESSING_AUTHENTICATE_USER:
            return {...userSession, authenticated};

          default:    
          return userSession;
        }
          
      },
      // currentItem,
      // results,
      // suggestions,

        tasks(tasks=[], action){
            switch(action.type){
              case mutations.SET_STATE:
                return action.state.tasks;
                case mutations.CREATE_TASK:
                   // console.log(action);
                   return [
                    ...tasks,
                    {
                      id: action.taskID,
                      name: "Nueva actividad",
                      group: action.groupID,
                      owner: action.ownerID,
                      isComplete: false,
                    }
                  ]
                  case mutations.SET_TASK_COMPLETE:
                    return tasks.map(task => {
                      return task.id === action.taskID
                        ? { ...task, isComplete: action.isComplete }
                        : task;
                    });
                    case mutations.SET_TASK_NAME:
                        return tasks.map((task) => {
                          return task.id === action.taskID
                            ? { ...task, name: action.name }
                            : task;
                    });

                    case mutations.SET_TASK_GROUP:
                        return tasks.map((task) => {
                          return task.id === action.taskID
                            ? { ...task, group: action.groupID }
                            : task;
                    });
                   case mutations.DELETE_TASK:
                   return tasks.filter((task)=> task.id !== action.id)
                                                                                                           
            }
            return tasks;
        },
        expenses(expenses = [], action) {
          switch(action.type){
            case mutations.SET_STATE:
              return action.state.expenses;
            case mutations.CREATE_EXPENS:
              //console.log(action);
              return [...expenses, {
                id:action.expensID,
                name: "Nuevo gasto",
                bud: action.budID,
                owner: action.ownerID,
                amount: 0

              }]
              case mutations.SET_EXPENS_NAME:                   
                return expenses.map(expens=>{
                  return (expens.id === action.expensID)
                  ?  {...expens, name: action.name} 
                  : expens;
                });

              case mutations.SET_EXPENS_AMOUNT:    
                 return expenses.map(expens=>{
                     return (expens.id === action.expensID) 
                     ? {...expens, amount: action.amount} 
                    : expens;
                   })

              case mutations.DELETE_EXPENS:
                return expenses.filter((exp)=> exp.id !== action.id)
                  
          }          
          return expenses;
        },

        comments(comments = []) {
                  return comments;
                },
        groups(groups = [], action) {
          switch (action.type){
            case mutations.SET_STATE:
              return action.state.groups;
          }
          
                  return groups;
                },
        users(users = []) {
                  return users;
                },
        budgets(budgets = [], action) {
          switch(action.type){
            case mutations.SET_STATE:
              return action.state.budgets;

            case mutations.SET_BUDGET:
             return budgets.map((budget)=>{
              return budget.id === action.budgetID
               ? { ...budget, amountInitial: action.amountB} 
               : budget;              
             })
          }
                  return budgets;
       }
        
    }),
          
             
    applyMiddleware(createLogger(), sagaMiddleware)
    );



for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
};
