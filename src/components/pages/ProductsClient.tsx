import { Typography, Box, Avatar, CardContent, CardActions, Button } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { ProductType } from "../../model/ProductType"
import { useSelector } from "react-redux"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

export const ProductsClient: React.FC = () => {
    const products: ProductType[] =
        useSelector<any, ProductType[]>(state => state.productsState.products);

    return <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Grid container spacing={2} sx={{ marginTop: "20px", marginLeft: "5vw", marginRight: "5vw" }}>
  {products.map((product) => (
    <Grid item xs={3} sm={3} md={3} lg={3} key={product.id}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Avatar
          src={`images/${product.image}`}
          sx={{ width: "80%", height: "24vh", alignSelf: "center" }}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h6" sx={{ marginTop: "10px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {product.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "gray" }}>
            {product.unit}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "10px" }}>
            {product.cost} ₪
          </Typography>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="outlined">-</Button>
            <Typography sx={{ mx: 2 }}>0</Typography>
            <Button variant="outlined">+</Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
    </Box>
}