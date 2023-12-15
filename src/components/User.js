import { useEffect, useState } from "react";
import Header from "./Header";
import UserTable from "./User/UserTable";
import UserTableHeader from "./User/UserTableTitle";
import UserTableFooter from "./User/UserTableFooter";

const User = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async () => {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);

    const data = await response.json();
    setUsers(data.data);
  };

  const pageHandaler = (string) => {
    if (
      (page === 1 && string === "previous") ||
      (page === 2 && string !== "previous")
    ) {
      return;
    }

    string === "previous" ? setPage(page - 1) : setPage(page + 1);
  };

  return (
    <>
      <Header />
      <div class="pl-40 pr-40 pt-10">
        <UserTableHeader />

        <div class="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl flex flex-col mt-9">
          <div class="flex flex-row justify-between bg-slate-50 p-6 pt-2 pb-2">
            <p class="w-[40%] text-sm text-slate-500">User Info</p>
            <p class="w-[40%] text-sm text-slate-500">About</p>
            <p class="w-[20%] text-sm text-slate-500">Status</p>
          </div>

          {users.map((each, index) => {
            return <UserTable key={index} data={each} />;
          })}

          <UserTableFooter pageHandaler={pageHandaler} page={page} />
        </div>
      </div>
    </>
  );
};

export default User;
