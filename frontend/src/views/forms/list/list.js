import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import DataTable from 'react-data-table-component';


export default function CreateForm(props) {
    const [events, setEvents] = useState([])
    const dispatch = useDispatch()

    const customStyles = {
        rows: {
          style: {
            minHeight: '80px', // override the row height
            fontSize:'17px',
          }
        },
        headCells: {
          style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
          },
        },
        cells: {
          style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
          },
        },
      };

    useEffect(() => {
        axios.get(`/event/list`).then(res =>{
            // console.log(res.data)
            setEvents(res.data)
        });
    }, []);

    const handleDelete=(event)=> {
        if (window.confirm("Are u Sure you want delete it ?"))
        axios.delete(`/event/${event.id}`).then(res=>{
            setEvents(events.filter(item=>{
                return item.id !== event.id
            }))
        }).catch(err=>{
            alert("Something Wrong")
        })

    };

    const handleShow=(event)=> {
        props.history.push(`/form/display/${event.id}`);
 
    };

    const handleEdit=(event)=> {
        axios.get(`/event/${ event.id}`).then(res=>{
        props.history.push(`/form/edit/${event.id}`,{event:res.data[0]});
            
        }).catch(err=>{
            alert("Not Found")
        })
        
    };
    
    const columns = useMemo(
        () => [ 
        { name: "Title", selector: "name", sortable: true },
        {
            name:"Actions",
            grow:2,
            center:true,
            compact:true,
            wrap:true,
            style:{
                
            },
            cell: (row,index,column,id) =>
            <> 
             <button style={{'marginRight':'10px',"padding":"10px 16px","border":"none","background":"gray","color":"white","borderRadius":"50em","fontSize":"14px"}} onClick={()=>handleShow(row)}>Show</button>
             <button style={{'marginRight':'10px',"padding":"10px 16px","border":"none","background":"#007bff","color":"white","borderRadius":"50em","fontSize":"14px"}} onClick={()=>handleEdit(row)}>Edit</button>
             <button  style={{"padding":"10px 16px","border":"none","background":"#dc3545","color":"white","borderRadius":"50em","fontSize":"14px"}} onClick={()=>handleDelete(row)}>Delete</button>
            </>
        },
      ])

    return (
        <div>
            <DataTable
                    title="Events"
                    columns={columns}
                    data={events}
                    defaultSortFieldId={1}
                    pagination
                    highlightOnHover
                    striped
                    pointerOnHover
                    customStyles={customStyles}
                    />

        </div>
    );
  
}