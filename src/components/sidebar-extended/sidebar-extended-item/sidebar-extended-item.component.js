import React, { Component } from 'react';
import './sidebar-extended-item.style.scss';
import { selectArticle } from '../../../actions/index.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SidebarExtendedItem extends Component {
    constructor (props) {
        super();
    }
    /**
      * Component did mount
      * Check the props
      **/
    componentDidMount () {
        // console.log(this.props);
    }
    /**
      * Make the sidebar element
      * Make a map function
      **/
    makeSidebarItems () {
        return this.props.feeds.map((feed, index) => {
            const classApply = index % 2 === 0 ? 'even-item' : 'odd-item';
            return (
              <div className={`sidebar-extended-item ${classApply} layout-row flex-100 column-center-start`}
                   onClick={() => this.props.selectArticle(feed)} key={index}>
                <div className="flex-5 layout-column selected-pip">
                  { _.isEqual(feed, this.props.selectedArticle) ? <div className="item-selected"/> : null }
                </div>
                <div className="flex-95 layout-column">
                  <div className="flex-75"> <span className="article-title">{feed.articleTitle}</span>
                  </div>

                  <div className="flex-25 layout-row article-info-container">
                    <div className="flex-50">
                      <span className="article-info">{feed.articleAuthor}</span>
                    </div>
                    <div className="flex-50">
                      <span className="article-info">{feed.publishDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
        });
    }
    /**
      * Render function props [Array]
      * Outputs <HTML element/>
      **/
    render () {
        return (<div>{this.makeSidebarItems()}</div>);
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ selectArticle: selectArticle }, dispatch);
}

function mapStateToProps (state) {
    return {
        selectedArticle: state.selectedArticle,
        feeds: state.newsFeeds.news
    };
}

SidebarExtendedItem.propTypes = {
    isOdd: React.PropTypes.bool,
    dispatch: React.PropTypes.func,
    selectArticle: React.PropTypes.func,
    selectedArticle: React.PropTypes.object,
    feeds: React.PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarExtendedItem);
