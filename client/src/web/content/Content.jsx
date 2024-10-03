import { Container, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import { useState } from "react"
import { useEffect } from "react"
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import CustomCard from "./CustomCard"

const images = [
    'https://img.websosanh.vn/v2/users/bpi/images/2btsydc0z2dlj.jpg?compress=85',
    'https://img.websosanh.vn/v2/users/bpi/images/31351usxhspx0.jpg?compress=85',
    'https://img.websosanh.vn/v2/users/bpi/images/lao1pfrkv7o2c.jpg?compress=85',
    'https://img.websosanh.vn/v2/users/bpi/images/eawr5xk9ixlzb.jpg?compress=85',
    'https://img.websosanh.vn/v2/users/bpi/images/dsxscnf3bgt7i.jpg?compress=85'
];


const imageStyle = {
  width: '100%',
  height: 'auto',
};
const imageStyle1 = {
  width: '100%',
  height: 'auto',
  marginBottom: '12px'
}

function Content() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Thay đổi ảnh sau mỗi 3 giây
  
      return () => clearInterval(interval);
    }, []);

    return (
      <Container>
        {/*Slider */}
        <Box sx={{
          display: 'flex',
          marginTop: '16px'
        }}>
          <Box sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '800px', // Điều chỉnh kích thước
            margin: 'auto',
            overflow: 'hidden',
            marginRight: '16px'
          }}>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} style={imageStyle} />
          </Box>

          <Box sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '370px', // Điều chỉnh kích thước
              margin: 'auto',
              overflow: 'hidden'
          }}>
            <img src='https://img.websosanh.vn/v2/users/bpi/images/nb134oiqb8jf2.jpg?compress=85' style={imageStyle1} />
            <img src='https://img.websosanh.vn/v2/users/bpi/images/xx60zzy4had1o.jpg?compress=85' style={imageStyle} />
          </Box>
        </Box>
        {/*Flashsale */}
        <Box>
          <Box sx={{
            height: '60px',
            backgroundColor: '#ff4200',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            paddingX: 2,
            overflowX: 'auto',
            marginBottom: '20px'
          }}>
            <ElectricBoltIcon fontSize="large" sx={{ color: 'white' }} />
            <Typography variant="h4" sx={{ color: 'white' }}>Flash sale</Typography>
            
        </Box>
          <Box sx={{
             display: 'flex',
             alignItems: 'center',
          }}>
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
          </Box>
        </Box>
        {/*Gợi í sản phẩm */}
        <Box sx={{
          marginTop: '20px'
        }}>
          <Typography variant="h4">Sản phẩm gợi ý hôm nay</Typography>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px'
          }}>
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
          </Box>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
          }}>
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
          </Box>
        </Box>
        {/*Tin tức */}
        <Box sx={{ paddingTop: '30px' }}>
          <Typography variant="h4" sx={{ color: '#207bc1' }}>TIN TỨC</Typography>
          <Box sx={{
            display: 'flex',
            borderTop: '3px solid #d3d3d3'
          }}>
            <Box>
              <img src='https://img.websosanh.vn/v2/users/wss/images/sua-rua-mat-eucerin-sang-da/8e2d6bd574f44.jpg?compress=80&width=220' />
            </Box>
            <Box>
              <Typography variant="h4" sx={{ mb: '10px' }}>Sữa thanh tapamyl: tất tật các loại và cách pha đúng công thức</Typography>
              <Typography variant="subtitle" >25/9/2024</Typography>
              <Typography variant="body1" >Aptamil là thương hiệu sữa công thức nổi tiếng của úc với các dòng sữa bột cho bé. bên cạnh đó, hãng còn cho ra mắt thị trường dòng sữa thanh tâhamil mới lạ, tiện lợi nhưng vẫn dữ nguyên vẹn dinh dưỡng</Typography>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            borderTop: '3px solid #d3d3d3'
          }}>
            <Box>
              <img src='https://img.websosanh.vn/v2/users/wss/images/sua-rua-mat-eucerin-sang-da/8e2d6bd574f44.jpg?compress=80&width=220' />
            </Box>
            <Box>
              <Typography variant="h4" sx={{ mb: '10px' }}>Sữa thanh tapamyl: tất tật các loại và cách pha đúng công thức</Typography>
              <Typography variant="subtitle" >25/9/2024</Typography>
              <Typography variant="body1" >Aptamil là thương hiệu sữa công thức nổi tiếng của úc với các dòng sữa bột cho bé. bên cạnh đó, hãng còn cho ra mắt thị trường dòng sữa thanh tâhamil mới lạ, tiện lợi nhưng vẫn dữ nguyên vẹn dinh dưỡng</Typography>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            borderTop: '3px solid #d3d3d3'
          }}>
            <Box>
              <img src='https://img.websosanh.vn/v2/users/wss/images/sua-rua-mat-eucerin-sang-da/8e2d6bd574f44.jpg?compress=80&width=220' />
            </Box>
            <Box>
              <Typography variant="h4" sx={{ mb: '10px' }}>Sữa thanh tapamyl: tất tật các loại và cách pha đúng công thức</Typography>
              <Typography variant="subtitle" >25/9/2024</Typography>
              <Typography variant="body1" >Aptamil là thương hiệu sữa công thức nổi tiếng của úc với các dòng sữa bột cho bé. bên cạnh đó, hãng còn cho ra mắt thị trường dòng sữa thanh tâhamil mới lạ, tiện lợi nhưng vẫn dữ nguyên vẹn dinh dưỡng</Typography>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            borderTop: '3px solid #d3d3d3'
          }}>
            <Box>
              <img src='https://img.websosanh.vn/v2/users/wss/images/sua-rua-mat-eucerin-sang-da/8e2d6bd574f44.jpg?compress=80&width=220' />
            </Box>
            <Box>
              <Typography variant="h4" sx={{ mb: '10px' }}>Sữa thanh tapamyl: tất tật các loại và cách pha đúng công thức</Typography>
              <Typography variant="subtitle" >25/9/2024</Typography>
              <Typography variant="body1" >Aptamil là thương hiệu sữa công thức nổi tiếng của úc với các dòng sữa bột cho bé. bên cạnh đó, hãng còn cho ra mắt thị trường dòng sữa thanh tâhamil mới lạ, tiện lợi nhưng vẫn dữ nguyên vẹn dinh dưỡng</Typography>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            borderTop: '3px solid #d3d3d3'
          }}>
            <Box>
              <img src='https://img.websosanh.vn/v2/users/wss/images/sua-rua-mat-eucerin-sang-da/8e2d6bd574f44.jpg?compress=80&width=220' />
            </Box>
            <Box>
              <Typography variant="h4" sx={{ mb: '10px' }}>Sữa thanh tapamyl: tất tật các loại và cách pha đúng công thức</Typography>
              <Typography variant="subtitle" >25/9/2024</Typography>
              <Typography variant="body1" >Aptamil là thương hiệu sữa công thức nổi tiếng của úc với các dòng sữa bột cho bé. bên cạnh đó, hãng còn cho ra mắt thị trường dòng sữa thanh tâhamil mới lạ, tiện lợi nhưng vẫn dữ nguyên vẹn dinh dưỡng</Typography>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            borderTop: '3px solid #d3d3d3'
          }}>
            <Box>
              <img src='https://img.websosanh.vn/v2/users/wss/images/sua-rua-mat-eucerin-sang-da/8e2d6bd574f44.jpg?compress=80&width=220' />
            </Box>
            <Box>
              <Typography variant="h4" sx={{ mb: '10px' }}>Sữa thanh tapamyl: tất tật các loại và cách pha đúng công thức</Typography>
              <Typography variant="subtitle" >25/9/2024</Typography>
              <Typography variant="body1" >Aptamil là thương hiệu sữa công thức nổi tiếng của úc với các dòng sữa bột cho bé. bên cạnh đó, hãng còn cho ra mắt thị trường dòng sữa thanh tâhamil mới lạ, tiện lợi nhưng vẫn dữ nguyên vẹn dinh dưỡng</Typography>
            </Box>
          </Box>
        </Box>

      </Container>
    )
  }
  
export default Content