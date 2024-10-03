import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'


function CustomCard() {
    return(
        <Card sx={{ maxWidth: 250, maxHeight: 350 }}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="160"
            image="https://img.websosanh.vn/v2/users/wss/images/sua-rua-mat-eucerin-sang-da/8e2d6bd574f44.jpg?compress=80&width=220"
            />
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant='contained' sx={{ bgcolor: '#ff4200' }}>Tới nơi bán</Button>
            </CardActions>
            <CardContent>
                <Typography variant="body2" sx={{  }}>
                    Sữa rửa mặt làm trắng da
                </Typography>
            </CardContent>
            <CardContent sx={{display: 'flex', justifyContent:'space-between' }}>
                <Typography>100.000 đ</Typography>
                <Typography>- 50%</Typography>
            </CardContent>
        </Card>
    ) 
}
export default CustomCard