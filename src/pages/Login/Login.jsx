import { Box, Button, Divider, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Emoji, EmojiStyle } from 'emoji-picker-react'
import logo from '../../assets/images/logo.png'
import OauthLoginButton from '../../components/OauthLoginButton/OauthLoginButton'
import Poster from '../../components/Login/Poster'
import TextFieldWithLabel from '../../components/TextField/TextFieldWithLabel'
function Login() {
  return (
    <>
      <Box>
        <Grid container spacing="0">
          <Poster />
          <Grid
            item
            md={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              background: {
                xs: 'linear-gradient(to right, #6C4AB6, #8D72E1, #8D9EFF, #B9E0FF)',
                md: 'white'
              }
            }}
          >
            <Grid
              display="flex"
              flexDirection="column"
              sx={{
                height: '100vh',
                width: { xs: '100vw', md: '50vw' },
                backgroundColor: 'white',
                padding: { md: '15vh 2.5vw', xs: '5vh 10vw' }
              }}
            >
              <img
                src={logo}
                alt="logo"
                srcSet=""
                loading="lazy"
                width={75}
                style={{ paddingBottom: '6vh' }}
              />
              <Typography variant="h3">
                Hey, hello!{' '}
                <Emoji unified="1f44b" emojiStyle={EmojiStyle.APPLE} size={35} />
              </Typography>
              <Typography variant="caption" color="#b9a9a9" gutterBottom>
                Enter the information you entered while registering!
              </Typography>
              <Toolbar />
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { width: '100%' }
                }}
              >
                <TextFieldWithLabel name="Email" size="3rem" type="text" />
                <TextFieldWithLabel name="Password" size="3rem" type="password" />
                <Button
                  type="submit"
                  sx={{
                    width: '100%',
                    margin: '1.5rem 0',
                    padding: '1rem 0',
                    color: 'white',
                    fontSize: '1.25rem',
                    background:
                      'linear-gradient(to right, #6C4AB6, #8D72E1, #8D9EFF, #B9E0FF)'
                  }}
                >
                  Login
                </Button>
              </Box>
              <Divider sx={{ margin: '2vh 0' }} />
              <OauthLoginButton name="Google" />
              <OauthLoginButton name="Github" />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
