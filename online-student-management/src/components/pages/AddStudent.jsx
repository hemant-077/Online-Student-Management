import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddStudent = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    parentEmail: "",
    phone: "",
    department: "",
    rollNo: "",
    attendance: "",
    grade: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Roll Number → only numbers, max 8 digits
    if (name === "rollNo") {
      if (!/^\d*$/.test(value) || value.length > 8) return;
    }

    // Attendance → 0 to 100 ONLY (type hi nahi hoga)
    if (name === "attendance") {
      if (value === "") {
        setStudent({ ...student, attendance: "" });
        return;
      }
      if (Number(value) < 0 || Number(value) > 100) return;
    }

    // CGPA → max 10
    if (name === "grade") {
      if (value === "") {
        setStudent({ ...student, grade: "" });
        return;
      }
      if (Number(value) < 0 || Number(value) > 10) return;
    }

    setError("");
    setStudent({ ...student, [name]: value });
  };

  const saveStudent = async (e) => {
    e.preventDefault();

    // Final validations (double safety)
    if (student.rollNo.length !== 8) {
      return setError("Roll Number must be exactly 8 digits");
    }

    if (student.attendance !== "" && student.attendance > 100) {
      return setError("Attendance cannot be more than 100%");
    }

    if (student.grade !== "" && student.grade > 10) {
      return setError("CGPA cannot be more than 10");
    }

    if (!student.email || !student.parentEmail) {
      return setError("Student & Parent email username is required");
    }

    const payload = {
      ...student,
      attendance:
        student.attendance === "" ? null : Number(student.attendance),
      grade: student.grade === "" ? null : Number(student.grade),
      email: `${student.email}@gmail.com`,
      parentEmail: `${student.parentEmail}@gmail.com`,
    };

    try {
      await axios.post("http://localhost:8080/students", payload);
      navigate("/view-students");
    } catch (err) {
      alert(err.response?.data?.error || "Failed to save student");
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-xl p-8">

        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Add Student Record
        </h2>

        {error && (
          <div className="mb-4 p-3 rounded bg-red-600/20 text-red-400 text-center">
            {error}
          </div>
        )}

        <form onSubmit={saveStudent} className="space-y-6">

          {/* Student Details */}
          <h4 className="text-lg font-semibold text-gray-300 border-b border-gray-700 pb-2">
            Student Details
          </h4>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="First Name"
              required
              onChange={handleInputChange}
              className="input"
            />

            <input
              name="lastName"
              placeholder="Last Name"
              required
              onChange={handleInputChange}
              className="input"
            />
          </div>

          {/* Student Email */}
          <div className="flex">
            <input
              name="email"
              placeholder="Student email username"
              required
              onChange={handleInputChange}
              className="input rounded-r-none"
            />
            <span className="px-4 flex items-center bg-gray-800 border border-l-0 border-gray-700 rounded-r-lg text-gray-400">
              @gmail.com
            </span>
          </div>

          {/* Parent Email */}
          <div className="flex">
            <input
              name="parentEmail"
              placeholder="Parent email username"
              required
              onChange={handleInputChange}
              className="input rounded-r-none"
            />
            <span className="px-4 flex items-center bg-gray-800 border border-l-0 border-gray-700 rounded-r-lg text-gray-400">
              @gmail.com
            </span>
          </div>

          <input
            name="phone"
            placeholder="Contact Number"
            onChange={handleInputChange}
            className="input"
          />

          {/* Academic Info */}
          <h4 className="text-lg font-semibold text-gray-300 border-b border-gray-700 pb-2">
            Academic Information
          </h4>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Roll No */}
            <input
              name="rollNo"
              placeholder="Roll Number (8 digits)"
              value={student.rollNo}
              maxLength={8}
              required
              onChange={handleInputChange}
              className="input"
            />

            {/* Department Dropdown */}
            <select
              name="department"
              required
              onChange={handleInputChange}
              className="input"
            >
              <option value="">Select Course / Department</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="BTech">B.Tech</option>
              <option value="MTech">M.Tech</option>
              <option value="BSc">B.Sc</option>
              <option value="MSc">M.Sc</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Attendance */}
            <input
              type="number"
              name="attendance"
              placeholder="Attendance % (0 - 100)"
              min={0}
              max={100}
              value={student.attendance}
              onChange={handleInputChange}
              className="input"
            />

            {/* CGPA */}
            <input
              type="number"
              name="grade"
              placeholder="CGPA (0 - 10)"
              min={0}
              max={10}
              step="0.1"
              value={student.grade}
              onChange={handleInputChange}
              className="input"
            />
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition font-medium"
            >
              Save Student
            </button>

            <Link
              to="/view-students"
              className="bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg text-center transition font-medium"
            >
              Cancel
            </Link>
          </div>

        </form>
      </div>
    </section>
  );
};

export default AddStudent;
