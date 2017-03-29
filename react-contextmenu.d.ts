declare module "react-contextmenu" {

import * as React from "react";

interface ContextMenuProps {
  id: string,
  className?: string,
  hideOnLeave?: boolean,
  data?: any,
  onHide?: {(args: any): void},
  onMouseLeave?: {(args: any): void},
  onShow?: {(args: any): void},
}

interface ContextMenuTriggerProps {
  id: string,
  name?: string,
  attributes?: any,
  collect?: {(args: any): any},
  disable?: boolean,
  holdToDisplay?: number,
  renderTag?: any,
}

interface MenuItemProps {
  attributes?: any,
  data?: Object,
  disabled?: boolean,
  preventClose?: boolean,
  divider?: boolean,
  onClick?: {(...args: any[]): void},
}

module ReactContextmenu {
  export const ContextMenu: React.Factory<ContextMenuProps>;
  export const ContextMenuTrigger: React.Factory<ContextMenuTriggerProps>;
  export const MenuItem: React.Factory<MenuItemProps>;
}

export = ReactContextmenu;
}