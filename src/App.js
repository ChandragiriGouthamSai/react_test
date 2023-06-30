// import logo from './logo.svg';
// import './App.css';
// import PageSizeCustomOptions from "./PageSizeCustomOptions";
// import {DataGrid} from "@mui/x-data-grid";
//
// function App() {
//   return (
//     <div className="App">
//         <DataGrid
//             rows={rows}
//             {/*{...data}*/}
//             rowCount={rowCountState}
//             pagination
//             page={page}
//             pageSize={pageSize}
//             rowsPerPageOptions={[5]}
//             columns={columns}
//             loading={isLoading}
//             pageSizeOptions={[5]}
//             paginationModel={paginationModel}
//             paginationMode="server"
//             onPageChange={}
//             onPaginationModelChange={setPaginationModel}
//         />
//     </div>
//   );
// }
//
// export default App;
import {AppBar, Box, Container, Toolbar, Typography} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {useEffect, useState} from 'react';
import './App.css';
import lambdaWrapper from "./utils";

const columns = [
    {
        field: 'ID', headerName: 'ID', flex: 1
    },
    {
        field: 'Title', headerName: 'Title', flex: 3
    },
    {
        field: 'Creator', headerName: 'Creator', flex: 1
    },
    {
        field: 'Submitted', headerName: 'Submitted', flex: 1
    },
]

function App() {
    const [pageState, setPageState] = useState({
        isLoading: false,
        data: [],
        total: 0,
    })
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 20,
    });

    const fetchData = async () => {
        console.log('ON')
        setPageState(old => ({...old, isLoading: true}))
        return fetch(
            "https://vq73k1vtm5.execute-api.ap-northeast-1.amazonaws.com/default/AuthoringAPI", {
                method: 'post',
                headers: {"Content-Type": "application/json", "x-authoring-action": "/api/authoring"},
                body: JSON.stringify({
                    "sessionId": "a9b60a84-5caa-476d-a323-6448e1192a56",
                    "bean": "gridViewService",
                    "method": "getGridDataWithFilters",
                    "params": ["6", [], paginationModel.page, {"exportListGridToExcel": "false"}]
                })
            })
            .then((result) => {
                return result.json().then(result => {
                    console.log(result)
                    setPageState({
                        isLoading: false,
                        data: result.documents,
                        total: result.totalNumberOfRecord
                    })
                });
            })
    }

    useEffect(() => {
        console.log('Changed page pageSize');
        fetchData();
    }, [paginationModel])


    return <Box>
        <AppBar>
            <Toolbar>
                <Typography variant="h6" component="div">
                    Server-side Pagination demo
                </Typography>
            </Toolbar>
        </AppBar>
        <Container style={{marginTop: 100, marginBottom: 100}}>
            <DataGrid
                autoHeight
                columns={columns}
                rows={pageState.data}
                getRowId={(row) => row.WorkflowId}
                rowCount={pageState.total}
                loading={pageState.isLoading}
                pageSizeOptions={[20,40]}
                paginationModel={paginationModel}
                paginationMode="server"
                onPaginationModelChange={setPaginationModel}
            />
        </Container>
    </Box>
}

export default App;