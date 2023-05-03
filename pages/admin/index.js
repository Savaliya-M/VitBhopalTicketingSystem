import { useRouter } from "next/router";
import React from "react";

const Admin = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push("/Admin_Hostel")}
      >
        hostel
      </button>
    </div>
  );
};

export default Admin;
