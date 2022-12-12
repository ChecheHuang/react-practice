import React from "react";
import Toggle from "./Toggle/ToggleComponent";
import TimeComponent from "./Timeout/TimeComponent";
import DebounceComponent from "./Debounce/DebounceComponent";
import UpdateEffectComponent from "./UpdateEffect/UpdateEffectComponent";
function CustomHook() {
  return (
    <>
      <div >toggle</div>
      <Toggle />
      <div style={{marginTop:"20px"}}>timeout</div>
      <TimeComponent />
      <div style={{marginTop:"20px"}}>debounce</div>
      <DebounceComponent />
      <div style={{marginTop:"20px"}}>updateEffect</div>
      <UpdateEffectComponent />
    </>
  );
}

export default CustomHook;
