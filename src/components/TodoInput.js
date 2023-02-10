import { Button} from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TodoInput = ({ todo, setTodo, addTodo }) => {
    return (
      <div >
         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Enter a task" variant="outlined" value={todo}
      
          onChange={(e) => {
            setTodo(e.target.value);
          }} />
    
        <Button variant="contained" onClick={addTodo}>
          Add
        </Button>

        </Box>
        
      </div>
    );
  };
  
  export default TodoInput;