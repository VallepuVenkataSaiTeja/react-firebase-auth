# React Firebase Auth

A simple React application that demonstrates Firebase authentication features including user login, registration, and profile management.

## Features

- User authentication with email and password
- User registration
- Protected routes (redirects to profile if logged in)
- Profile page for authenticated users
- Toast notifications for user feedback
- Responsive UI with Tailwind CSS

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Routing**: React Router DOM
- **Notifications**: React Toastify

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-firebase-auth.git
   cd react-firebase-auth
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore
   - Update the Firebase configuration in `src/components/firebase.jsx` with your project credentials

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (default Vite port)

## Usage

- **Login**: Enter your email and password to log in
- **Register**: Click on "Register" to create a new account
- **Profile**: View your profile after logging in
- The app automatically redirects authenticated users to the profile page

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview the production build

## Project Structure

```
src/
├── components/
│   ├── firebase.jsx      # Firebase configuration
│   ├── login.jsx         # Login component
│   ├── register.jsx      # Registration component
│   └── profile.jsx       # Profile component
├── App.jsx               # Main app component with routing
├── main.jsx              # App entry point
└── index.css             # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.