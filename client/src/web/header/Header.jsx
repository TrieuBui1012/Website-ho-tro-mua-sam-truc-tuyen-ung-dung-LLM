import { useState } from "react"
import { Box, Container } from "@mui/material"
import { TextField } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import Button from "@mui/material/Button"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import websosanhLogo from '../../assets/websosanh.svg'


function Header() {
    const [searchValue, setSearchValue] = useState('')
    return (
      <Box sx={{ 
        backgroundColor: '#207bc1',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <Container>
          <Box px={2} sx={{
            height: '65px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            paddingX: 2,
            overflowX: 'auto'
          }}>
            
            <img src={websosanhLogo} alt="Websosanh Logo" />

            <TextField
              id="outlined-search"
              label="Search product..."
              type="text"
              size="small"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              InputProps={{
                startAdornment:(
                  <InputAdornment position="start">
                    <SearchIcon sx= {{ color: 'white' }} />
                  </InputAdornment>
                ),
                endAdornment:(
                  <CloseIcon
                    fontSize='small'
                    sx ={{ color: searchValue ? 'white' : 'transparent', cursor: 'pointer' }}
                    onClick={() => setSearchValue('')}
                  />
                )
              }}
              sx={{
                minWidth: 600,
                maxWidth: 700,
                '& label': { color: 'white' },
                '& input': { color: 'white' },
                '& label.Mui-focused': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'white' },
                  '&:hover fieldset': { borderColor: 'white' },
                  '&.Mui-focused fieldset': { borderColor: 'white' }
                }
              }} />


              <Button variant="text" endIcon={<AccountCircleIcon />} sx={{ backgroundColor: '#207bc1', color: 'white' }}>
                  Login
              </Button>
          </Box>
        </Container>
      </Box>
    )
  }
  
export default Header