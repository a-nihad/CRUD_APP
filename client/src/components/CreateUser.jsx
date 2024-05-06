import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../ui/Input";
import Button from "../ui/Button";
import BackButtion from "../ui/BackButtion";

function CreateUser() {
  const navigate = useNavigate();

  const users = {
    fullName: "",
    email: "",
    phone: "",
    place: "",
  };

  const [user, setUser] = useState(users);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/createUser", user)
      .then((result) => navigate("/"))
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <div className="w-2/6 bg-white h-max p-8 rounded-lg space-y-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl"> Add User </h1>
        <BackButtion />
      </div>

      <form className="grid gap-3" onSubmit={handleSubmit}>
        <Input name="fullName" label="Full Name" onChange={inputHandler} />
        <Input name="email" label="Email" onChange={inputHandler} />
        <Input name="phone" label="Phone" onChange={inputHandler} />
        <Input name="place" label="Place" onChange={inputHandler} />
        <Button className="bg-blue-500 text-white text-lg"> Submit </Button>
      </form>
    </div>
  );
}

export default CreateUser;
