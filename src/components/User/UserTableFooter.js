const UserTableFooter = (props) => {
  return (
    <div class="flex flex-row justify-between p-6 pt-4 pb-4">
      <button
        onClick={() => props.pageHandaler("previous")}
        class="flex flex-row bg-transparent border border-1 border-slate-300 h-10 pl-3 pr-3 rounded-xl text-black items-center text-sm"
      >
        Previous
      </button>
      <p class="self-center">Page {props.page} of 2</p>
      <button
        onClick={() => props.pageHandaler("next")}
        class="flex flex-row bg-transparent border border-1 border-slate-300 h-10 pl-3 pr-3 rounded-xl text-black items-center text-sm"
      >
        Next
      </button>
    </div>
  );
};

export default UserTableFooter;
