import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';
const ProductCard = ({ product, ...props }) => {
  const [isHover, setIsHover] = useState(false);
  function handelMouseOverProduct() {
    setIsHover(true);
  }
  function handelMouseOutProduct() {
    setIsHover(false);
  }
  function getMedia() {
    if (!isHover) {
      return product.frontImage;
    } else {
      return product.behindImage;
    }
  }
  return (
    <Card sx={{ maxWidth: 345, minHeight: "400px" }}>
      <CardActionArea style={{ height: "100%", display: "grid", gridTemplateRows: "8fr 2fr" }}>
        <CardMedia
          component="img"
          image={getMedia()}
          alt="green iguana"
          className="product-image"
          style={{ minHeight: "285px" }}
          onMouseOver={() => { handelMouseOverProduct() }}
          onMouseOut={() => { handelMouseOutProduct() }}
        />
        <CardContent style={{
          color: "rgb(24, 24, 24)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "10px"
        }}>
          <Typography gutterBottom variant="h5" component="div" style={{ fontSize: "1rem", fontFamily: "'Open Sans', sans-serif" }}>
            {product.name}
          </Typography>
          <Typography variant="body2" style={{ fontSize: "1rem", fontWeight: "bold", fontFamily: "'Open Sans', sans-serif" }}>
            ${product.price}.00
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default ProductCard;