import { Grid, Typography } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { Emoji, EmojiStyle } from 'emoji-picker-react'

function Poster() {
  return (
    <Grid
      item
      md={6}
      sx={{
        display: { xs: 'none', md: 'flex' },
        height: '100vh',
        background: 'linear-gradient(to right, #6C4AB6, #8D72E1, #8D9EFF, #B9E0FF)',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Grid
        sx={{
          height: { md: '50vw', lg: '65vh' },
          width: { md: '40vw', lg: '50vw' },
          maxWidth: '44vw',
          backgroundColor: '#ffffff1f',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '1.25vw'
        }}
      >
        <Typography sx={{ typography: { md: 'h2', lg: 'h1' } }} gutterBottom>
          <PlayArrowIcon sx={{ typography: { md: 'h3', lg: 'h2' } }} />
          Digital platform for distance <span style={{ color: 'black' }}>Working</span>
        </Typography>
        <Typography sx={{ typography: { md: 'h6', lg: 'h5' } }} display="flex" alignItems="center">
          <Emoji unified="1f4aa" emojiStyle={EmojiStyle.APPLE} size={20} /> Work Smart
          Don't Work Hard{' '}
          <Emoji unified="1f4aa" emojiStyle={EmojiStyle.APPLE} size={20} />
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Poster
