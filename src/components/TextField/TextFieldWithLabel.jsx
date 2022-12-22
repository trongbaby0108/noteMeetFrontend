import { TextField } from '@mui/material'
import React from 'react'

function TextFieldWithLabel(props) {
  const { name, size, type } = props
  console.log(size)
  return (
    <TextField
      id={name}
      name={name}
      label={name}
      type={type}
      variant="standard"
      autoComplete={name}
      inputProps={{ style: { fontSize: '1.75rem' } }}
      InputLabelProps={{ style: { fontSize: '1.5rem' } }}
    />
  )
}

export default TextFieldWithLabel
