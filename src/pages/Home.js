import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 2000,
          height: 700,
          borderRadius: 25,
          m: 3, 
        },
      }}
    >
      <Paper elevation={2} />
    </Box>
  );
}
