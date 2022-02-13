import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import {
  Wrapper,
  ButtonStyled,
  InputStyled,
  InputWrapper,
} from "./Styles/styled";

function CreateTodo(props) {
  const {
    callBackSaveTodo,
    callBackCancel,
    defaultDescription,
    updateById,
    todoList,
  } = props;
  const [description, setDescription] = useState(defaultDescription || "");

  const saveTodo = () => {
    if (updateById) {
      todoList.map((item, index) => {
        if (item.id === updateById) {
          item.description = description;
          item.dateCreated = moment().format("MMMM D YYYY h:mm:ss A");
        }
      });
      let updatedTodoList = [...todoList];
      callBackSaveTodo(updatedTodoList);
    } else {
      let newTodo = {
        id: uuidv4(),
        description: description,
        dateCreated: moment().format("MMMM D YYYY h:mm:ss A"),
      };
      let updatedTodoList = [...todoList];
      updatedTodoList.push(newTodo);
      callBackSaveTodo(updatedTodoList);
    }
  };

  const inputProps = {
    type: "text",
    placeholder: "Enter description",
    onChange: (e) => {
      setDescription(e.target.value);
    },
    value: description,
  };

  return (
    <Wrapper>
      <InputWrapper>
        <InputStyled {...inputProps} />
      </InputWrapper>
      <ButtonStyled primary disabled={!description} onClick={saveTodo}>
        save
      </ButtonStyled>
      <ButtonStyled onClick={() => callBackCancel()}>cancel</ButtonStyled>
    </Wrapper>
  );
}

export default CreateTodo;
