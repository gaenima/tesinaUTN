import { addNewTask, updateTask, addNewExpens, updateExpens, updateBudget} from "./server";

(async function myFunc() {
  await addNewTask({
    name: "mi actividad",
    id: "123456",
  });

  await updateTask({
    id: "123456",
    name: "Mi activity - MODIFICADA!!!",
  });

  await addNewExpens({
    name: "mi gasto",
    id: "1234",
  });

  await updateExpens({
    id: "1234",
    name: "Mi GASTOtity - MODIFICADO!!!",
  });

  await updateBudget({
    id: "B1",
    amountInitial: 2530,
  })
})();