import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import Select from 'react-select';
import { Helmet } from "react-helmet-async";
import { FaSearch, FaUserShield, FaUserTie } from "react-icons/fa";

const ManageUser = () => {
  const [search, setSearch] = useState('');
  const [role, setRole] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["manageUsers", search, role, currentPage],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/?page=${currentPage}`, {
        params: {
          search,
          role: role ? role.value : ''
        }
      });
      return data;
    },
  });

  const { data: totalCount = {} } = useQuery({
    queryKey: ['userCount'],
    queryFn: async () => {
      const res = await axiosSecure.get('/userCount')
      return res.data;
    }
  });

  const { count } = totalCount;
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(count / itemsPerPage) || 0;
  const pages = numberOfPages > 0 ? [...Array(numberOfPages).keys()] : [];

  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  const updateUserRole = useMutation({
    mutationFn: async ({ email, role, status }) => {
      const { data } = await axiosSecure.patch(`/users/update/${email}`, {
        role,
        status,
      });
      return data;
    },
    onSuccess: () => {
      refetch();
      toast.success("User role updated successfully!");
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  const handleRoleChange = (email, role, status) => {
    updateUserRole.mutate({ email, role, status });
  };

  const roleOptions = [
    { value: '', label: 'All Roles' },
    { value: 'tourist', label: 'Tourist' },
    { value: 'guide', label: 'Guide' },
    { value: 'admin', label: 'Admin' },
  ];

  // Custom styles for React Select
  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: '0.25rem 0.5rem',
      borderRadius: '0.75rem',
      borderColor: state.isFocused ? '#145d5e' : '#e5e7eb',
      boxShadow: state.isFocused ? '0 0 0 1px #145d5e' : 'none',
      '&:hover': { borderColor: '#145d5e' },
      backgroundColor: '#F8F9FA'
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#145d5e' : state.isFocused ? '#E8F3F1' : 'white',
      color: state.isSelected ? 'white' : '#374151',
      cursor: 'pointer'
    })
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans flex flex-col">
      <Helmet>
        <title>Shadow Tourist || Manage Users</title>
      </Helmet>

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold font-serif text-[#145d5e] mb-2">Manage Users</h2>
        <p className="text-gray-500">Monitor and update user roles and permissions.</p>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between mb-8 relative z-20">
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            className="w-full pl-11 pr-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#145d5e] transition-all text-gray-800 placeholder-gray-400"
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3 min-w-[200px] z-30">
          <Select
            options={roleOptions}
            onChange={setRole}
            placeholder="Filter by role"
            styles={customSelectStyles}
            isClearable
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[30px] shadow-lg shadow-[#145d5e]/5 border border-gray-100 overflow-hidden flex-grow flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead>
              <tr className="bg-[#145d5e] text-white">
                <th className="px-6 py-4 font-semibold text-sm tracking-wide">#</th>
                <th className="px-6 py-4 font-semibold text-sm tracking-wide">Name</th>
                <th className="px-6 py-4 font-semibold text-sm tracking-wide">Email</th>
                <th className="px-6 py-4 font-semibold text-sm tracking-wide text-center">Role</th>
                <th className="px-6 py-4 font-semibold text-sm tracking-wide text-center">Status</th>
                <th className="px-6 py-4 font-semibold text-sm tracking-wide text-center" colSpan="2">Assign Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#E8F3F1]/50 transition-colors duration-200">
                  <td className="px-6 py-4 text-gray-500 text-sm">{(currentPage * itemsPerPage) + idx + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{item.name}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{item.email}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${item.role === 'admin' ? 'bg-[#f9a826]/20 text-[#d97706]' :
                      item.role === 'guide' ? 'bg-[#145d5e]/10 text-[#145d5e]' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                      {item.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">{item.status || 'Active'}</td>
                  <td className="px-3 py-4 text-right">
                    <button
                      className="px-4 py-2 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all w-full min-w-[100px] bg-[#E8F3F1] text-[#145d5e] hover:bg-[#145d5e] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => handleRoleChange(item.email, "guide", "Verified")}
                      disabled={item.role === 'guide'}
                    >
                      <FaUserTie /> Guide
                    </button>
                  </td>
                  <td className="px-3 py-4 text-left">
                    <button
                      className="px-4 py-2 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all w-full min-w-[100px] bg-orange-50 text-brand-secondary hover:bg-brand-secondary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => handleRoleChange(item.email, "admin", "Verified")}
                      disabled={item.role === 'admin'}
                    >
                      <FaUserShield /> Admin
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="7" className="px-6 py-10 text-center text-gray-500">
                    No users found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pages.length > 1 && (
          <div className="mt-auto p-6 border-t border-gray-100 bg-gray-50/50 flex justify-center items-center gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-white border border-gray-200 text-gray-600 hover:bg-[#E8F3F1] hover:text-[#145d5e] hover:border-[#145d5e] transition-colors disabled:opacity-50"
            >
              «
            </button>
            {pages.map((page, idx) => (
              <button
                onClick={() => setCurrentPage(page)}
                key={idx}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${currentPage === page
                  ? 'bg-[#145d5e] text-white shadow-md'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-[#E8F3F1] hover:text-[#145d5e] hover:border-[#145d5e]'
                  }`}
              >
                {page + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === pages.length - 1}
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-white border border-gray-200 text-gray-600 hover:bg-[#E8F3F1] hover:text-[#145d5e] hover:border-[#145d5e] transition-colors disabled:opacity-50"
            >
              »
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUser;
