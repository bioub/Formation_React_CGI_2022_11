import { Component } from 'react';

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      username: 'toto',
      isActive: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const stateKey = event.target.name;
    const stateValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [stateKey]: stateValue,
    });
  }
  render() {
    const { username, isActive } = this.state;
    return (
      <form className="UserForm">
        <div>
          Username : <input name="username" type="text" value={username} onChange={this.handleChange} />
        </div>
        <div>
          Active : <input name="isActive" type="checkbox" checked={isActive} onChange={this.handleChange} />
        </div>
      </form>
    );
  }
}

export default UserForm;
