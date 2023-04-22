import { Typography, Box, Avatar } from "@mui/material"
import {DataGrid, GridColDef} from "@mui/x-data-grid"
import { ProductType } from "../../model/ProductType"
import { useSelector } from "react-redux"
import Grid from '@mui/material/Grid';

export const ProductsClient: React.FC = () => {
    const products: ProductType[] =
     useSelector<any, ProductType[]>(state => state.productsState.products);
    
    return <Box sx={{ width: "80vw", height: "80vh"  }}>   
    <Grid container spacing={2} sx={{ marginTop: "20px", marginLeft: "8vw" }}>
      {products.map((product) => (
        <Grid item xs={3} key={product.id} >
          <Box sx={{ padding: "10px", border: "1px solid gray" }}>
            <Avatar
              src={`images/${product.image}`}
              sx={{ width: "100%", height: "24vh" }}
            />
            <Typography variant="h6" sx={{ marginTop: "10px", display: "flex", justifyContent: "center", alignItems: "center"  }}>
              {product.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "gray", display: "flex", justifyContent: "center", alignItems: "center" }}>
              {product.category}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "gray", display: "flex", justifyContent: "center", alignItems: "center" }}>
              {product.unit}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              {product.cost } ₪
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
}