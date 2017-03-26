import React, { Component } from 'react';
import './content.style.scss';
import { connect } from 'react-redux';

class Content extends Component {
    constructor (props) {
        super();
    }
    componentDidMount () {
    }
    /**
      * Render function
      * Input {prop Object} output <HTML element/>
      **/
    render () {
        return (
          this.props.article ?
          <div className="content-area layout-column">
            <div className="title-area">
              <h2>{this.props.article.articleTitle}</h2>
            </div>
            <div className="info-area">
              <span className="author-info">
                {this.props.article.articleAuthor}, Published: { this.props.article.publishDate }
              </span>
            </div>
            <section className="article-content">
              <article className="article-text">
                { this.props.article.description }
              </article>
            </section>
          </div> : null
        );
    }
}

function mapStateToProps (state) {
    return {
        article: state.activeArticle
    };
}
Content.propTypes = {
    article: React.PropTypes.object,
    activeArticle: React.PropTypes.object
};
export default connect(mapStateToProps)(Content);
