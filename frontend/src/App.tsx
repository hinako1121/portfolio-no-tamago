import { useState } from 'react'
import { Container, Typography, Box } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Portfolio
        </Typography>
        <Typography variant="body1">
          Welcome to your portfolio application!
        </Typography>
      </Box>
    </Container>
  )
}

export default App 