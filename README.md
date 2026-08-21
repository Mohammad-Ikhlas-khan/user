# User Management System

A full-stack User Management System built with React, Spring Boot, and PostgreSQL.

## Tech Stack

- React + Vite
- Tailwind CSS
- Axios
- Java 21
- Spring Boot
- Spring Data JPA
- PostgreSQL

## Features

- Create user
- View users
- Update user
- Delete user
- Pagination
- REST APIs

## Setup

### Clone Repository
```bash
git clone https://github.com/Mohammad-Ikhlas-khan/user.git
cd user
```

### Backend
```bash
cd user
./mvnw spring-boot:run
```
# Windows
```bash
.\mvnw.cmd spring-boot:run
```
### Frontend
```bash
cd frontend
npm install
npm run dev
```
## Database
Create a PostgreSQL database and configure:
user/src/main/resources/application.properties

```bash
spring.datasource.url=jdbc:postgresql://localhost:5432/userdb
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```
## API Endpoints
```bash
POST   /users/create
GET    /users
GET    /user/{id}
PUT    /user/{id}
DELETE /user/{id}
```
## Author

Mohammad Ikhlas Khan
