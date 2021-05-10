import React from "react";

const Like = ({ liked, onToggle }) => {
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={onToggle}
      className={setClasses(liked)}
      aria-hidden="true"
    />
  );
};

function setClasses(liked) {
  let classes = "fa fa-heart";
  return liked ? classes : (classes += "-o");
}

export default Like;
