import { useState } from "react";

interface BudgetEntry{
   startDate:string;
   endDate:string;
   targetBudget:number;
   actualSpent:number;
}
const BudgetManagement=()=>{
    const[startDate,setStartDate]=useState("");
    const[endDate,setEndDate]=useState("");
    const[targetBudget,setTargetBudget]=useState<number>(0);
    const[actualSpent,setactualSpent]=useState<number>(0);
    const[entries,setEntries]=useState<BudgetEntry[]>([]);
    const handleAddEntry=()=>{
        if(!startDate||!endDate||targetBudget<=0||actualSpent<0){
            alert("Please enter valid dates and budget");
            return;
        }
        const sDate=new Date(startDate);
        const eDate=new Date(endDate);
        if(sDate>=eDate){
            alert("End Date must be after start Date");
            return;
        }
        
    }
    return(
        <div>Budget Management</div>
    )

}
export default BudgetManagement;

