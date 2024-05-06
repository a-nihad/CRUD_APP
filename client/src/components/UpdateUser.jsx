import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Input from "../ui/Input";
import Button from "../ui/Button";
import BackButtion from "../ui/BackButtion";

function UpdateUser() {
  const userData = {
    fullName: "",
    email: "",
    phone: "",
    place: "",
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(userData);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/" + id)
      .then((result) => setUser(result.data.data.user))
      .catch((err) => console.log(err));
  }, []);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch("http://localhost:8000/api/" + id, user)
      .then((result) => navigate("/"))
      .catch((err) => console.log(err.response.data.message));
  };
  return (
    <div className="w-2/6 bg-white h-max p-8 rounded-lg space-y-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl"> Update User </h1>
        <BackButtion />
      </div>

      <form className="grid gap-3" onSubmit={handleSubmit}>
        <Input
          name="fullName"
          label="Full Name"
          value={user.fullName}
          onChange={inputHandler}
        />
        <Input
          name="email"
          label="Email"
          value={user.email}
          onChange={inputHandler}
        />
        <Input
          name="phone"
          label="Phone"
          value={user.phone}
          onChange={inputHandler}
        />
        <Input
          name="place"
          label="Place"
          value={user.place}
          onChange={inputHandler}
        />
        <Button className="bg-blue-500 text-white text-lg"> Submit </Button>
      </form>
    </div>
  );
}

export default UpdateUser;
