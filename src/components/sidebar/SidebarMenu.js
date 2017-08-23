import React from 'react';
import { List, makeSelectable } from 'material-ui/List';

const SelectableList = makeSelectable(List);

const SidebarMenu = ({ children }) =>
  <div style={styles().wrapper}>
    <SelectableList>
      {children}
    </SelectableList>
  </div>;

const styles = () => ({
  wrapper: {
    marginTop: 20,
  },
});

export default SidebarMenu;
