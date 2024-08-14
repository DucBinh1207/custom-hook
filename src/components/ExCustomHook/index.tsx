import { useState } from "react";
import useUnMount from "../../hooks/useUnMount";
import useDidMount from "../../hooks/useDidMount";
import useFirstMountState from "../../hooks/useFirstMountState";

export default function ExCustomHook() {
  const [render, setRender] = useState(true);

  console.log(useFirstMountState());
  useDidMount();
  useUnMount();

  return (
    <>
      <form
        action="submit"
        className="flex h-[300px] w-[800px] flex-col items-center justify-around bg-slate-200"
      >
        <div>
          <label htmlFor="randominput"> Input </label>
          <input id="randominput" type="text" className="w-[3 00px]" />
        </div>
        <button
          type="button"
          className="mt-[100px] inline-block cursor-pointer rounded-[5px] bg-green-300 p-[10px]"
          onClick={() => {
            setRender(!render);
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}
