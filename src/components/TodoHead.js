import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
   border-bottom: 1px solid #e9ecef;
   h1{
       font-size: 28px;
       color: #a61e4d;
       margin: 0;
   }
   .day {
       margin-top: 4px;
       color: #868e96;
       font-size: 20px;
   }
   .tasks-left {
       color: #f783ac;
       font-size: 16px;
       margin-top:40px;
       font-weight: bold;
   }
`;


function TodoHead() {
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const dayName = today.toLocaleDateString('ko-KR', {
        weekday:'long'
    });

    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);
    return (<TodoHeadBlock>
      <h1>수민이의 {dateString} &gt;3&lt;♡  </h1>
      <div className="day">벌써 {dayName} 이야</div>
      <div className="tasks-left">할 거 {undoneTasks.length}개 남았따</div>
  </TodoHeadBlock>);
}

export default TodoHead;

