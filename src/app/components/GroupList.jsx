import React, {Component} from "react";;
import {Line} from 'react-chartjs-2' ;

 export default class GroupList extends Component {
   //<div> <h3>fuck this shet world!!!!!!!!!!</h3>   </div>
// constructor(props){
//   super(props);

//   this.state = {
//     data: {
//       labels: ["To Do", "Doning", "Done"],
//       datasets: [
//         {
//           label: "Tasks",
//           backgroundColor: "rgba(255,0,255,0.75)",
//           data: [5,4,6]
//         },
//         {
//           label: "Budgets",
//           backgroundColor: "rgba(50,0,200,0.75)",
//           data: [2,7,4]
//         }
//       ]
    // }
  }
// }
// setGradientColor = (canvas, color) => {
//   const ctx = canvas.getContext('2d');
//   console.log("shely", ctx);
//   const gradient = ctx.createLineGradient(0,0,0,400);
//   gradient.addColorStop(0, color);
//   gradient.addColorStop(0.95, "rgba(133,255,144,0.85)");
//   return gradient;
// }
// getChartData = (canvas) => {
//   const data = this.state.data;
//     if (data.datasets) {
//       let colors = ["rgba(205,10,105,0.75)", "rgba(100,50,85,0.75)"];
//       data.datasets.forEach((set, i) => {
//         set.backgroundColor = this.setGradientColor(canvas, colors[i]);
//         set.borderColor = "white";
//         set.borderWidth = 2;
//       });

//     }
//   return data;
// }
//   render(){
//     return (
//       <div style={{position: "relative", width: 600, height: 550}} >
//           <h3> Chart Samples</h3>
//           <Line
//              options={{
//                responsive: true
//              }}
//             data={this.this.state.data}
//           />

//       </div>
//     )
    
//   }
// }


  
// export const GroupList = () => (
 
//     <div>
      
       
//         <h1> FUCK THIS </h1>

        
//     </div>
  
// )

// const mapStateToProps = (state, ownProps) => {
//   let groupID = ownProps.id; 
//   let a = 0;
//   let b = 0;
//   let c = 0;
//   let arreglo = [];
  
//   return {
   
//     id: groupID,
//     tasks: state.tasks.filter((task) => {
//       task.group === groupID
//               if(task.group == "G1"){
//                 a++;
//               }
             
            
//               if (task.group == "G2"){
//                 b++;
//               }
             
//               if (task.group == "G3"){
//                 c++;
//               }     
//     console.log("lalalalal", a, b, c);
    
   
//     }

//    )
   
//   }
//   // arreglo.push(a,b,c),
//   console.log("cacacaca",arreglo)
// };

// export const ConnectGroupList = connect()(GroupList);

// // let A = a,
// // let B = b,
// // let C = c,
// // grupos.push(A),
// //   console.log("puto puto puto", grupos)
