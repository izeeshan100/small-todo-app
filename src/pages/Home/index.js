import React, { useState } from "react";
import swal from "sweetalert";
import TodoTiles from "components/TodoTiles";
import CreateTodo from "components/CreateTodo";
import { sortByDate } from "utils/arraySorter";
import { todoDeleteSuccess, todoSaveSuccess } from "constants";
import {
  Wrapper,
  ContentWrapper,
  ButtonStyled,
  ButtonWrapper,
} from "./Styles/styled";

function Home() {
  const [todo, setTodo] = useState(0);
  const [createTodo, setCreateTodo] = useState(false);
  const todoListFromLocalStorage = localStorage.getItem("todoList")
    ? localStorage.getItem("todoList")
    : [];
  const [todoList, setTodoList] = useState(
    (todoListFromLocalStorage &&
      todoListFromLocalStorage.length &&
      JSON.parse(todoListFromLocalStorage)) ||
      []
  );

  const saveTodo = (updatedTodoList) => {
    updatedTodoList = sortByDate(updatedTodoList);
    setTodoList(updatedTodoList);
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
    swal(todoSaveSuccess);
    setCreateTodo(false);
  };

  const deleteTodo = (item, closeConfirmationModal) => {
    let filteredTodoList = [...todoList];
    filteredTodoList.splice(filteredTodoList.indexOf(item), 1);
    localStorage.setItem("todoList", JSON.stringify(filteredTodoList));
    setTodoList(filteredTodoList);
    closeConfirmationModal();
    swal(todoDeleteSuccess);
  };

  const createTodoProps = {
    callBackSaveTodo: (updatedTodoList) => {
      saveTodo(updatedTodoList);
    },
    callBackCancel: () => {
      setCreateTodo(false);
    },
    defaultDescription: null,
    todoList: todoList,
  };

  return (
    <React.Fragment>
      <Wrapper>
        <ContentWrapper>
          {todoList &&
            todoList.length > 0 &&
            todoList.map((item, index) => {
              return (
                <TodoTiles
                  todoItem={item}
                  key={index}
                  callBackDeleteTodo={(todoItem, closeConfirmationModal) => {
                    deleteTodo(todoItem, closeConfirmationModal);
                  }}
                  todoList={todoList}
                  callBackSaveTodo={(updatedTodoList) => {
                    saveTodo(updatedTodoList);
                  }}
                />
              );
            })}
          {createTodo && <CreateTodo {...createTodoProps} />}
          {!createTodo && (
            <ButtonWrapper>
              <ButtonStyled
                primary
                onClick={() => {
                  setCreateTodo(true);
                }}
              >
                Add Todo
              </ButtonStyled>
            </ButtonWrapper>
          )}
        </ContentWrapper>
      </Wrapper>
    </React.Fragment>
  );
}

export default Home;
