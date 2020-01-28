import React from 'react'
import SideMenuView from './SideMenuView'

class SideMenu extends React.Component {
  state = { activeItem: 'konta' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.manageWorkPlace(name);
  }
  render() {
    return (
        <SideMenuView
        handleItemClick={this.handleItemClick}
        activeItem={this.state.activeItem}
        />)
  }
}

export default SideMenu;