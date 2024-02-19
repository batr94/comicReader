import { createContext } from 'react';

export type SidebarContextValue = {
  isOpen: boolean,
  onClose: () => void,
}

const SidebarContext = createContext<SidebarContextValue | undefined>(undefined);

export default SidebarContext;