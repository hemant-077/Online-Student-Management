package com.springReactApp2.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.NaturalId;

@Entity
@Table(name = "students")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @NaturalId(mutable = true)
    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String department;

    // 🔽 NEW FIELDS (Frontend + Features match)

    @Column(nullable = false, unique = true)
    private String rollNo;

    private String phone;

    private String parentEmail;

    private Double attendance;   // percentage

    private String grade;        // A, B, CGPA
}
