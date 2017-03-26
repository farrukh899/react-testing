import React, { Component } from 'react';
import './sidebar-extended.style.scss';
import SidebarExtendedItem from './sidebar-extended-item/sidebar-extended-item.component.js';

import { connect } from 'react-redux';

class SidebarExtended extends Component {
    constructor (props) {
        super();
    }
    /**
      * Render function will get the feed prop
      * Props [Array, newsFeeds] output <Html element/>
      **/
    render () {
        return (
            <div className="sidebar-extended-component">
              <SidebarExtendedItem/>
            </div>
        );
    }
}

SidebarExtended.propTypes = {
    feed: React.PropTypes.array.isRequired
};

function mapStateToProps (state) {
    const selected = _.filter(state.sidebar.options, { selected: true })[0].name;
    return { feed: state.newsFeeds[(selected).toLowerCase()], selectedArticle: state.selectedArticle };
}

export default connect(mapStateToProps)(SidebarExtended);
