// pages/_app.js
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Head from 'next/head';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Detrator Assignment</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
