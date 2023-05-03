import { Typography, Box, Avatar, Snackbar, Alert } from "@mui/material"
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid"
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
        {
            field: "image", headerName: '', flex: 0.3,
            renderCell: (params) => <Avatar src={`images/${params.value}`}
                sx={{ width: "90%", height: "80px" }} />, align: "center", headerAlign: "center"
        },
        { field: "title", headerName: 'Title', flex: 0.8, align: "center", headerAlign: "center" },
        { field: "category", headerName: "Category", flex: 0.5 },
        { field: "unit", headerName: "Unit", flex: 0.4 },
        { field: "cost", headerName: "Cost (ILS)", flex: 0.3, editable: true, type: 'number' },
        {
            field: 'actions', type: 'actions', flex: 0.1, getActions: (params) => [
                <GridActionsCellItem label="remove" icon={<Delete></Delete>}
                    onClick={async () => await
                        productsService.removeProduct(params.id as string)} />
            ]
        }
    ]
    async function updateCount(newRow: any): Promise<any> {
        const rowData: ProductType = newRow;
        if (rowData.cost < 1 || rowData.cost > 1000) {
            throw 'cost must be more than 1 and less than 1000 NIS'
        }
        await productsService.addProduct(rowData)
        return newRow;
    }
    return <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "80vw", height: "80vh" }}>
            <DataGrid columns={columns} rows={products} getRowHeight={() => 'auto'}
                processRowUpdate={updateCount}
                onProcessRowUpdateError={(error) => {
                    alertMessage.current = error;
                    setOpen(true)
                }} />
            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                <Alert severity="error" sx={{ width: '30vw', fontSize: '1.5em' }}>
                    {alertMessage.current}
                </Alert>
            </Snackbar>
        </Box>
    </Box>
}