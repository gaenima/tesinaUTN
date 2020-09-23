import React from "react";
import { connect } from "react-redux";
import {  Bar } from 'react-chartjs-2';
import {BudgetDetail, ConnectedBudgetDetail}  from './BudgetDetail'


export function ReportBarraChart ({expenses, budgets, disp, amountInitial}){
 
    
    const data = {
        labels: ['Monto disponible', 'Gatos totales'],
        datasets: [
         
          {
            label: 'monto ',
            display: false,
            data: [900, -500],
            
           
            backgroundColor: ['rgba(10,200,70,0.6)',       
                           
                           'rgba(150,19,100, 0.6)'],
   
          }          
        ]
     }
     //console.log("disponible",disp);
     const options = {
       title: {
         display: true,
         text: 'Reporte 3: Presupuesto',
         fontSize: 20,
         fontColor: 'rgba(200,80,50,1)',
         fontFamily: "Ubuntu"
       },
       scales:{
        yAxes:[
          {
            ticks:{
              // min: 0 ,
              // max: 1000,
              // stepSize: 100
            }
          }
        ]
      },
   
       legend: {display:false}
     }
     function updateScale(chart) {
       chart.options.scales.yAxes[arreglo] = {
           type: 'logarithmic'
       };
       chart.update();
   
  
   }
     return (
       <Bar data={data} options={options} />
     )
}

// const getMonto = (budgets, expenses) => {
//   const montos = [];
//   let initial = budgets.amountInitial;
//   let totalG = ConnectedBudgetDetail.total;
  
// //   { total = expenses.reduce(function(accumulator, expens){
// //     return accumulator += parseFloat(expens.amount) 
// // },0)};


//    let disponiM = 0;

  
//     disponiM = initial - totalG,
   

//     montos. push (disponiM, totalG);
//   console.log("MONTOSSSSS",montos, initial, totalG, disponiM);
//     return  montos;  
//}
const montosDG = (budgets) => {
  const bars = [];
  
  {budgets.map(bud=> <div> key={bud.id}  {bud.amountInitial}</div>)}
  let g = 0;
  let d = 0;
 
  console.log("d......",d);
  bars.push(d,g);
  return bars;
}


const mapStateToProps = (state, ownProps) => {
  let amountInitial=ownProps.amountInitial
  let budgetID = ownProps.id;
 return {
  name: ownProps.name,
  id:budgetID, 
  expenses: state.expenses
  .filter(expens=>expens.bud === budgetID),
  
  budgets:montosDG(state.budgets),
  amountInitial,
   
   budgets:state.budgets,
  // montos:getMonto(state.expenses)
 }
  
}
 
export const ConnectRepoBarra = connect(mapStateToProps)(ReportBarraChart);
