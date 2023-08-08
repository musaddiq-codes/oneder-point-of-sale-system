import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
const TableHeader = () => {
  return (
    <div style={{ height: '70px', backgroundColor: '#0D1026', display: 'flex', justifyContent: 'space-between',alignItems:'center', color: 'white' }}>
      <div >
        <h5>Table1</h5>
        <h6>Ammit R</h6>
      </div>
      <div style={{marginLeft:"150px"}}>
        v
      </div>
      <div style={{ paddingRight: '10px' }}>
        <DeleteOutlineOutlinedIcon sx={{ color: 'white' }} />
        <NoteAltOutlinedIcon sx={{ color: 'white' }} />
      </div>
    </div>
  )
}

export default TableHeader