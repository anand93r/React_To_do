import { Button, Stack } from '@mui/material'
import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const TodoList = ({ list, remove }) => {
    return (
      <>
 

        {list?.length > 0 ? (
          <ul>
            {list.map((entry, index) => (
              <div>
                <Stack direction="row" spacing={2}>
                <ListItemButton component="a" href="#simple-list">
                <ListItemText key={index}> {entry} </ListItemText>
                </ListItemButton>
                

        
         <Button variant="outlined"
            onClick={() => {
        remove(entry);
      }}>
        Delete
      </Button>
      </Stack>
                
              </div>
            ))}
          </ul>
        ) : (
          <div>
            <p>No task found</p>
          </div>
        )}
      </>
    );
  };
  
  export default TodoList;