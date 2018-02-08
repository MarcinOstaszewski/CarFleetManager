import React from 'react';
import ReactDOM from 'react-dom';
import ReactTable from 'react-table'


class LoggedIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tableContentArranged : [],
        };
    }

    componentDidMount() {

        fetch(`https://vehiclefakedb.firebaseio.com/masterSheet.json`).then( r =>   r.json() ).then( response => {
            var tableData = [];
            response.forEach( element => {
                tableData.push({
                    id : element[0],
                    registration_number : element[1],
                    vin_number : element[2],
                    brand : element[3],
                    model : element[4],
                    created_at : element[5],
                    modified_at : element[6],
                    mileage : element[7],
                    is_active : element[8]
                });
            });
            tableData.shift(); // removes first ( unneeded ) element

            this.setState({
                tableContentArranged : tableData
            })
        });
    }

    render(){

        return (
            <div>
                <h1>Hello!</h1>
                <ReactTable 
                    data={this.state.tableContentArranged}
                    columns={[
                        {       
                            Header: "ID",
                            accessor: "id"
                        },
                        {
                            Header: "Registration No",
                            accessor: "registration_number"
                        },
                        {
                            Header: "Vin No",
                            accessor: "vin_number"
                        },
                        {
                            Header: "Brand",
                            accessor: "brand"
                        },
                        {
                            Header: "Model",
                            accessor: "model"
                        },
                        {
                            Header: "Created",
                            accessor: "created_at"
                        },
                        {
                            Header: "Modified",
                            accessor: "modified_at"
                        },
                        {
                            Header: "Mileage",
                            accessor: "mileage"
                        },
                        {
                            Header: "Is Active",
                            accessor: "is_active"
                        }
                    ]}
                    defaultPageSize={20}
                    className="-striped -highlight"/>
            </div>
        )
    }
}

export {LoggedIn}


 // if (this.state.tableContentArranged.length > 0) {
        //     this.tableContent=<div className="container">
        //         <div className="tableBcg">
        //             <p className="sortInfo">Click on the name of the column to sort infotable by it.<br />Click it again for reverse order.</p>
        //             <div className="containsTable">
        //                 <Table className="table dataTable" id="table" data={this.state.tableContentArranged}
        //                 sortable={[
        //                     'ID',
        //                     'Registration No',
        //                     'Vin No',
        //                     'Brand',
        //                     'Model',
        //                     'Date Created',
        //                     'Date Modified',
        //                     'Mileage',
        //                     'Is Active'
        //                 ]}
        //                 defaultSort={{column: 'ID', direction: 'asc'}} itemsPerPage={25} pageButtonLimit={20} />
        //             </div>
        //         </div>
        //     </div>;
        // }