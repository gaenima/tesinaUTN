import React from "react";
import { connect } from "react-redux";
import {  Bar } from 'react-chartjs-2';
import  { ConnectedReports} from './Reports';

export function ReportBarChart ({ tasks,  arreglo}){
 
    const data = {
       labels: ['Por hacer', 'En proceso', 'Finalizado'],
       datasets: [
        
         {
           label: 'actividades ',
           display: false,
           data: tasks,
          
           backgroundColor: ['rgba(200,50,06,1)',       
                          'rgba(255, 159, 64, 0.6)',
                          'rgba(255, 99, 132, 0.6)'],
  
         }
      
       ]
    }
    const options = {
      title: {
        display: true,
        text: 'Reporte 1: Cantidad de actividades por grupo',
        fontSize: 20,
        fontColor: 'rgba(200,80,50,1)',
        fontFamily: "Ubuntu"
      },
      scales:{
        yAxes:[
          {
            ticks:{
              min: 0 ,
              max: tasks.max,
              stepSize: 1
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

const countGroups = (tasks) => {
  const bars = [];
  let a = 0;
  let b = 0;
  let c = 0;
  
  for(let i = 0; i < tasks.length; i++) {
    if (tasks[i].group === "G1") {
      a++;
    } else if (tasks[i].group === "G2") {
      b++;
    } else {
      c++;
    }
  }
  
  bars.push(a,b,c);
  
  return bars;
}
   
  const mapStateToProps = (state, ownProps, data) => {

      let groupID = ownProps.id; 
      
      return {     
        id: groupID,
     
       tasks:countGroups(state.tasks)
      }    
    }
   
  export const ConnectRepoBar = connect(mapStateToProps)(ReportBarChart);
