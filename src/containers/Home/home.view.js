import React, { Component } from 'react';
import Header from '../../components/header/header.component.js';
import Sidebar from '../../components/sidebar/sidebar.component.js';
import SidebarExtended from '../../components/sidebar-extended/sidebar-extended.component.js';
import ContentContainer from '../../components/content/content.component.js';
import { selectArticle } from '../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './home.style.scss';

class Home extends Component {
    constructor (props) {
        super();
    }
    /**
      * Component did mount
      * Check the store
      **/
    componentDidMount () {
        this.props.selectArticle(this.props.newsFeeds.news[0]);
    }
    /**
      * Component did mount function which received
      * Values from the reducer
      **/
    render () {
        return (
          <div className="home-container layout-column flex-100">
            <div className="flex-10 header-container layout-row">
              <Header/>
            </div>
            <div className="content-container layout-row flex-90">
              <div className="flex-15">
                <Sidebar/>
              </div>
              <div className="flex-25">
                <SidebarExtended/>
              </div>
              <div className="flex-60">
                <ContentContainer/>
              </div>
            </div>
          </div>
        );
    }
}
/**
  * Defininf propTypes
  * Select article and state properties
  **/
Home.propTypes = {
    selectArticle: React.PropTypes.func,
    newsFeeds: React.PropTypes.object.isRequired
};
/**
  * So that upon initialization
  * We select a default article
  **/
function mapDispatchToProps (dispatch) {
    return bindActionCreators({ selectArticle: selectArticle }, dispatch);
}

function mapStateToProps (state) { return state; }
export default connect(mapStateToProps, mapDispatchToProps)(Home);
