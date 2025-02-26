import { createEffect } from "solid-js";

const Toast = (props) => {
  let toastRef;

  createEffect(() => {
    if (props.show) {
      toastRef.style.display = "block";
      setTimeout(() => {
        toastRef.style.opacity = "1";
      }, 10);
    } else {
      toastRef.style.opacity = "0";
      setTimeout(() => {
        toastRef.style.display = "none";
      }, 300);
    }
  });

  return (
    <div id="toast" class="toast" ref={toastRef}>
      {props.message}
    </div>
  );
};

export default Toast;
