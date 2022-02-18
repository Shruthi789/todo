import { users } from "./Users";
import _ from 'lodash';

//Function to get the column headers
function columnHeaders(){
    return Object.keys(_.countBy(users,'name'));
}

//function to get the row headers
function rowHeaders(){
    return Object.keys(_.countBy(users,'job'));
}

//Function to get the target totals as per job
function jobTotals(value){
   const filterArray=users.filter((data)=>data.job===value);
   const totalTarget=filterArray.reduce((prv,curr)=>prv+curr.target,0);
   console.log(totalTarget);
   return totalTarget;
}

function nameTotals(value){
    const filterArray=users.filter((data)=>data.name===value);
    const totalTarget=filterArray.reduce((prv,curr)=>prv+curr.target,0);
    return totalTarget;
 }
 //Function to get the target totals as per job
function lastRowData(){
   const valuesArray=columnHeaders().map((value)=>nameTotals(value));
   return valuesArray;
}
export {columnHeaders,rowHeaders,jobTotals,lastRowData}