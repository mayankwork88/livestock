import React from 'react';
import { Stack, Typography, Box, Paper} from '@mui/material';
import { TypographySecondary } from './themeComponents';


const ParameterCard = ({label, time, value, icon, iconBg, valueColor}) => {
  return (
    <Paper className='flex-row-center border-1-gray' sx={{px:2,py:1, gap:'20px', flexGrow:1}}>
        <Box className='flex-row-center border-circle' sx={{width:50, height:50, background:`${iconBg}`}}>
           {icon}
        </Box>
        <Box  sx={{flexGrow:1}}>
        <Stack direction="row" justifyContent='space-between'>
            <TypographySecondary className='flex-row-center' sx={{fontSize:'1.8rem', color:'#696969'}}>{label}</TypographySecondary>
            <TypographySecondary className='flex-row-center'  sx={{fontSize:'1.2rem', color:'#696969', textAlign:'right'}}>{time}</TypographySecondary>
        </Stack>
        <Typography className={`${valueColor}`} sx={{fontSize:'2.5rem', fontWeight:'bolder'}}>{value}</Typography>
        </Box>
    </Paper>
  );
}

export default ParameterCard;
