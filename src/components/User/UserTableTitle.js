const UserTableHeader = () => {
  return (
    <div class="flex flex-row w-full">
      <p class="text-2xl self-center">Users</p>
      <button class="flex flex-row bg-transparent border border-1 border-slate-300 h-10 pl-3 pr-3 ml-auto rounded-xl text-black items-center text-sm font-bold">
        <img
          src="/icons/icons8-import-64.png"
          class="h-6 self-center mr-2"
          alt="None"
        />{" "}
        Import
      </button>
      <button class="flex flex-row bg-violet-700 h-10 pl-3 pr-3 ml-5 rounded-xl text-white items-center text-sm font-bold">
        <img
          src="/icons/icons8-plus-90.png"
          class="h-4 self-center mr-2"
          alt="None"
        />{" "}
        Add User
      </button>
    </div>
  );
};

export default UserTableHeader;
