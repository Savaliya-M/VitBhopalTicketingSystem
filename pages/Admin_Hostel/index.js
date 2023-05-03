import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";

const Admin_Hostel = () => {
  const { data: session } = useSession({
    required: true,
  });
  let router = useRouter();
  let [user, setuser] = useState(() => {
    return null;
  });
  let [hostelcomplain, sethostelcomplain] = useState([]);

  useEffect(() => {
    setuser(() => {
      let data = session ? session.user : null;
      if (data) {
        fetch("http://localhost:3000/api/Admin_Hostel")
          .then((apidata) => apidata.json())
          .then((apidata) => {
            sethostelcomplain(apidata.data);
          });
      }
      return data;
    });
  }, [session]);

  const ResolveClickHandler = (aid) => {
    let data = { id: aid };
    fetch("http://localhost:3000/api/Admin_Hostel", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((apidata) => apidata.json())
      .then((apidata) => {
        // sethostelcomplain(apidata.data);
        console.log(apidata);
        location.reload();
      });
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Hostel No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Room No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Reason
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Description
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Resolve
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {hostelcomplain ? (
                  hostelcomplain.map((data) => {
                    if (data.resolved == false) {
                      return (
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {data.firstName}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {data.lastName}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {data.hostelNo}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {data.roomNo}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {data.category}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {data.reason}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {data.desc}
                          </td>

                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <a
                              className="text-green-500 hover:text-green-700"
                              href="#"
                              onClick={() => ResolveClickHandler(data._id)}
                            >
                              Resolve
                            </a>
                          </td>
                        </tr>
                      );
                    }
                  })
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Hostel;
