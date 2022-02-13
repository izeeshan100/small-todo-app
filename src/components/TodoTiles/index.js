import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import ConfirmationModal from "components/ConfirmationModal";
import CreateTodo from "components/CreateTodo";
import {
  confirmationModalContentProps,
  reactTooltipProps,
  tooltipContentProps,
} from "constants";
import DeleteIcon from "assets/icons/delete.png";
import EditIcon from "assets/icons/edit.png";
import {
  WrapperMain,
  TextStyled,
  ActionsWrapper,
  StyledIcon,
} from "./Styles/styled";

function TodoTiles(props) {
  const { todoItem, callBackDeleteTodo, todoList, callBackSaveTodo } = props;
  const { id, description, dateCreated } = todoItem;
  const [createTodo, setCreateTodo] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const editProps = {
    src: EditIcon,
    onClick: () => {
      setCreateTodo(true);
    },
    edit: true,
  };

  const deleteProps = {
    src: DeleteIcon,
    onClick: () => {
      setShowConfirmationModal(true);
    },
    edit: true,
  };

  const createTodoProps = {
    callBackSaveTodo: (data) => {
      callBackSaveTodo(data);
      setCreateTodo(false);
    },
    callBackCancel: () => {
      setCreateTodo(false);
    },
    defaultDescription: description,
    updateById: id,
    todoList: todoList,
  };

  const confirmationProps = {
    callBackHandleClose: () => {
      setShowConfirmationModal(false);
    },
    callBackHandleContinue: () => {
      callBackDeleteTodo(todoItem, closeConfirmationModal);
    },
  };

  return (
    <React.Fragment>
      <WrapperMain>
        <ActionsWrapper>
          <StyledIcon {...editProps} {...tooltipContentProps.edit} />
          <StyledIcon {...deleteProps} {...tooltipContentProps.delete} />
        </ActionsWrapper>
        <TextStyled>{dateCreated}</TextStyled>
        <TextStyled>{description}</TextStyled>
      </WrapperMain>
      {createTodo && <CreateTodo {...createTodoProps} />}
      {showConfirmationModal && (
        <ConfirmationModal
          {...confirmationProps}
          {...confirmationModalContentProps}
        />
      )}
      <ReactTooltip {...reactTooltipProps} />
    </React.Fragment>
  );
}

export default React.memo(TodoTiles);
