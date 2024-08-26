import * as React from 'react';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
export default function StatBar({ label, value, color }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="body" color="text.secondary" sx={{ fontWeight: 'bold' }}>{label}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: 1 }}>
                <Box sx={{ flexGrow: 1, mr: 1 }}>
                    <LinearProgress variant="determinate" color={color} value={value} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body">{`${Math.round(value)}%`}</Typography>
                </Box>
            </Box>
        </Box>
    );
}

