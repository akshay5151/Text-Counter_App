import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div className={`alert alert-primary alert-idismissible fade show  role="alert`}>
        {props.alert.type} : {props.alert.message}
      </div>
    )
  );
}

export default Alert;
