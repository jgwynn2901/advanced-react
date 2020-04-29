import React, { Component } from 'react';
import DataApi from '../dataApi';
import {data} from '../testData';
import ArticleList from '../components/ArticleList';

const api = new DataApi(data);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }
  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles} authors={this.state.authors} />
      </div>
    );
  }
}
