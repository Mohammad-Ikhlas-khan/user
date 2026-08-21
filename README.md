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
To create(copy structure of) database and table in PostgreSQL run the following Queries in PG Admin 4:
```bash
CREATE DATABASE IF NOT EXITS user_db;
USE user_details;

CREATE TABLE user_details ( id SERIAL PRIMARY KEY, name VARCHAR(255), fatherName VARCHAR(255), email VARCHAR(255), phoneNo VARCHAR(20), qualification VARCHAR(255), nationality VARCHAR(50), dob DATE, gender VARCHAR(50), address VARCHAR(500), city VARCHAR(100), state VARCHAR(100), pincode VARCHAR(20), password VARCHAR(255) );
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
