import React, { useRef } from "react";

import "./NewTodo.css";

interface NewTodoProps {
  // 함수 type임을 명시
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  // useRef의 값으로 저장되는 각 element의 id값은 HTML요소이므로 HTMLInputElement로 props를 지정
  // 컴포넌트가 초기에 렌더링될 때에는 ref의 값이 지정되지 않으므로, 초기 값는 null로 지정
  // 만약 하나의 컴포넌트 내에 여러 ref값을 관리하게 될 경우, []로 빈 배열 초기 값을 지정
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //  const enteredText = textInputRef.current.value 라고 코드를 구성하면 TS는 에러를 반환한다.
    // 이는 textInputRef.current.value값이 없는 경우에 대해 TS는 알지 못하기 때문
    // 그러나, 현 상황에서 반드시 submit button이 클릭되어야 todoSubmitHandler가 실행되므로 textInputRef.current.value은 반드시 존재한다.
    // 따라서 textInputRef.current!.value; !를 추가하여 값이 존재한다는 사실을 TS에게 알릴 수 있다.
    const enteredText = textInputRef.current!.value;

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text" className="todo-text">
          Todo Text
        </label>
        <input type="text" className="todo-text" ref={textInputRef} />
      </div>
      <button className="todo-submit" type="submit">
        ADD TODO
      </button>
    </form>
  );
};

export default NewTodo;
