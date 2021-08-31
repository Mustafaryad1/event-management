import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import DataTable from 'react-data-table-component';


export default function UserEvents(props) {
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


    const handleShow=(event)=> {
        props.history.push(`/form/display/${event.id}`);

    };
    const handleAttendance = (event)=>{
      console.log("att")
      axios.post('/attendance',{event_id:event.id}).then(res=>{
        props.history.push(`/form/display/${event.id}`)
      }).catch(err=>{
        console.log(err)
      })
    }

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
             <button style={{'marginRight':'10px',"padding":"10px 16px","border":"none","background":"#007bff","color":"white","borderRadius":"50em","fontSize":"14px"}} onClick={()=>handleAttendance(row)}>Attend</button>
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
