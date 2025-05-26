import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { LoginScreen } from './components/login-screen'
import { SignupScreen } from './components/signup-screen'
import { AppListScreen } from './components/app-list-screen'
import { AppDetailScreen } from './components/app-detail-screen'
import { PostAppScreen } from './components/post-app-screen'
import { ProfileEditScreen } from './components/profile-edit-screen'
import { DashboardScreen } from './components/dashboard-screen'

// テーマの作成
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

function App() {
  const handleNavigate = (screen: string) => {
    // ナビゲーション処理は必要に応じて実装
    console.log('Navigate to:', screen)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container 
          maxWidth="lg" 
          sx={{ 
            minHeight: '100vh',
            py: 4,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Routes>
            <Route path="/login" element={<LoginScreen onLogin={() => {}} onNavigateToSignup={() => {}} />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/apps" element={<AppListScreen />} />
            <Route path="/apps/:id" element={<AppDetailScreen />} />
            <Route path="/apps/new" element={<PostAppScreen />} />
            <Route path="/profile/edit" element={<ProfileEditScreen />} />
            <Route path="/dashboard" element={<DashboardScreen onNavigate={handleNavigate} />} />
            <Route path="/" element={<DashboardScreen onNavigate={handleNavigate} />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  )
}

export default App 