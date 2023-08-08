import React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import BorderColorIcon from '@mui/icons-material/BorderColor';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import rightinnerheader from './rightinner.module.css'

const RightContainerHeader = () => {
  return (
    <div className={rightinnerheader.rcheadermotherdiv}>
      <div>
        <p>Table1</p>
        <p className={rightinnerheader.headernesteddiv1p2}>Ammit R</p>
      </div>
      {/* <div style={{marginLeft:"150px"}}>
        v
      </div> */}
      <div className={rightinnerheader.headernesteddiv2}>
        <DeleteOutlineOutlinedIcon />
        <NoteAltOutlinedIcon />
      </div>
    </div>
  )
}

export default RightContainerHeader;
