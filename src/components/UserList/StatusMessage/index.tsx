import React from "react";

interface StatusMessageProps {
  type: "loading" | "error" | "notFound";
  message?: string;
}

const StatusMessage = ({ type, message }: StatusMessageProps) => {
  let text = "";

  switch (type) {
    case "loading":
      text = "Loading...";
      break;
    case "error":
      text = message || "An error ocurred :c";
      break;
    case "notFound":
      text = message || "No users found :(";
      break;
    default:
      break;
  }
  return <p className={`text-base status-message ${type}`}>{text}</p>;
};

export default StatusMessage;
