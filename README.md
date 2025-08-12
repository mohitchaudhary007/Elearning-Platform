# E-Learning Platform

A full-stack e-learning platform built with React.js frontend and Node.js backend, featuring course management, user authentication, payment integration, and video streaming capabilities.

## 🚀 Features

### For Students
- User registration and authentication
- Browse and search courses
- Course enrollment and progress tracking
- Video lecture streaming
- Payment integration for course purchases
- User dashboard with learning progress
- Course reviews and ratings

### For Instructors/Admins
- Course creation and management
- Video upload and management
- User management
- Analytics and insights
- Payment tracking

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **Vite** - Build tool and development server
- **CSS3** - Styling
- **Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Multer** - File upload handling
- **Nodemailer** - Email functionality

## 📁 Project Structure

```
Elearning-Platform/
├── backend/                 # Backend server
│   ├── controllers/         # Route controllers
│   ├── database/           # Database configuration
│   ├── middlewares/        # Custom middlewares
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── uploads/            # File uploads
│   └── index.js            # Server entry point
├── frontend/               # React frontend
│   ├── src/
│   │   ├── admin/          # Admin dashboard components
│   │   ├── components/     # Reusable components
│   │   ├── context/        # React context providers
│   │   ├── pages/          # Page components
│   │   └── main.jsx        # App entry point
│   └── index.html
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

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
   ```

3. **Environment Configuration**
   ```bash
   cp env.example .env
   ```
   Edit `.env` file with your configuration:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL=your_email
   PASSWORD=your_email_password
   ```

4. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm start
   ```
   Server will run on `http://localhost:5000`

2. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

## 📝 API Endpoints

### Authentication
- `POST /api/v1/register` - User registration
- `POST /api/v1/login` - User login
- `POST /api/v1/logout` - User logout
- `POST /api/v1/forgotpassword` - Forgot password
- `POST /api/v1/resetpassword` - Reset password

### Courses
- `GET /api/v1/courses` - Get all courses
- `GET /api/v1/course/:id` - Get course by ID
- `POST /api/v1/course/create` - Create new course (Admin)
- `PUT /api/v1/course/:id` - Update course (Admin)
- `DELETE /api/v1/course/:id` - Delete course (Admin)

### User Management
- `GET /api/v1/me` - Get user profile
- `PUT /api/v1/me/update` - Update user profile
- `GET /api/v1/users` - Get all users (Admin)

## 🔧 Configuration

### Database
The application uses MongoDB. Make sure to:
1. Set up a MongoDB database
2. Update the `MONGODB_URI` in your `.env` file

### Email Service
For password reset functionality, configure your email service in the `.env` file.

### File Uploads
The application supports file uploads for course materials. Files are stored in the `backend/uploads/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohit Chaudhary**
- GitHub: [@mohitchaudhary007](https://github.com/mohitchaudhary007)

## 🙏 Acknowledgments

- React.js community
- Node.js community
- MongoDB documentation
- All contributors and supporters

---

⭐ If you find this project helpful, please give it a star!
