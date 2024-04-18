import { useRef } from "react";

function MyForm({value, setValue}) {
  const inputRef = useRef(null)
  return (
    <>
      <input
        id="color"
        type="text"
        placheholder="escribe un color"
        className="inputClass"
        onChange={()=>setValue(inputRef.current.value)}
        value={value}
        ref={inputRef}
      />
    </>
  );
}

export default MyForm;