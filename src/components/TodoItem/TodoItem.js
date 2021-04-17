import React, {useState}  from "react";
import "./TodoItem.css";

function Todo(props) {
  const [addClass, setAddClass] = useState(false);
  const classHandler = () => {
    setAddClass(!addClass)
  }
  const { content } = props;
  return <div onClick={
    classHandler
  } className={`clearfix ${addClass ? 'done' : null}`}>{content}



  <button onClick={
    () => props.removeItem(props.id)
  } className="btn btn-danger float-right">Sil</button></div>;
}


export default Todo;
