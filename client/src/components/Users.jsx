import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Button from "../ui/Button";
import TableHeader from "../ui/TableHeader";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((result) => setUsers(result.data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/api/" + id)
      .then((result) => console.log("User deleted"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-5/6 space-y-1 ">
      <NavLink to="/create">
        <Button className="bg-orange-500 text-white py-2.5 font-semibold">
          Create User
        </Button>
      </NavLink>
      <TableHeader />

      {users.map((user) => (
        <div
          key={user.email}
          className="px-10 py-2 grid grid-cols-[1fr_1fr_.8fr_.8fr_.65fr] items-center bg-slate-100 rounded-lg "
        >
          <h1> {user.fullName} </h1>
          <h1> {user.email} </h1>
          <h1> {user.phone} </h1>
          <h1> {user.place} </h1>

          <div className="flex justify-between">
            <NavLink to={`/${user._id}`}>
              <Button className="bg-green-500 text-white">Update</Button>
            </NavLink>
            <Button
              onClick={() => handleDelete(user._id)}
              className="bg-red-500 text-white"
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
