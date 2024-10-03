import SubMenu from "./SubMenu"
import { Container } from "@mui/material"
import Box from "@mui/material/Box"
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'





const preventDefault = (event) => event.preventDefault();

function Menu() {
  return (
      <Box sx={{ backgroundColor: '#f7f7f7',position:'sticky', top: '65px', zIndex: 999 }}>
        <Container>
          <Box sx={{
            width: '100%',
            height: '55px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            paddingX: 2,
            overflowX: 'auto',
          }}>
              <SubMenu />
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  typography: 'body1',
                  '& > :not(style) ~ :not(style)': {
                    ml: 2,
                  },
                }}
                onClick={preventDefault}
                >
                <Link component={RouterLink} to='/DienLanh' underline="none" sx={{ color: 'black', '&:hover':{color:'red'} }}>
                  {'Điện lạnh'}
                </Link>
                <Link component={RouterLink} to='/Tivi-Amthanh'href="#" underline="none" sx={{ color: 'black', '&:hover':{color:'red'} }}>
                  {'Tivi-Âm thanh'}
                </Link>
                <Link component={RouterLink} to='/DienThoai-Maytinhbang' underline="none" sx={{ color: 'black', '&:hover':{color:'red'} }}>
                  {'Điện thoại-Máy tính bảng'}
                </Link>
                <Link component={RouterLink} to='/Do-gia-dung' underline="none" sx={{ color: 'black', '&:hover':{color:'red'} }}>
                  {'Thiết bị gia dụng'}
                </Link>
                <Link component={RouterLink} to='/Yte-suckhoe' underline="none" sx={{ color: 'black', '&:hover':{color:'red'} }}>
                  {'Y tế-Sức khỏe'}
                </Link>
                <Link component={RouterLink} to='/Thoitrang-mypham' underline="none" sx={{ color: 'black', '&:hover':{color:'red'} }}>
                  {'Thời trang-mỹ phẩm'}
                </Link>
                <Link component={RouterLink} to='/Me&Be' underline="none" sx={{ color: 'black', '&:hover':{color:'red'} }}>
                  {'Mẹ&Bé'}
                </Link>
              </Box>
          </Box>
        </Container>
      </Box>
  )
}
  
export default Menu