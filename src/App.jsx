import AllRoutes from './pages/AllRoutes';
import { AuthProvider } from './AuthContext'; 

export default function App() {
  return (
    <AuthProvider>  
      <AllRoutes />
    </AuthProvider>
  );
}
