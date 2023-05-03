import { Typography, Box, Avatar, Snackbar, Alert } from "@mui/material"
import {DataGrid, GridActionsCellItem, GridColDef} from "@mui/x-data-grid"
import { ProductType } from "../../model/ProductType"
import { useSelector } from "react-redux"
import { useRef, useState } from "react"
import { ordersService } from "../../config/orders-service-config"
import { Delete } from "@mui/icons-material"
import { productsService } from "../../config/products-service-config"
type ShoppingDataType = ProductType & { count: number, price: number }
export const ProductsAdmin: React.FC = () => {
    const authUser = useSelector<any, string>(state => state.auth.authUser);
    const [open, setOpen] = useState<boolean>(false);
    const alertMessage = useRef<string>('');
    const products: ProductType[] =
     useSelector<any, ProductType[]>(state => state.productsState.products);
    const columns: GridColDef[] = [
        {field:"image", headerName: '', flex: 0.3,
         renderCell: (params) => <Avatar src={`images/${params.value}`} 
         sx={{width: "90%", height: "80px"}}/>, align: "center", headerAlign: "center"},
        {field: "title", headerName: 'Title', flex: 0.8, align: "center", headerAlign: "center"},
        {field: "category", headerName: "Category", flex: 0.5},
        {field: "unit", headerName: "Unit", flex: 0.4},
        {field: "cost", headerName: "Cost (ILS)", flex: 0.3},
        {field: 'actions', type: 'actions', flex: 0.1, getActions: (params) => [
            <GridActionsCellItem label="remove" icon={<Delete></Delete>}
             onClick={async () => await 
                productsService.removeProduct(params.id as string)}/>
        ]}
    ]
    async function updateCount(newRow: any): Promise<any> {
        const rowData: ShoppingDataType = newRow;
        if (rowData.count < 1) {
            throw 'count must be greater than 0'
        }
        await ordersService.addShoppingProduct(authUser,
            rowData.id!, { id: rowData.id!, count: rowData.count })
        return newRow;
    }
    return <Box sx={{width: "100vw",display: "flex", justifyContent:"center"}}>
        <Box sx={{width: "80vw",height: "80vh"}}>
        <DataGrid columns={columns} rows={products} getRowHeight={() => 'auto'}
        onProcessRowUpdateError={(error) => {
            alertMessage.current = error;
            setOpen(true)
         }}/>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
            <Alert severity="error" sx={{ width: '30vw', fontSize: '1.5em' }}>
                {alertMessage.current}
            </Alert>
        </Snackbar>
    </Box>
    </Box>
}