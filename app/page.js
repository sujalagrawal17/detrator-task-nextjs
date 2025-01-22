// pages/index.js
import { Grid, Paper } from '@mui/material';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f5f5f5',
            }}
          >
            Left Column
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f5f5f5',
            }}
          >
            Right Column
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
