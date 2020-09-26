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
            data: budgets,
            
           
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
const montosDG = (budgets, total) => {
  const bars = [];

 

  let d = document.getElementById("disponible");
  let dis =  d.childNodes[1];
  let dispo = (dis);

  let g = document.getElementById("gastos");
  let gas = g.childNodes[1];

  console.log("disponible......",d);
  console.log("dis...",dis, typeof(dis));
  console.log("dispo...",dispo);

  console.log("gastos......",g);
  console.log("gas...", gas);
  bars.push(dis.data, gas.data);

  
  console.log("bars.....",bars);
 
  return bars;
  
}


const mapStateToProps = (state, ownProps) => {
  
 return {
   
  budgets:montosDG(state.budgets)
 }
  
}
 
export const ConnectRepoBarra = connect(mapStateToProps)(ReportBarraChart);
