import { useEffect, useState } from "react";
import CustomTable from "../../components/CustomTable";
import UserForm from "../../components/UserForm";
import { Signup } from "../auth/Signup";

const Profile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  const basicUserList = users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email
    };
  });

  return (
    <div>
      <h1>All Users</h1>
      {users.length > 0 && <CustomTable data={basicUserList} />}

      <h2>Add User</h2>
      <Signup />
    </div>
  );
};
export default Profile;
