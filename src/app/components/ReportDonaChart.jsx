import React from "react";
import { connect } from "react-redux";
import { Doughnut } from 'react-chartjs-2';



function DonaChart({tasks, task, a, b, c, ownProps, groups, arreglo} ){
    const data = {
       labels: ['Por hacer %', 'En proceso %', 'Finalizado %'],
       datasets: [
         
         {
           label: 'Porcentaje de actividades por grupo',
           data: tasks,
          
           backgroundColor: ['rgba(200,50,6,1)',       
                          'rgba(255, 159, 64, 0.6)',
                          'rgba(255, 99, 132, 0.6)'],
  
         }
      
       ]
    }
    const options = {
      title: {
        display: true,
        text: 'Reporte 2: Porcentaje de actividades por grupo',
        fontSize: 20,
        fontColor: 'rgba(200,80,50,1)',
        fontFamily: "Ubuntu"
      }
      
    }
    return (
      <Doughnut data={data} options={options}/>
    )
  }
  
const countGroups = (tasks) => {
  const bars = [];
  let a = 0;
  let b = 0;
  let c = 0;
  let A = 0;
  let B = 0; 
  let C = 0;
  
  for(let i = 0; i < tasks.length; i++) {
    if (tasks[i].group === "G1") {
      a++;
    } else if (tasks[i].group === "G2") {
      b++;
    } else {
      c++;
    }
  }
    A= Math.round( a*100/tasks.length);
    B= Math.round(b*100/tasks.length);
    C= Math.round(c*100/tasks.length);
  bars.push(A,B,C);
  
  console.log("DONAAAA Euge",bars);
  console.log("PORCENTAJES DONA", A,B,C);
  
  return bars;
}
  
  //export default DonaChart
  const mapStateToProps = (state, ownProps, data) => {

    let groupID = ownProps.id; 
    
    return {     
      id: groupID,
   
     tasks:countGroups(state.tasks)
    }    
  }
  export const ConnectRepoDona = connect(mapStateToProps)(DonaChart);
