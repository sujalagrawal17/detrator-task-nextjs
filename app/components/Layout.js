// components/Layout.js
import { Container, Box } from '@mui/material';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
    </Box>
  );
}