import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { useState } from 'react';


export default function ControlledTreeView({ rightform, setRightForm }) {
  const defaultExpanded = ['1', '5', '6', '7'];
  const [expanded, setExpanded] = React.useState([]);
  // const [selected, setSelected] = React.useState([]);
  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  // const handleSelect = (event, nodeIds) => {
  //   setSelected(nodeIds);
  // };

  // const handleExpandClick = () => {
  //   setExpanded((oldExpanded) =>
  //     oldExpanded.length === 0 ? ['1', '5', '6', '7'] : [],
  //   );
  // };

  // const handleSelectClick = () => {
  //   setSelected((oldSelected) =>
  //     oldSelected.length === 0 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9'] : [],
  //   );
  // };
  const handleClick = (e) => {
    setRightForm(e)
  }
  return (
    <Box sx={{ height: '100vh', flexGrow: 1, maxWidth: 400, overflowY: 'auto', backgroundColor: 'black' }}>
      <Box sx={{ mb: 1 }}>
        {/* <Button onChandleExpandClick('')}>
          {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
        </Button> */}
        {/* <Button onChandleSelectClick('')}>
          {selected.length === 0 ? 'Select all' : 'Unselect all'}
        </Button> */}
      </Box>
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        defaultExpanded={defaultExpanded}
        // expanded={expanded}
        // selected={selected}
        onNodeToggle={handleToggle}
      // onNodeSelect={handleSelect}
      // multiSelect

      >
        <TreeItem nodeId="1" label="Categories" onClick={() => handleClick('category')} rightform={rightform} >
          <TreeItem nodeId="2" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="3" label="Discount" onClick={() => handleClick('discount')} rightform={rightform} >
          <TreeItem nodeId="4" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="5" label="Products" onClick={() => handleClick('products')} rightform={rightform} >
          <TreeItem nodeId="6" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="7" label="Restourants" onClick={() => handleClick('restourants')} rightform={rightform} >
          <TreeItem nodeId="8" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="9" label="Tables" onClick={() => handleClick('tables')} rightform={rightform} >
          <TreeItem nodeId="10" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="11" label="Units" onClick={() => handleClick('units')} rightform={rightform} >
          <TreeItem nodeId="12" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="13" label="Vats" onClick={() => handleClick('vats')} rightform={rightform} >
          <TreeItem nodeId="14" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="15" label="Modifiers" onClick={() => handleClick('modefier')} rightform={rightform} >
          <TreeItem nodeId="16" label="Calendar" />
        </TreeItem>
        {/* <TreeItem nodeId="1" label="Applications">
          <TreeItem nodeId="2" label="Calendar" />
          <TreeItem nodeId="3" label="Chrome" />
          <TreeItem nodeId="4" label="Webstorm" />
        </TreeItem> */}
        {/* <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="6" label="MUI">
            <TreeItem nodeId="7" label="src">
              <TreeItem nodeId="8" label="index.js" />
              <TreeItem nodeId="9" label="tree-view.js" />
            </TreeItem>
          </TreeItem>
        </TreeItem> */}
      </TreeView>
    </Box>
  );
}
