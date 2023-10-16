"use client";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className=" h-screen	 bg-slate-100">
        About page
        <p>
          <Link href="about/#section1">Section 1</Link>
        </p>
      </div>
      <div id="section1" className="h-screen bg-slate-300">
        section 1<p></p>
      </div>
    </>
  );
};

export default page;
