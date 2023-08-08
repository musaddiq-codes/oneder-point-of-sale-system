import React from 'react';
import TreeNode from './TreeNode';

class TreeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rootNode: { name: 'Root', children: [] },
    };
  }

  render() {
    const { rootNode } = this.state;

    return (
      <div>
        <TreeNode name={rootNode.name} children={rootNode.children} />
      </div>
    );
  }
}

export default TreeView;
