import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button, Typography } from '@mui/material'
function OauthLoginButton(props) {
  const { name } = props
  return (
    <Button variant="info" sx={{ color: 'black', padding: '1rem 0' }}>
      <Typography
        sx={{ typography: { xs: 'h6', md: 'h5' } }}
        display="flex"
        alignItems="center"
      >
        {name === 'Google' ? <FcGoogle fontSize={35} /> : <FaGithub fontSize={35} />}
        Login with {name === 'Google' ? 'Google' : 'Github'}
      </Typography>
    </Button>
  )
}

export default OauthLoginButton
