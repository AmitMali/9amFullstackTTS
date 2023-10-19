"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const page = ({ params }) => {
  const { id } = params;
  const [user, setUser] = useState();
  function loadUser() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((result) => setUser(result.data));
  }
  useEffect(() => {
    loadUser();
  }, []);

  return (
    user && (
      <div>
        <div className="flex flex-col gap-y-2 p-4 w-80 h-auto shadow-sm bg-white rounded-sm m-2">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <Link href={user.website}>{user.website}</Link>
        </div>
      </div>
    )
  );
};

export default page;
