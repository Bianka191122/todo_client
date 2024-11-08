import { Button } from '@mui/material'
import React from 'react'

export const Logout = ({ setIsLoggedIn }) => {
  return (
    <Button
      variant="contained"
      sx={{ position: "fixed", top: "20px", right: "20px" }}
      onClick={() => setIsLoggedIn(false)}
    >
      Logout
    </Button>
  )
}