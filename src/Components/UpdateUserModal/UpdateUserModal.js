import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const UpdateUserModal = ({ updatedUser, setUpdatedUser, refetch }) => {
  const [updatedValue, setUpdatedValue] = useState("");
  const { data: sector = [] } = useQuery({
    queryKey: ["sectors"],
    queryFn: async () => {
      const res = await fetch("https://task-server-three.vercel.app/sectors");
      const data = await res.json();
      return data;
    },
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedName = form.updatedName.value;
    const updatedDoc = {
      updatedName,
      updatedValue,
    };
    fetch(
      `https://task-server-three.vercel.app/updateUser/${updatedUser._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedDoc),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setUpdatedUser(null);
          refetch();
          toast.success("Users data updated successfully!");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input type="checkbox" id="userUpdateModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="userUpdateModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Update User</h3>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="updatedName"
                defaultValue={updatedUser.name}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Sectors</span>
              </label>
              <select
                name="sector"
                defaultValue={updatedUser.selectedSector}
                onChange={(event) => setUpdatedValue(event.target.value)}
                className="select select-bordered"
                required
              >
                <option selected>{updatedUser.selectedSector}</option>
                {sector.map((sec) => (
                  <option
                    defaultValue={sec.selectedSector}
                    className={`${sec.main ? "font-black" : null} ${
                      sec.sub ? "font-bold" : null
                    }`}
                    key={sec}
                  >{`${sec.sectorName}`}</option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              className="btn btn-block btn-primary mt-7"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserModal;
