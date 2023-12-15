import { useState } from "react";

const UserInfo = (props) => {
  const [checked, setChecked] = useState(false);

  const checkHandaler = () => {
    setChecked(!checked);
  };

  return (
    <div class="flex flex-row w-[40%]">
      {checked && (
        <button onClick={checkHandaler} class="rounded-md ">
          <img
            src="/icons/icons8-tick-24.png"
            class="h-6 border-2 bg-purple-50 border-violet-700 rounded-md p-[2px]"
            alt="none"
          />
        </button>
      )}
      {!checked && (
        <button
          onClick={checkHandaler}
          class="h-6 w-6 border-2 border-slate-200 rounded-md p-[2px] self-center"
        ></button>
      )}
      <img
        src="/icons/male-avatar-maker-2a7919.png"
        class="h-12 rounded-full self-center ml-4"
        alt="None"
      />
      <div class="flex flex-col ml-4">
        <p class="font-bold">
          {props.data.first_name} {props.data.last_name}
        </p>
        <p class="text-slate-500">{props.data.email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
