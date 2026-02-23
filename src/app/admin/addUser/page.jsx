"use client";
import UserAddForm from "@/component/admin/addUser/UserAddForm";
import UnAuthorizesection from "@/component/admin/UnAuthorizesection";
import { Backpack, MoveLeft } from "lucide-react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [authorized, setAuthorized] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setAuthorized(false);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          "https://nex-qbyte-backend.vercel.app/api/auth/checkToken",
          {
            headers: {
              Authorization: `BEARER ${token}`,
            },
          },
        );

        if (!res.ok) {
          setAuthorized(false);
          setLoading(false);
          return;
        }

        const data = await res.json();

        console.log("data add user", data);

        setAuthorized(true);
        setIsAdmin(data.user.role === "admin");
      } catch (error) {
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-600 text-lg">Checking authorization...</div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10">
      {authorized && isAdmin ? (
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
          <div
            className="text-black flex items-center gap-2 mb-6 cursor-pointer"
            onClick={() => window.history.back()}
          >
            <MoveLeft />
            <p>Back</p>
          </div>
          <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Add New User
          </h1>
          <UserAddForm />
        </div>
      ) : (
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold mb-4 text-red-600">Unauthorized</h1>
          <p className="text-gray-600 mb-6">
            You do not have permission to access this page.
          </p>
          <UnAuthorizesection />
        </div>
      )}
    </div>
  );
};

export default Page;
