import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const { firstName, lastName, email, department } = student;

  useEffect(() => {
    loadStudent();
  }, [id]); // ✅ FIXED

  const loadStudent = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/students/student/${id}`
      );
      setStudent(res.data);
    } catch (error) {
      console.error("Failed to load student", error);
    }
  };

  const handleInputChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const updateStudent = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:8080/students/update/${id}`,
        student
      );
      navigate("/view-students");
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-xl p-8">

        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Edit Student
        </h2>

        <form onSubmit={updateStudent} className="space-y-6">

          {/* First Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              required
              onChange={handleInputChange}
              className="input"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              required
              onChange={handleInputChange}
              className="input"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={handleInputChange}
              className="input"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={department}
              required
              onChange={handleInputChange}
              className="input"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition font-medium"
            >
              Save Changes
            </button>

            <Link
              to="/view-students"
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg text-center transition font-medium"
            >
              Cancel
            </Link>
          </div>

        </form>
      </div>
    </section>
  );
};

export default EditStudent;
