import React from 'react';

class App extends React.Component {
  state = {
    articles: [],
    showCreateArticleForm: false
  };

  toggleShowCreateArticleForm = () => {
    this.setState({
      showCreateArticleForm: !this.state.showCreateArticleForm
    });
  };
  render() {
    return (
      <div className="container">
      <h1 className="text-center my-5">Article Manager</h1>
      <div className="text-center mb-5">
        <button
          className={`btn ${
            this.state.showCreateArticleForm ? "btn-danger" : "btn-info"
          }`}
          onClick={this.toggleShowCreateArticleForm}
        >
          {this.state.showCreateArticleForm ? "Cancel" : "Create Article"}
        </button>
      </div>
      </div>
    );
  }
}

export default App;
