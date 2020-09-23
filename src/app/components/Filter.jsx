import React from "react";
import { connect } from "react-redux";
import { requestTaskCreation } from "../store/mutations";
import { Link } from "react-router-dom";
import Results from '../components/results';



 export const Filter = () => (
     <div>

       
        <Results />
        
           
        </div>
 )

//  const mapStateToProps = (state, ownProps) => {
 
  
//   return {
  
   
//   }
  
 
// };


//  const mapDispatchToProps = (dispatch, ownProps) => {
 
  
//  }

 export const ConnectedFilter = connect()(Filter);