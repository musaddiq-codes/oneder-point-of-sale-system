import React from 'react';
import { makeStyles } from '@mui/styles';
import { TreeView, TreeItem } from '@mui/lab';
import { Delete } from '@mui/icons-material';


const data = {
  id: 'root',
  label: 'Root',
  children: [
    {
      id: 'node1',
      label: 'Node 1',
      children: [
        {
          id: 'node1-1',
          label: 'Node 1-1',
          children: [
            {
              id: 'node1-1-1',
              label: 'Node 1-1-1'
            }
          ]
        },
        {
          id: 'node1-2',
          label: 'Node 1-2'
        }
      ]
    },
    {
      id: 'node2',
      label: 'Node 2',
      children: [
        {
          id: 'node2-1',
          label: 'Node 2-1'
        }
      ]
    },
    {
      id: 'node3',
      label: 'Node 3',
      children: [
        {
          id: 'node3-1',
          label: 'Node 3-1'
        }
      ]
    }
  ]
};

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function renderTreeNodes(nodes) {
  return nodes.map((node) => (
    <TreeItem key={node.id} nodeId={node.id} label={node.label}>
      {node.children && renderTreeNodes(node.children)}
    </TreeItem>
  ));
}

function TreeViewComponent() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['root']}
      defaultCollapseIcon={<Delete />}
      defaultExpandIcon={<Delete />}
      // defaultCollapseIcon={<ExpandMoreIcon />}
      // defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTreeNodes([data])}
    </TreeView>
  );
}

export default TreeViewComponent;
