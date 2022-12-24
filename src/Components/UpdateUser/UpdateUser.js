import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaTrash, FaUserEdit } from "react-icons/fa";
import UpdateUserModal from "../UpdateUserModal/UpdateUserModal";

const UpdateUser = () => {
  const [updatedUser, setUpdatedUser] = useState([]);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://task-server-three.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to delete?");
    if (proceed) {
      fetch(`https://task-server-three.vercel.app/deleteUser/${id}`, {
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
    fetch(`https://task-server-three.vercel.app/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdatedUser(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="mt-10 ">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-10">Update User</h2>
        <div className="md:w-6/12 mx-auto neomorphic card rounded-none">
          <div className="overflow-x-auto">
            <table className="table  w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Sector</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="">
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
                      <label
                        htmlFor="userUpdateModal"
                        className="btn btn-ghost btn-sm"
                        onClick={() => handleUpdateUser(user._id)}
                      >
                        <FaUserEdit className="text-xl text-blue-500"></FaUserEdit>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {updatedUser && (
              <UpdateUserModal
                updatedUser={updatedUser}
                refetch={refetch}
                setUpdatedUser={setUpdatedUser}
              ></UpdateUserModal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
