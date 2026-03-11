# 🎓 Online Student Management System

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/SpringBoot-Backend-brightgreen)
![React](https://img.shields.io/badge/React-Frontend-blue)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue)
![JWT](https://img.shields.io/badge/JWT-Authentication-yellow)

A **Full Stack Student Management System** built using **Spring Boot (Backend) and React (Frontend)**.

This system allows administrators to manage student records including **adding, updating, deleting, and viewing students**.

---

# 🚀 Features

### Backend

✅ RESTful APIs  
✅ Student CRUD Operations  
✅ Spring Boot Architecture  
✅ Database Integration (MySQL)  
✅ Layered Architecture (Controller → Service → Repository)

### Frontend

✅ Student Dashboard  
✅ Add Student  
✅ Edit Student  
✅ Delete Student  
✅ API Integration with Backend

---

# 🛠 Tech Stack

| Technology | Purpose |
|-----------|--------|
| Java | Backend Programming |
| Spring Boot | Backend Framework |
| Spring Data JPA | ORM |
| MySQL | Database |
| React | Frontend |
| Axios | API Calls |
| Maven | Dependency Management |

---

# 📂 Project Structure

```bash
Online-Student-Management-System
│
├── backend (spring-boot-back-end)
│   │
│   └── src/main/java/com/student
│       │
│       ├── controller
│       ├── service
│       ├── repository
│       ├── model
│       └── StudentManagementApplication.java
│
└── frontend (online-student-management)
    │
    ├── src
    │   ├── components
    │   ├── pages
    │   └── App.js
    │
    └── package.json
```

---

# ⚙️ Backend Setup (Spring Boot)

## Clone Repository

```bash
git clone https://github.com/hemant-077/online-student-management-system.git
```

Navigate to backend folder

```bash
cd spring-boot-back-end
```

---

## Configure Database

Update `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/student_management
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## Run Backend

```bash
mvn spring-boot:run
```

Backend will run at

```
http://localhost:8080
```

---

# 💻 Frontend Setup (React)

Navigate to frontend folder

```bash
cd online-student-management
```

Install dependencies

```bash
npm install
```

Run frontend

```bash
npm start
```

Frontend will run at

```
http://localhost:3000
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | /students | Get all students |
| GET | /students/{id} | Get student by ID |
| POST | /students | Add new student |
| PUT | /students/{id} | Update student |
| DELETE | /students/{id} | Delete student |

---

# 🧪 API Testing

You can test APIs using:

- Postman  
- Thunder Client (VS Code)

---

# 👨‍💻 Author

**Hemant Chhoker**

GitHub  
https://github.com/hemant-077

---

⭐ If you like this project please give it a **star on GitHub**.
