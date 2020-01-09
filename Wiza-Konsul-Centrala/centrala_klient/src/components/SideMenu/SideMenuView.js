import React from 'react';
import {Menu} from 'semantic-ui-react';
const SideMenuView = (props) => {
    const {
        handleItemClick,
        activeItem,
    } = props;

    return (
      <Menu pointing vertical>
        <Menu.Item
          name='konta'
          active={activeItem === 'konta'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='slownik'
          active={activeItem === 'slownik'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='zmienne systemowe'
          active={activeItem === 'zmienne systemowe'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='system'
          active={activeItem === 'system'}
          onClick={handleItemClick}
        />
      </Menu>
    );
};
export default SideMenuView;