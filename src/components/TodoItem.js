import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md"; // 이거 아이콘 받아온거임
import { useTodoDispatch } from "../TodoContext";

const Remove = styled.div`
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover{
        color: #e719d6;
        
    }
`;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => props.done && css`
        border:1px solid red;
        color: #e64980;
    `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${(props) => props.done && css`
        color: #ced4da;
    `}
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover{
        ${Remove}{
            opacity: 1;
        }
    }
`;

function TodoItem({id, text, done}) {
  const dispatch = useTodoDispatch();
  const onToggle = () => {
      dispatch({
          type:'TOGGLE',
          id,
      });
  };
  const onDelete = () => {
      dispatch({
        type:'REMOVE',
        id,
      });
  };
  return (
  <TodoItemBlock>
    <CheckCircle onClick={onToggle} done={done}>
        {done && <MdDone />}
    </CheckCircle>
    <Text done={done}>
        {text}
    </Text>
    <Remove onClick={onDelete}>
        <MdDelete/>
    </Remove>
  </TodoItemBlock>
  );
}

export default TodoItem;

