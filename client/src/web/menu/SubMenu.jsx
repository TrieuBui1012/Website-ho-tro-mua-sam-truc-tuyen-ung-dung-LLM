import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom'

export default function SubMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();  // Hook dùng để điều hướng

  const handleMenuClick = (path) => {
    navigate(path);  // Chuyển hướng đến route tương ứng
    handleClose()
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<DensitySmallIcon />}
        endIcon={<MoreVertIcon fontSize='large' />}
        sx={{ color: '#ff4200' }}
      >
        Danh mục sản phẩm
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleMenuClick('/DienLanh')}>Điện Lạnh</MenuItem>
        <MenuItem onClick={() => handleMenuClick('/Tivi-Amthanh')}>Tivi-Âm thanh</MenuItem>
        <MenuItem onClick={() => handleMenuClick('/DienThoai-Maytinhbang')}>Điện thoại-Máy tính bảng</MenuItem>
        <MenuItem onClick={() => handleMenuClick('/Do-gia-dung')}>Thiết bị gia dụng</MenuItem>
        <MenuItem onClick={() => handleMenuClick('/Yte-suckhoe')}>Y tế-Sức khỏe</MenuItem>
        <MenuItem onClick={() => handleMenuClick('/Thoitrang-mypham')}>Thời trang-Mỹ phẩm</MenuItem>
        <MenuItem onClick={() => handleMenuClick('/Me&Be')}>Mẹ và bé</MenuItem>
      </Menu>
    </div>
  );
}