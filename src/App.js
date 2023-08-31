import { useEffect, useState } from "react";
import { data } from "./dummyData";
import "./styles.css";
import Tree from "./Tree";
import { useSelector, useDispatch } from 'react-redux'
import { add } from './redux/Reducer'


export default function App() {
  
  const [name, setName] = useState("");
  const [treeData, setTreeData] = useState([]);
  const items = useSelector((state) => state.items.data)
  const dispatch = useDispatch()

  useEffect(() => {
    setTreeData(items);
    console.log(items,'itemss')
  }, [items]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("")
  };

//  const  onOptionChangeHandler = ()=>{
//  console.log("ndjkjn")
//   }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        Name{" "}
        <input
          type="text"
          value={name}
          onChange={(e) =>{ 
            
            console.log(e.target.value)
            setName(e.target.value)}}
          placeholder="Item Name"
        />

        
        {/* <select onChange={onOptionChangeHandler}>
 
 <option>Please choose one option</option>

 {items.map((option, index) => 
     <option key={index} >
         {option}
     </option>
 )
 }

</select> */}


        <br></br>
        <button  onClick={() => dispatch(add(name))} >Submit</button>
      </form>
      <Tree data={treeData} />
    </div>
  );
}
