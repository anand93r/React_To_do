import { AppBar, Box, Toolbar, Typography} from '@mui/material'
import React from 'react'

const Todo = () => {
    
    
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                    To do App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>

    
    
    </div>
  )
}

export default Todo
