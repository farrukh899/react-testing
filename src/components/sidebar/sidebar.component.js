import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sidebar.style.scss';
import SidebarItem from './sidebar-item/sidebar-item.component.js';

class Sidebar extends Component {
    constructor (props) {
        super();
    }
    /**
      * create sidebar item uses props
      * {props Object} return <HTML element/>
      */
    createSidebarItem () {
        return this.props.sidebar.options.map((sidebarItem, index) => {
            return (<SidebarItem option={{ ...sidebarItem }} key={index}/>);
        });
    }
    render () {
        return (
          <div className="sidebar-component">
            { this.createSidebarItem() }
          </div>
        );
    }
}
/**
  * Defining proptypes here
  **/
Sidebar.propTypes = {
    sidebar: React.PropTypes.object.isRequired
};

function mapStateToProps (state) {
    return {
        sidebar: state.sidebar
    };
}
export default connect(mapStateToProps)(Sidebar);
