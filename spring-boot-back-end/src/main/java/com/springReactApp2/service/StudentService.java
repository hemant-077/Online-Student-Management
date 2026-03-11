package com.springReactApp2.service;

import com.springReactApp2.exception.StudentAlreadyExistsException;
import com.springReactApp2.exception.StudentNotFoundException;
import com.springReactApp2.model.Student;
import com.springReactApp2.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService implements IStudentService {

    private final StudentRepository studentRepository;

    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student addStudent(Student student) {

        if (studentRepository.findByEmail(student.getEmail()).isPresent()) {
            throw new StudentAlreadyExistsException(
                    "Email already exists: " + student.getEmail()
            );
        }

        if (studentRepository.findByRollNo(student.getRollNo()).isPresent()) {
            throw new StudentAlreadyExistsException(
                    "Roll number already exists: " + student.getRollNo()
            );
        }

        return studentRepository.save(student);
    }

    @Override
    public Student updateStudent(Student student, Long id) {

        return studentRepository.findById(id).map(existingStudent -> {

            // ✅ Email check (ignore same student)
            studentRepository.findByEmail(student.getEmail())
                    .filter(st -> !st.getId().equals(id))
                    .ifPresent(st -> {
                        throw new StudentAlreadyExistsException(
                                "Email already exists: " + student.getEmail()
                        );
                    });

            existingStudent.setFirstName(student.getFirstName());
            existingStudent.setLastName(student.getLastName());
            existingStudent.setEmail(student.getEmail());
            existingStudent.setDepartment(student.getDepartment());

            // ✅ New fields update
            existingStudent.setRollNo(student.getRollNo());
            existingStudent.setPhone(student.getPhone());
            existingStudent.setParentEmail(student.getParentEmail());
            existingStudent.setAttendance(student.getAttendance());
            existingStudent.setGrade(student.getGrade());

            return studentRepository.save(existingStudent);

        }).orElseThrow(() ->
                new StudentNotFoundException(
                        "Sorry, this student could not be found"
                )
        );
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() ->
                        new StudentNotFoundException(
                                "Sorry, no student found with the Id: " + id
                        )
                );
    }

    @Override
    public void deleteStudent(Long id) {
        if (!studentRepository.existsById(id)) {
            throw new StudentNotFoundException("Sorry, student not found");
        }
        studentRepository.deleteById(id);
    }
}
