"use client";
import React, { useEffect, useState } from "react";
import {
  Search,
  Filter,
  User,
  Mail,
  Calendar,
  Trash2,
  Edit2,
  Eye,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import ContactCard from "./ContactCard";

const ShowContent = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [refreshing, setRefreshing] = useState(false);

  // Fetch contacts
  const fetchContacts = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please login.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact/allcontacts", {
        headers: {
          Authorization: `BEARER ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to fetch contacts.");
        return;
      }

      const contactsArray = Array.isArray(data) ? data : data.contacts || [];
      setContacts(contactsArray);
      setFilteredContacts(contactsArray);
    } catch (err) {
      console.error(err);
      setError("An error occurred while fetching contacts.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Filter and search contacts
  useEffect(() => {
    let result = contacts;

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (contact) =>
          contact.name?.toLowerCase().includes(term) ||
          contact.email?.toLowerCase().includes(term) ||
          contact.purpose?.toLowerCase().includes(term) ||
          contact.message?.toLowerCase().includes(term),
      );
    }

    // Apply category filter
    if (filter !== "all") {
      result = result.filter((contact) => contact.purpose === filter);
    }

    setFilteredContacts(result);
  }, [searchTerm, filter, contacts]);

  // Get unique purposes for filter
  const purposes = [
    "all",
    ...new Set(contacts.map((contact) => contact.purpose).filter(Boolean)),
  ];

  const handleRefresh = () => {
    setRefreshing(true);
    fetchContacts();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;

    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        `http://localhost:5000/api/contact/deletecontact/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `BEARER ${token}`,
          },
        },
      );

      if (res.ok) {
        setContacts((prev) => prev.filter((contact) => contact._id !== id));
        alert("Contact deleted successfully!");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete contact.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-100 flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600">Loading contacts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-100 flex flex-col items-center justify-center p-6">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Oops! Something went wrong
        </h3>
        <p className="text-gray-600 text-center mb-6">{error}</p>
        <button
          onClick={fetchContacts}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Contact Messages
            </h1>
            <p className="text-gray-600 mt-1">
              Manage and view all contact inquiries
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Contacts</p>
                <p className="text-2xl font-bold text-gray-900">
                  {contacts.length}
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold">{filteredContacts.length}</span> of{" "}
            <span className="font-semibold">{contacts.length}</span> contacts
          </p>
        </div>

        {/* Contact List */}
        {filteredContacts.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No contacts found
            </h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || filter !== "all"
                ? "Try adjusting your search or filter"
                : "No contact messages have been submitted yet"}
            </p>
            {(searchTerm || filter !== "all") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilter("all");
                }}
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredContacts.map((contact) => (
              <div
                key={contact._id}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold">
                      {contact.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {contact.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        contact.purpose === "Web Development"
                          ? "bg-blue-100 text-blue-800"
                          : contact.purpose === "App Development"
                            ? "bg-green-100 text-green-800"
                            : contact.purpose === "Graphics Designing"
                              ? "bg-purple-100 text-purple-800"
                              : contact.purpose === "Digital Marketing"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {contact.purpose}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 line-clamp-2">
                    {contact.message}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(
                        contact.createdAt || contact.date,
                      ).toLocaleDateString()}
                    </span>
                    {!contact.read && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleDelete(contact._id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowContent;
