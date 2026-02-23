"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const UserAddForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const token = localStorage.getItem("token"); // JWT token

    if (!token) {
      setErrorMessage("No token found. Please login.");
      return;
    }

    try {
      const res = await fetch(
        "https://nex-qbyte-backend.vercel.app/api/user/create",
        {
          method: "POST",
          headers: {
            Authorization: `BEARER ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await res.json();

      if (!res.ok) {
        setErrorMessage(result.message || "Failed to create user.");
        return;
      }

      setSuccessMessage(result.message);
      reset();
      setTimeout(() => setSuccessMessage(""), 3000);
      router.push("/admin"); // Redirect to admin page after successful creation
    } catch (err) {
      console.error(err);
      setErrorMessage("An error occurred while creating user.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 shadow-lg rounded-lg bg-white border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New User</h2>

      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md border border-green-200">
          ✅ {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md border border-red-200">
          ❌ {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Name"
            className={`w-full border p-3 rounded-md ${
              errors.name ? "border-red-400" : "border-gray-300"
            }`}
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 5,
                message: "Name should be at least 5 characters",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            className={`w-full border p-3 rounded-md ${
              errors.email ? "border-red-400" : "border-gray-300"
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            className={`w-full border p-3 rounded-md ${
              errors.password ? "border-red-400" : "border-gray-300"
            }`}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Role */}
        <div>
          <select
            className={`w-full border p-3 rounded-md ${
              errors.role ? "border-red-400" : "border-gray-300"
            }`}
            {...register("role", { required: "Role is required" })}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        {/* Number */}
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            className={`w-full border p-3 rounded-md ${
              errors.number ? "border-red-400" : "border-gray-300"
            }`}
            {...register("number", {
              pattern: {
                value: /^\d{10}$/,
                message: "Please enter a valid 10-digit number",
              },
            })}
          />
          {errors.number && (
            <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <input
            type="text"
            placeholder="Address"
            className="w-full border p-3 rounded-md border-gray-300"
            {...register("address")}
          />
        </div>

        {/* Position */}
        <div>
          <input
            type="text"
            placeholder="Position"
            className="w-full border p-3 rounded-md border-gray-300"
            {...register("position")}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-md font-medium transition-all ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {isSubmitting ? "Creating..." : "Create User"}
        </button>
      </form>
    </div>
  );
};

export default UserAddForm;
