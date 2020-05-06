import React, { Component } from 'react';
import axios from 'axios';
import DataApi from 'state-api';
import ArticleList from '../components/ArticleList';

export default class App extends Component {
  state = { 
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors,
  };

  async componentDidMount() {
    const res = await axios.get('/data');
    const api = new DataApi(res.data.data);
    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors()
    }));
  }
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  };

  render() {
    return (
      <div>
        <ArticleList 
          articles={this.state.articles} 
          articleActions={this.articleActions} />
      </div>
    );
  }
}
