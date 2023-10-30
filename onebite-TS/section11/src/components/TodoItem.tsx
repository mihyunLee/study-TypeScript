import React from "react";
import { Todo } from "../types";
import { useTodoDispatch } from "../App";

interface Props extends Todo {}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };

  return (
    <li key={props.id}>
      {props.id}번: {props.content}
      <button type="button" onClick={onClickButton}>
        삭제
      </button>
    </li>
  );
}
