'use client';

import { AppBar, Toolbar, Typography, IconButton, Box, TextField, InputAdornment, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'; // Correct import

export default function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Hook to check small screen

  return (
    <AppBar position="static" color="transparent" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Brand Name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Brand Name
        </Typography>

        {/* Small Screen */}
        {isSmallScreen ? (
          <IconButton color="primary">
            <Avatar sx={{ bgcolor: theme.palette.primary.main }}>B</Avatar>
          </IconButton>
        ) : (
          // Large Screen
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              placeholder="Search..."
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            
            <Avatar sx={{ bgcolor: theme.palette.primary.main }}>J</Avatar>
            <Typography variant="body1">John</Typography>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
