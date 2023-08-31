import React from "react";

const Tree = (props) => {

    const {data} = props
   
  return (
    <>
      <ul>
        {data && data.length ?
         data.map((item, index) => (
            <li key={index}>
                {item.name}
              {item && item.children && item.children.length ? (
                <Tree data={item.children} />
              ) : null}
            </li>
          )) : <h1>Dat anot found</h1>}
      </ul>
    </>
  );
};
export default Tree;
