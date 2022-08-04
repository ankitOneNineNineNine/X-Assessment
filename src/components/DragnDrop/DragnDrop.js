import { useEffect, useRef, useState } from "react";
import "./DragnDrop.css";

/**
 *
 *
 * @export
 * @param {array} { todos }
 * @return JSX.Element
 */
export default function DragnDrop({ todos }) {
  const destinationRef = useRef(null);
  const [placedElement, setPlacedElement] = useState(null);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    setElements(todos);
  }, [todos]);
  const [dragEnter, setDragEnter] = useState(null);

  /**
   *
   * Function to perform transfer on drop
   * @param {Event} e
   * @param {number} id
   */
  const onDrop = (e, id) => {
    if (dragEnter !== null) {
      let element = elements;
      const index = elements.findIndex((el) => el.id === id);
      if (index > -1) {
        element[index].completed = dragEnter ? true : false;
        setElements([...element]);
        setPlacedElement(id);
      }
    }
  };

  return (
    <>
      <div className="foodEnter">
        <h3>Drag and Drop to switch between completed and uncompleted</h3>
      </div>
      <div className="container">
        <ul onDragEnter={(e) => setDragEnter(0)}>
          <p>Not Completed</p>
          <hr />
          {elements?.map(
            (el) =>
              !el.completed && (
                <li
                  key={el.id}
                  style={{
                    backgroundColor: el.id === placedElement ? "green" : "",
                  }}
                  draggable
                  onDragEnd={(e) => onDrop(e, el.id)}
                >
                  {el.title}
                </li>
              )
          )}
        </ul>
        <ul ref={destinationRef} onDragEnter={(e) => setDragEnter(1)}>
          <p>Completed</p>
          <hr />
          {elements.map(
            (el) =>
              !!el.completed && (
                <li
                  key={el.id}
                  style={{
                    backgroundColor: el.id === placedElement ? "green" : "",
                  }}
                  draggable
                  onDragEnd={(e) => onDrop(e, el.id)}
                >
                  {el.title}
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
}
