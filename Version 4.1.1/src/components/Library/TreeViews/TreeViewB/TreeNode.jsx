import React from 'react';

class TreeNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      inputValue: '',
    };
    this.addChild = this.addChild.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addChild() {
    const { inputValue } = this.state;
    if (inputValue.trim() !== '') {
      this.setState((prevState) => ({
        children: [...prevState.children, { name: inputValue, children: [] }],
        inputValue: '',
      }));
    }
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { name } = this.props;
    const { children, inputValue } = this.state;

    return (
      <div>
        {name}
        <ul>
          {children.map((child) => (
            <li key={child.name}>
              <TreeNode name={child.name} children={child.children} />
            </li>
          ))}
        </ul>
        <div>
          <input type="text" value={inputValue} onChange={this.handleChange} />
          <button type="button" onClick={this.addChild}>
            Add Child
          </button>
        </div>
      </div>
    );
  }
}

export default TreeNode;
