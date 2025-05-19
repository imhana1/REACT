import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    //  100vh로 지정하면 브라우저 화면 높이
    <div className="d-flex justify-content-center align-items-center" style={{height:'600px'}}>
      <Spinner animation="border" role="status" />
    </div>
  );
};

export default Loading;
