import { useEffect, useState } from "react";
import "./styles.css";
import Tree from "./Tree";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./redux/Reducer";
import { data } from "./dummyData";

export default function App() {
  const [name, setName] = useState("");
  const [treeData, setTreeData] = useState([]);
  const items = useSelector((state) => state.items.data);
  const dispatch = useDispatch();

  const [allItems,setAllItems] = useState([])

   const listItems = [];

   const onOptionChangeHandler = () =>[
    console.log("dbhjh")
   ]

  const getAllItems = (dataItems) => {
   

    if (dataItems?.length) {
      for (let i = 0; i < dataItems.length; i++) {
        listItems.push(dataItems[i].name);
        getAllItems(dataItems[i].children);
      }
    }
    setAllItems(listItems)
    
  };

  useEffect(() => {
    setTreeData(items);
   getAllItems(items);
  
  }, [items]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
  };

   

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        Name{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
          placeholder="Item Name"
        />

        
        <select onChange={onOptionChangeHandler}>
 
 <option>Please choose one option</option>

 {allItems.map((option, index) => 
     <option value={option} key={index} >
         {option}
     </option>
 )
 }

</select>
        <br></br>
        <button onClick={() => dispatch(add(name))}>Submit</button>
      </form>
      <Tree data={treeData} />
    </div>
  );
}
