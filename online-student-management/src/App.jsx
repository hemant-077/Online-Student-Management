import { Routes, Route } from "react-router-dom";

import Navbar from "./components/utils/Navbar";
import Home from "./components/pages/Home";
import StudentList from "./components/pages/StudentList";
import AddStudent from "./components/pages/AddStudent";
import EditStudent from "./components/pages/EditStudent";
import StudentProfile from "./components/pages/StudentProfile";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen bg-gray-500">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-students" element={<StudentList />} />
          <Route path="/add-students" element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
          <Route path="/student-profile/:id" element={<StudentProfile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
