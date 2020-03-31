import React from "react";
import { Form, Button, Message } from "semantic-ui-react";

export class NewArticle extends React.Component {
  state = {
    title: "",
    body: ""
  };

  _changeTitle = this._handleChangeTitle.bind(this);
  _changeBody = this._handleChangeBody.bind(this);
  _postArticle = this._handlePostArticle.bind(this);

  _handleChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  _handleChangeBody(e) {
    this.setState({
      body: e.target.value
    });
  }

  _handlePostArticle(data) {
    this.apiService.storeArticle(data).then(
      () => {
        this.setState({
          title: "",
          body: "",
          success: true,
          error: undefined
        });
      },
      e => {
        this.setState({
          success: false,
          error: e.response.data
        });
      }
    );
  }

  render() {
    let message;

    if (this.state.success) {
      message = <Message positive>Article posted successfully</Message>;
    } else if (this.state.error) {
      message = <Message error>{this.state.error}</Message>;
    }

    return (
      <Form error={this.state.error} success={this.state.success}>
        {message}
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title"
            value={this.state.title}
            onChange={this._changeTitle}
            autoFocus
          />
        </Form.Field>
        <Form.Field>
          <label>Article</label>
          <textarea
            placeholder="Article"
            value={this.state.body}
            onChange={this._changeBody}
          />
        </Form.Field>
        <Button type="submit" onClick={this._postArticle}>
          Post Article
        </Button>
      </Form>
    );
  }
}
