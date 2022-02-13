export const theme = {
  colors: {
    background: "#ff4148",
    white: "#fff",
    text: "",
    borderDefault: "#ddd",
  },
  spacing: {
    xLarge: "4em",
    large: "3em",
    medium: "2em",
    small: "1em",
    xSmall: "0.5em",
  },
  opacity: {
    fade: "0.5",
    normal: "1",
  },
  borderRadius: {
    default: "5px",
  },
};

export const confirmationModalContentProps = {
  title: "Confirmation",
  text: "Are you sure you want to conitnue",
};

export const reactTooltipProps = {
  id: "main",
  place: "top",
  type: "dark",
  effect: "solid",
};

export const tooltipContentProps = {
  edit: {
    "data-for": "main",
    "data-tip": "Edit Task",
    "data-iscapture": "true",
  },
  delete: {
    "data-for": "main",
    "data-tip": "Delete Task",
    "data-iscapture": "true",
  },
};

export const todoDeleteSuccess = {
  title: "Congragulations",
  text: "Todo deleted succesfully!",
  icon: "success",
  buttons: "ok",
};

export const todoSaveSuccess = {
  title: "Congragulations",
  text: "Todo saved succesfully!",
  icon: "success",
  buttons: "ok",
};
