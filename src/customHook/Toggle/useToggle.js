import React, { useState } from "react";

function useTootle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value) {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue];
}

export default useTootle;
