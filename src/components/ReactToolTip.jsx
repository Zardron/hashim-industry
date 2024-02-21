import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const ReactToolTip = ({ content }) => {
  return (
    <ReactTooltip
      id="my-tooltip-1"
      place="left"
      content={content}
      border="1px solid #0581bc"
      style={{ backgroundColor: "white", color: "black", fontWeight: "500" }}
    />
  );
};

export default ReactToolTip;
