# Elearning Platform

A comprehensive e-learning platform built with React.js frontend and Node.js backend, featuring course management, user authentication, and payment integration.

## 🚀 Features

### Frontend (React.js)
- **User Authentication**: Login, registration, password reset, and email verification
- **Course Management**: Browse, search, and enroll in courses
- **Admin Dashboard**: Manage courses, users, and platform content
- **Responsive Design**: Mobile-friendly interface with modern UI/UX
- **Course Study**: Interactive learning interface with progress tracking
- **Payment Integration**: Secure payment processing for course enrollment

### Backend (Node.js)
- **RESTful API**: Comprehensive API endpoints for all platform features
- **User Management**: Authentication, authorization, and user profiles
- **Course System**: CRUD operations for courses, lectures, and content
- **Payment Processing**: Integration with payment gateways
- **File Upload**: Support for course materials and user uploads
- **Email Services**: Automated email notifications and verification

## 🛠️ Tech Stack

### Frontend
- React.js 18
- Vite (Build tool)
- CSS3 with custom styling
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- JWT for authentication
- Multer for file uploads
- Nodemailer for email services

## 📁 Project Structure

```
Elearning-Platform/
├── frontend/                 # React.js frontend application
│   ├── src/
│   │   ├── admin/           # Admin panel components
│   │   ├── components/      # Reusable UI components
│   │   ├── context/         # React context providers
│   │   ├── pages/           # Page components
│   │   └── main.jsx         # Application entry point
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Node.js backend application
│   ├── controllers/         # Route controllers
│   ├── database/            # Database configuration
│   ├── middlewares/         # Custom middleware functions
│   ├── models/              # Database models
│   ├── routes/              # API route definitions
│   ├── uploads/             # File upload directory
│   └── index.js             # Server entry point
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohitchaudhary007/Elearning-Platform.git
   cd Elearning-Platform
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   
   # Create .env file with your configuration
   cp .env.backup .env
   # Edit .env with your database and email credentials
   
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

## 📚 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/forgot-password` - Password reset request
- `POST /api/user/reset-password` - Password reset

### Courses
- `GET /api/course/all` - Get all courses
- `GET /api/course/:id` - Get course by ID
- `POST /api/course/create` - Create new course (Admin)
- `PUT /api/course/:id` - Update course (Admin)
- `DELETE /api/course/:id` - Delete course (Admin)

### Admin
- `GET /api/admin/users` - Get all users (Admin)
- `GET /api/admin/courses` - Get all courses (Admin)
- `PUT /api/admin/user/:id` - Update user role (Admin)

## 🎯 Key Features

- **User Roles**: Student and Admin roles with different permissions
- **Course Enrollment**: Secure payment processing for course access
- **Progress Tracking**: Monitor learning progress and completion
- **Content Management**: Admin tools for managing courses and users
- **Responsive Design**: Works seamlessly on all devices
- **Security**: JWT authentication, input validation, and secure routes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohit Chaudhary**
- GitHub: [@mohitchaudhary007](https://github.com/mohitchaudhary007)

## 🙏 Acknowledgments

- React.js community for the amazing framework
- Node.js ecosystem for robust backend development
- MongoDB for flexible database solutions
- All contributors and supporters of this project

---

⭐ Star this repository if you find it helpful!
