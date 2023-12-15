import UserInfo from "./UserInfo";

const UserTable = (props) => {
  return (
    <div class="flex flex-row justify-between p-6 border border-b border-slate-100">
      <UserInfo data={props.data} />

      <div class="flex flex-col w-[40%]">
        <p>Some dummy Content</p>
        <p class="text-slate-500">Brings all your news into one place</p>
      </div>

      <div class="flex flex-row w-[20%] justify-between">
        <p class="text-xs font-bold text-green-600 self-center bg-green-50 rounded-xl p-1 pl-2 pr-2">
          Customer
        </p>
        <button class="ml-auto">
          <img
            src="/icons/icons8-delete-24.png"
            class="h-6 self-center"
            alt="None"
          />
        </button>

        <button class="ml-7">
          <img
            src="/icons/icons8-write-96.png"
            class="h-6 self-center"
            alt="None"
          />
        </button>
      </div>
    </div>
  );
};

export default UserTable;
