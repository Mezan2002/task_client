import React from "react";
import { FaTrash, FaUserEdit } from "react-icons/fa";

const UpdateUser = () => {
  return (
    <div className="mt-10 ">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-10">Update User</h2>
        <div className="md:w-6/12 mx-auto neomorphic card">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Sector</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Mezan</td>
                  <td>Programmer</td>
                  <td>
                    <button className="btn btn-ghost btn-sm mr-3">
                      {" "}
                      <FaTrash className="text-xl"></FaTrash>{" "}
                    </button>
                    <button className="btn btn-ghost btn-sm">
                      {" "}
                      <FaUserEdit className="text-xl"></FaUserEdit>{" "}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
