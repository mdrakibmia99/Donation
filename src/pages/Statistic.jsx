

import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";




const Statistic = () =>  {
  const [localvalue,setLocalValue]=useState([])
  const [laod,setLoad]=useState(true)

useEffect(()=>{
  const storedItems = JSON.parse(localStorage.getItem("donate")) || [];
  setLocalValue(storedItems)
  setLoad(false)

},[])

const uniqueValues = [...new Set(localvalue)];
console.log(uniqueValues,"uniq")
const data = [
  ["Task", "Hours per Day"],
  ["Your Donation", (uniqueValues.length/12)*100],
  ["Total Donation", ((12-uniqueValues.length)/12)*100],


];


if(laod){
  return <h1 className="text-5xl text-center"> Loading..</h1>
}

  return (
    <div className="h-screen">

    <Chart
      chartType="PieChart"
      data={data}
      // options={options}
      width={"100%"}
      height={"400px"}
      />
      </div>
  );
}
export default Statistic;