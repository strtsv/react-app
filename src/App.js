import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid, Header, Container } from "semantic-ui-react";
import { ArticleList } from "./ArticleList";
import { Article } from "./Article";
import { NewArticle } from "./NewArticle";
import ApiService from "./apiService";

class App extends React.Component {
  state = {
    currentArticle: undefined
  };
  constructor(props) {
    super(props);
    this.apiService = new ApiService();
  }
  componentWillMount() {
    this.fetchArticles();
  }
  fetchArticles = () =>
    this.apiService.getArticles().then(({ data }) => {
      this.setState({
        articles: data.articles
      });
    });

  storeArticle = data => {
    this.apiService.storeArticle(data).then(() => {
      this.fetchArticles();
      this.toggleShowCreateEventForm();
    });
  };

  _newArticle = this._handleNewArticle.bind(this);
  _showArticle = this._handleShowArticle.bind(this);

  _handleShowArticle(article) {
    this.setState({
      currentArticle: article
    });
  }

  _handleNewArticle() {
    this.setState({
      currentArticle: undefined
    });
  }

  render() {
    let body;
    if (this.state.currentArticle) {
      body = <Article id={this.state.currentArticle} />;
    } else {
      body = <NewArticle />;
    }
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2">Blog</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={12}>{body}</Grid.Column>
            <Grid.Column width={4}>
              <ArticleList
                showArticle={this._showArticle}
                newArticle={this._newArticle}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
