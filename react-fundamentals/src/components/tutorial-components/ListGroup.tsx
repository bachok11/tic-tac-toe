import { useState } from "react";

//? Props Interface ==> {items: []. heading: string}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //? Conditional Rendering - Approach 1
  //   items = [];
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List Group</h1>
  //         <p>There are no items in the list.</p>
  //       </>
  //     );

  //? Conditional Rendering - Approach 2
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>There are no items in the list</p> : null;
  //   };

  //? Event Handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  //? Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>There are no items in the list</p> : null} */}
      {items.length === 0 && <p>There are no items in the list</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={(event) =>
            //   console.log(`${item} Clicked! ${index} ${event}`)
            //   console.log(event)
            // }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
