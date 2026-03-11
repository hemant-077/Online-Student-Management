import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../utils/Search";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const res = await axios.get("http://localhost:8080/students");
      setStudents(res.data);
    } catch (error) {
      console.error("Error loading students", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      await axios.delete(`http://localhost:8080/students/delete/${id}`);
      loadStudents();
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      
      {/* Search */}
      <div className="mb-6">
        <Search search={search} setSearch={setSearch} />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-700">
        <table className="w-full text-sm text-left text-gray-300 bg-gray-900">
          
          {/* Header */}
          <thead className="text-xs uppercase bg-gray-800 text-gray-400">
            <tr>
              <th className="px-4 py-3 text-center">#</th>
              <th className="px-4 py-3">First Name</th>
              <th className="px-4 py-3">Last Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Department</th>
              <th className="px-4 py-3 text-center" colSpan="3">
                Actions
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {students
              .filter((st) =>
                `${st.firstName} ${st.lastName} ${st.email}`
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((student, index) => (
                <tr
                  key={student.id}
                  className="border-b border-gray-700 hover:bg-gray-800 transition"
                >
                  <td className="px-4 py-3 text-center">{index + 1}</td>
                  <td className="px-4 py-3">{student.firstName}</td>
                  <td className="px-4 py-3">{student.lastName}</td>
                  <td className="px-4 py-3">{student.email}</td>
                  <td className="px-4 py-3">{student.department}</td>

                  {/* View */}
                  <td className="px-2 py-3 text-center">
                    <Link
                      to={`/student-profile/${student.id}`}
                      className="inline-flex items-center justify-center p-2 rounded bg-blue-600 hover:bg-blue-700 transition"
                    >
                      <FaEye />
                    </Link>
                  </td>

                  {/* Edit */}
                  <td className="px-2 py-3 text-center">
                    <Link
                      to={`/edit-student/${student.id}`}
                      className="inline-flex items-center justify-center p-2 rounded bg-yellow-500 hover:bg-yellow-600 text-black transition"
                    >
                      <FaEdit />
                    </Link>
                  </td>

                  {/* Delete */}
                  <td className="px-2 py-3 text-center">
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="inline-flex items-center justify-center p-2 rounded bg-red-600 hover:bg-red-700 transition"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}

            {students.length === 0 && (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-500"
                >
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StudentList;
