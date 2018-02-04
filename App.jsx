import 'whatwg-fetch';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fullName: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=Philosophy&rvprop=timestamp|user|comment|content&format=json', {
      headers: {
        'Access-Control-Allow-Origin': true,
      },
    })
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
    }).catch(e => {
      console.log('error', e)
    });
  }

  handleFullNameChange(event) {
    this.setState({ fullName: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Full Name:
            <input type="text" value={this.state.fullName} onChange={this.handleFullNameChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };
};

export default App;
