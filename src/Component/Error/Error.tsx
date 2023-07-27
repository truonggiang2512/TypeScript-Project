import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Error</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Come Back the Home Screen
      </button>
    </div>
  );
}
