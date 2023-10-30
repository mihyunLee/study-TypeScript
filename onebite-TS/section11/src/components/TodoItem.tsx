import React from "react";
import { Todo } from "../types";

interface Props extends Todo {
  onClickDelete: (id: number) => void;
}

export default function TodoItem(props: Props) {
  const onClickButton = () => {
    props.onClickDelete(props.id);
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
