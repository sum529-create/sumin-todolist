import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: "자신감 가지기!",
    done: true,
  },
  {
    id: 2,
    text: "TodoList 만들어보기",
    done: true,
  },
  {
    id: 3,
    text: "리액트 API연동 강의 수강",
    done: false,
  },
];

/*
    CREATE
    TOGGLE
    REMOVE
*/

function TodoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      // TodoCreate.js에서 dispatch로 만든 action.todo
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type:${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(TodoReducer, initialTodos);
  const nextId = useRef(4);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}
export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}
