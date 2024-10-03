import { Box, Container, Typography } from "@mui/material"
import websosanhLogo1 from '../../assets/websosanh1.svg'
import Button from "@mui/material/Button"
import AdsClickIcon from '@mui/icons-material/AdsClick'
import FacebookRoundedIcon from '@mui/icons-material/FacebookOutlined';

function Footer() {
    return (
      <Box sx={{ backgroundColor: '#f2f3f8', paddingBottom: '24px', borderTop: '1px ' }}>
        <Container>
          <Box sx={{
            marginTop: '20px',
            width: '100%',
            display: 'flex',
            //alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            paddingX: 2,
            overflowX: 'auto'
            
          }}>
            <Box>
              <img src={websosanhLogo1} alt="Websosanh Logo" />
              <Typography variant="h6" sx={{ mt: '16px' }}>CÔNG TY CỔ PHẦN SO SÁNH VIỆT NAM</Typography>
              <Typography variant="body1">Công cụ so sánh giá online - Không bán hàng</Typography>
              <Typography variant="body1">Trụ sở chính: Số 195 Khâm Thiên, Thổ Quan,</Typography>
              <Typography variant="body1">Đống Đa, Hà Nội</Typography>
              <Typography variant="body1">Giấy chứng nhận đăng ký kinh doanh số 0106373516,</Typography>
              <Typography variant="body1">cấp ngày 02/12/2013</Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ marginTop: '20px' }}>Hỗ trợ khách hàng</Typography>
              <Box sx={{ marginTop: '20px' }}>
                <Typography variant="body1">Hotline: 012300có</Typography>
                <Typography variant="body1">Email: vippro@yahoo.com</Typography>
                <Typography variant="body1">Các câu hỏi thường gặp</Typography>
                <Typography variant="body1">Chính sách bán hàng</Typography>
                <Typography variant="body1">Miễn trừ trách nhiệm</Typography>
                <Typography variant="body1">Chính sách bảo mật</Typography>
                <Typography variant="body1">Quy chế hoạt động sản</Typography>
              </Box>

              
            </Box>
            <Box>
              <Typography variant="h6" sx={{ mt: '20px', mb: '20px' }}>Hợp tác liên kết</Typography>
              <Button variant="contained" size="large" sx={{ backgroundColor: 'red', mb: '10px' }} startIcon={<AdsClickIcon />}>
                Bán hàng cùng websosanh
              </Button>
              <Typography variant="body1">Giới thiệu về websoanh</Typography>
              <Typography variant="body1">Tin tức</Typography>
              <Typography variant="body1">Kênh đối tác bán hàng</Typography>
              
            </Box>
            <Box>
              <Typography variant="h6" sx={{ mt: '20px', mb: '20px' }}>Contact Us</Typography>
              <FacebookRoundedIcon fontSize="large" sx={{ color: '#1877f2' }} />
              <Typography variant="body1">Private policy</Typography>
              <Typography variant="body1">RSS</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

    )
  }
  
export default Footer