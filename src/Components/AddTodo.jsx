import { Button, TextField } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { addTodo } from '../utils'
import { useState } from 'react'

export const AddTodo = () => {
    const [newTask, setNewTask] = useState('')

    const queryClient = useQueryClient()

    const handleAdd = async () => {
        await addTodo({ task: newTask })
        queryClient.invalidateQueries('todos')
        setNewTask('')
    }
    return (
        <div className='addtodo'>
            <TextField className='textfield' id='standard' label="Add new task..." variant='standard'
                sx={{ backgroundColor: "none", margin: "10px" }}
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                multiline
            />
            <Button
                className='button'
                sx={{margin: '20px'}}
                variant='contained'
                onClick={handleAdd}
                disabled={newTask.length == 0}
            >
                Add
            </Button>
        </div>
    )
}