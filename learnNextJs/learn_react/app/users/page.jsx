"use client";
import { useEffect, useState } from "react";
import SingleUserCard from "../components/usercards/singleUser";
import axios from "axios";
import Link from "next/link";
const page = () => {
  const [users, setUsers] = useState();
  function loadUsers() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => setUsers(result.data));
  }
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="flex gap-3 flex-wrap">
      {users &&
        users.map((user) => {
          return (
            <Link href={`users/${user.id}`}>
              <SingleUserCard user={user} />
            </Link>
          );
        })}
    </div>
  );
};

export default page;
