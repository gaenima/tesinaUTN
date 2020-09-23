import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./connect-db";
import './initialize-db';
import { authenticationRoute } from './authenticate';
import path from 'path';
import { connect } from "react-redux";

let port = process.env.PORT || 7789;
let app = express();

app.listen(port, console.log("Servidor escuchando puerto ", port));

//  app.get("/", (req, res) => {
//  res.send(" Hola Mundo!!!");
//  });
app.use(cors(), 
bodyParser.urlencoded({ extended: true }), 
bodyParser.json());

authenticationRoute(app);

if (process.env.NODE_ENV == `production`) {
  app.use(express.static(path.resolve(__dirname, `../../dist`)));
  app.get('/*',(req,res)=>{
    res.sendFile(path.resolve('index.html'));
  });
}

// TAXES

export const addNewTask = async (task) => {
 let db = await connectDB();
 let collection = db.collection(`tasks`);
 await collection.insertOne(task);
 };

export const updateTask = async (task) => {
  let { id, group, isComplete, name } = task;
  let db = await connectDB();
  let collection = db.collection(`tasks`);

if (group) {
    await collection.updateOne({ id }, { $set: { group } });
  }
  if (name) {
    await collection.updateOne({ id }, { $set: { name } });
  }
  if (isComplete !== undefined) {
    await collection.updateOne({ id }, { $set: { isComplete } });
  }
};

app.post("/task/new", async (req, res) => {
  let task = req.body.task;
  await addNewTask(task);
  res.status(200).send();
});

app.post("/task/update", async (req, res) => {
  let task = req.body.task;
  await updateTask(task);
  res.status(200).send();
});

//BUDGET
app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

export const addNewExpens = async (expens) => {
  let db = await connectDB();
  let collection = db.collection(`expenses`);
  await collection.insertOne(expens);
  };
  export const updateExpens = async (expens) => {
    let { id, amount, name } = expens;
    let db = await connectDB();
    let collection = db.collection(`expenses`);

    if (amount) {
      await collection.updateOne({ id }, { $set: { amount } });
    }
    if (name) {
      await collection.updateOne({ id }, { $set: { name } });
    }
  };

app.post("/expens/new", async (req, res) => {
  let expens = req.body.expens;
  await addNewExpens(expens);
  res.status(200).send();
});
app.post("/expens/update", async (req, res) => {
  let expens = req.body.expens;
  await updateExpens(expens);
  res.status(200).send();
}); 

export const updateBudget = async (budget) => {
  let { id, amountInitial } = budget;
  let db = await connectDB();
  let collection = db.collection(`budgets`);

  if (amountInitial) {
    await collection.updateOne( { id }, { $set: { amountInitial } } );

  }
};

app.post("/budget/update", async (req, res) => {
  let budget = req.body.budget;
  await updateBudget(budget);
  res.status(200).send();
}); 