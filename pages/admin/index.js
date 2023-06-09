import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import img from "../../public/vit_logo.png";

import { useSession } from "next-auth/react";

const Admin = () => {
  const { data: session } = useSession({
    required: true,
  });
  let router = useRouter();
  let [user, setuser] = useState(() => {
    return null;
  });
  let [complain, setcomplain] = useState([]);

  useEffect(() => {
    setuser(() => {
      let data = session ? session.user : null;
      if (data) {
        fetch("http://localhost:3000/api/Admin_Hostel")
          .then((apidata) => apidata.json())
          .then((apidata) => {
            setcomplain(apidata.data);
          });
      }
      return data;
    });
  }, []);

  const hostelData = () => {
    let data = session ? session.user : null;
    if (data) {
      fetch("http://localhost:3000/api/Admin_Hostel")
        .then((apidata) => apidata.json())
        .then((apidata) => {
          setcomplain(apidata.data);
        });
    }
    return data;
  };
  const MessData = () => {
    let data = session ? session.user : null;
    if (data) {
      fetch("http://localhost:3000/api/Admin_Mess")
        .then((apidata) => apidata.json())
        .then((apidata) => {
          setcomplain(apidata.data);
        });
    }
    return data;
  };
  const LibraryData = () => {
    let data = session ? session.user : null;
    if (data) {
      fetch("http://localhost:3000/api/Admin_Library")
        .then((apidata) => apidata.json())
        .then((apidata) => {
          setcomplain(apidata.data);
        });
    }
    return data;
  };
  const UBData = () => {
    let data = session ? session.user : null;
    if (data) {
      fetch("http://localhost:3000/api/Admin_UB")
        .then((apidata) => apidata.json())
        .then((apidata) => {
          setcomplain(apidata.data);
        });
    }
    return data;
  };
  const ITDepartmentData = () => {
    let data = session ? session.user : null;
    if (data) {
      fetch("http://localhost:3000/api/Admin_ItDepartment")
        .then((apidata) => apidata.json())
        .then((apidata) => {
          setcomplain(apidata.data);
        });
    }
    return data;
  };
  const academicData = () => {
    let data = session ? session.user : null;
    if (data) {
      fetch("http://localhost:3000/api/Admin_AcademicBlock")
        .then((apidata) => apidata.json())
        .then((apidata) => {
          setcomplain(apidata.data);
        });
    }
    return data;
  };

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
        // setcomplain(apidata.data);
        console.log(apidata);
        location.reload();
      });
  };
  return (
    <div className="min-h-full">
      <nav className="bg-blue-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="/vit_logo.png"
                  alt="Your Company"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                    onClick={hostelData}
                  >
                    Hostel
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    onClick={MessData}
                  >
                    Mess
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    onClick={LibraryData}
                  >
                    Library
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    onClick={UBData}
                  >
                    Under Belly
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    onClick={ITDepartmentData}
                  >
                    IT Department
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    onClick={academicData}
                  >
                    Academic Block
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <span
                  className="text-gray-300 bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  onClick={() => router.push("/")}
                >
                  Back
                </span>
                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button> */}

                <div className="relative ml-3">
                  {/* <div>
                                    <button type="button" className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                                </div> */}

                  {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">

                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                                </div> */}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a
              href="#"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Team
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Calendar
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Reports
            </a>
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  Tom Cook
                </div>
                <div className="text-sm font-medium leading-none text-gray-400">
                  tom@example.com
                </div>
              </div>
              <button
                type="button"
                className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-3 space-y-1  px-2">
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Your
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Settings
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
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
                      {complain ? (
                        complain.map((data) => {
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
                                    onClick={() =>
                                      ResolveClickHandler(data._id)
                                    }
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
        </div>
      </main>
    </div>
    // <div>
    //   <button
    //     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //     onClick={() => router.push("/Admin_Hostel")}
    //   >
    //     hostel
    //   </button>
    // </div>
  );
};

export default Admin;
