import React from 'react';
import {Menu} from 'semantic-ui-react';
const SideMenuView = (props) => {
    const {
        handleItemClick,
        activeItem,
    } = props;

    return (
      <Menu fluid pointing vertical>
        <Menu.Item
          name='konta'
          active={activeItem === 'konta'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='slowniki'
          active={activeItem === 'slowniki'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='parametry systemowe'
          active={activeItem === 'parametry systemowe'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='raporty'
          active={activeItem === 'raporty'}
          onClick={handleItemClick}
        />
      </Menu>
    );
};
export default SideMenuView;