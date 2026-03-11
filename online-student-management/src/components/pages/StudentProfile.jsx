import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const StudentProfile = () => {
  const { id } = useParams();

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    parentEmail: "",
    phone: "",
    department: "",
    rollNo: "",
    attendance: null,
    grade: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStudent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/students/student/${id}`
        );
        setStudent(res.data);
      } catch (error) {
        console.error("Failed to load student", error);
      } finally {
        setLoading(false);
      }
    };

    loadStudent();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-400 text-lg">
        Loading student profile...
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid lg:grid-cols-4 gap-6">

        {/* LEFT PROFILE CARD */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-xl p-6 text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt="avatar"
            className="w-32 h-32 mx-auto rounded-full border-4 border-gray-700 mb-4"
          />

          <h3 className="text-xl font-semibold text-white">
            {student.firstName} {student.lastName}
          </h3>

          <p className="text-gray-400 mt-1">
            {student.department}
          </p>

          <p className="text-gray-400 mt-1">
            Roll No: <span className="text-white font-medium">{student.rollNo}</span>
          </p>

          <div className="flex justify-center gap-3 mt-6">
            <button className="px-4 py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition">
              Call
            </button>
            <button className="px-4 py-2 rounded-lg border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition">
              Message
            </button>
          </div>
        </div>

        {/* RIGHT DETAILS CARD */}
        <div className="lg:col-span-3 bg-gray-900 border border-gray-700 rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Student Details
          </h2>

          <ProfileRow label="First Name" value={student.firstName} />
          <ProfileRow label="Last Name" value={student.lastName} />
          <ProfileRow label="Email" value={student.email} />
          <ProfileRow
            label="Parent Email"
            value={student.parentEmail || "N/A"}
          />
          <ProfileRow label="Phone" value={student.phone || "N/A"} />
          <ProfileRow label="Department" value={student.department} />
          <ProfileRow label="Roll Number" value={student.rollNo} />
          <ProfileRow
            label="Attendance"
            value={
              student.attendance !== null
                ? `${student.attendance}%`
                : "N/A"
            }
          />
          <ProfileRow label="Grade" value={student.grade || "N/A"} />

          <div className="mt-8">
            <Link
              to="/view-students"
              className="inline-block px-6 py-3 rounded-lg border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition font-medium"
            >
              ← Back to Students
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

/* Reusable Row */
const ProfileRow = ({ label, value }) => (
  <div className="grid grid-cols-3 gap-4 py-3 border-b border-gray-700">
    <div className="text-gray-400 font-medium">{label}</div>
    <div className="col-span-2 text-gray-200">{value}</div>
  </div>
);

export default StudentProfile;
