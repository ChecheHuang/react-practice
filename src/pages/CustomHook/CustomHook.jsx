import React from "react";
import Toggle from "./Toggle/ToggleComponent";
import TimeComponent from "./Timeout/TimeComponent";
import DebounceComponent from "./Debounce/DebounceComponent";
import UpdateEffectComponent from "./UpdateEffect/UpdateEffectComponent";
import ArrayComponent from "./Array/ArrayComponent";
function CustomHook() {
  return (
    <>
     
      <Toggle />
     
      <TimeComponent />

      <DebounceComponent />

      <UpdateEffectComponent />

      <ArrayComponent />
    </>
  );
}

export default CustomHook;
