"use client";
import Link from "next/link";

const SingleUserCard = (props) => {
  const { user } = props;
  return (
    <>
      <div className="flex flex-col gap-y-2 p-4 w-80 h-auto shadow-sm bg-white rounded-sm m-2">
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <Link href={user.website}>{user.website}</Link>
      </div>
    </>
  );
};

export default SingleUserCard;
