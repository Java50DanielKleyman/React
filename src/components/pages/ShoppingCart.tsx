import { Avatar, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ProductType } from "../../model/ProductType";
import { ShoppingProductDataType } from "../../model/ShoppingProductDataType";
import { ShoppingProductType } from "../../model/ShoppingProductType";

export const ShoppingCart: React.FC = () => {
    const products: ProductType[] =
        useSelector<any, ProductType[]>(state => state.productsState.products);
    const shopping: ShoppingProductType[] =
        useSelector<any, ShoppingProductType[]>(state => state.shoppingState.shopping);

    function getTableData(): ShoppingProductDataType[] {
        const shoppingData = shopping.map((item) => {
            const product = products.find((p) => p.id === item.id);
            if (product) {
                return {
                    ...product,
                    count: item.count,
                    totalCost: product.cost * item.count,
                };
            }
            return null;
        });

        return shoppingData.filter((item) => item !== null) as ShoppingProductDataType[];
    }
    const tableData = useMemo(() => getTableData(), [products, shopping]);
    const columns: GridColDef[] = [
        {
            field: "image",
            headerName: '',
            flex: 0.3,
            renderCell: (params) => (
                <Avatar
                    src={`images/${params.value}`}
                    sx={{ width: "90%", height: "80px" }}
                />
            ),
            align: "center",
            headerAlign: "center"
        },
        {
            field: "title",
            headerName: 'Title',
            flex: 0.8,
            align: "center",
            headerAlign: "center"
        },
        { field: "category", headerName: "Category", flex: 0.5 },
        { field: "unit", headerName: "Unit", flex: 0.4 },
        { field: "cost", headerName: "Cost (ILS)", flex: 0.3 },
        { field: "count", headerName: "Count", flex: 0.3 },
        { field: "totalCost", headerName: "Total Cost (ILS)", flex: 0.4 },
    ];

    return (
        <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "80vw", height: "80vh" }}>
                <DataGrid
                    columns={columns}
                    rows={getTableData()}
                    getRowHeight={() => 'auto'}
                />
            </Box>
        </Box>
    );

}