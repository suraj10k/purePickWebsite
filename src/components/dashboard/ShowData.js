import React,{useState,useEffect} from 'react'
import fire from "firebase"
import Data from './Data';
const ShowData = () => {
const [showData,setShowData] = useState();

  useEffect( () => {
    const dataRef = fire.database().ref("customer");
    dataRef.on('value',(snapshot) => {
    const customers = snapshot.val();
    const showData = [];
    for (let id in customers){
      showData.push(customers[id]);
    }
    setShowData(showData);
    });
  },[]);
  
return (
        <div>
          {showData ? showData.map((customers,index) => (
              <Data customers={customers} key={index} />
          )) : " "}   
        </div>
    )
}

export default ShowData;
