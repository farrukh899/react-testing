import React, { Component } from 'react';
import './sidebar-item.scss';

export default class SidebarItem extends Component {
    constructor (props) {
        super();
    }
    /**
      * Gets the props from parent sidebar component
      * Angular material icons and sidebar name
      * TODO add highlight over selected option
      */
    render () {
        return (
          <div>
            <div className="layout-row flex-100 row-start-center sidebar-item">
              <div className="flex-30"><span className="material-icons">{this.props.option.icon}</span></div>
              <div className="flex70"><span className="item-text">{this.props.option.name}</span></div>
            </div>
          </div>
        );
    }
}

SidebarItem.propTypes = {
    option: React.PropTypes.object.isRequired
};
