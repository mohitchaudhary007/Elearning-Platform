# Elearning Platform

A comprehensive e-learning platform built with React.js frontend and Node.js backend, featuring course management, user authentication, and payment integration.

## Features

- **User Authentication**: Login, registration, password reset, and email verification
- **Course Management**: Create, edit, and manage courses with lectures
- **Admin Dashboard**: Comprehensive admin panel for course and user management
- **Payment Integration**: Secure payment processing for course purchases
- **Progress Tracking**: Monitor learning progress and completion
- **Responsive Design**: Modern UI that works on all devices

## Tech Stack

### Frontend
- React.js
- Vite
- CSS3
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Multer for file uploads
- Nodemailer for email services

## Project Structure

```
Elearning-Platform/
├── backend/           # Node.js backend server
│   ├── controllers/   # Route controllers
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── middlewares/   # Custom middlewares
│   └── uploads/       # File uploads
├── frontend/          # React.js frontend
│   ├── src/
│   │   ├── admin/     # Admin dashboard components
│   │   ├── components/# Reusable components
│   │   ├── context/   # React context providers
│   │   └── pages/     # Page components
│   └── public/        # Static assets
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/mohitchaudhary007/Elearning-Platform.git
cd Elearning-Platform
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

4. Set up environment variables
```bash
cd ../backend
cp .env.example .env
# Edit .env with your configuration
```

5. Start the backend server
```bash
cd backend
npm start
```

6. Start the frontend development server
```bash
cd frontend
npm run dev
```

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

## API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/forgot-password` - Forgot password
- `POST /api/user/reset-password` - Reset password

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create new course (admin only)
- `GET /api/courses/:id` - Get course details
- `PUT /api/courses/:id` - Update course (admin only)

### Admin
- `GET /api/admin/users` - Get all users (admin only)
- `GET /api/admin/courses` - Get all courses (admin only)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Mohit Chaudhary**
- GitHub: [@mohitchaudhary007](https://github.com/mohitchaudhary007)

## Acknowledgments

- React.js community
- Node.js community
- MongoDB community
