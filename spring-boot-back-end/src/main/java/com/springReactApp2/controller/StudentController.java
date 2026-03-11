package com.springReactApp2.controller;

import com.springReactApp2.model.Student;
import com.springReactApp2.service.IStudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {

    private final IStudentService studentService;

    // ✅ GET ALL STUDENTS
    @GetMapping
    public ResponseEntity<List<Student>> getStudents() {
        return ResponseEntity.ok(studentService.getStudents());
    }

    // ✅ ADD STUDENT
    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        return ResponseEntity.ok(studentService.addStudent(student));
    }

    // ✅ UPDATE STUDENT
    @PutMapping("/update/{id}")
    public ResponseEntity<Student> updateStudent(
            @RequestBody Student student,
            @PathVariable Long id) {
        return ResponseEntity.ok(studentService.updateStudent(student, id));
    }

    // ✅ DELETE STUDENT
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }

    // ✅ GET STUDENT BY ID
    @GetMapping("/student/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        return ResponseEntity.ok(studentService.getStudentById(id));
    }
}
