import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaTrash, FaUserEdit } from "react-icons/fa";

const UpdateUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/deleteUser/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            toast.success("User deleted successfully!");
            refetch();
          }
        })
        .catch((error) => console.log(error));
    }
  };
  const handleUpdateUser = (id) => {
    console.log(id);
  };
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
                {users.map((user, i) => (
                  <tr key={user._id}>
                    <th>{i + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.selectedSector}</td>
                    <td>
                      <button
                        className="btn btn-ghost btn-sm mr-3"
                        onClick={() => handleDelete(user._id)}
                      >
                        <FaTrash className="text-xl text-red-500"></FaTrash>
                      </button>
                      <button
                        className="btn btn-ghost btn-sm"
                        onClick={() => handleUpdateUser(user._id)}
                      >
                        <FaUserEdit className="text-xl text-blue-500"></FaUserEdit>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
