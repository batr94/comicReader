import { useContext } from 'react';
import SidebarContext from './Sidebar.context';

export default function useSidebarContext() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebarContext must be used within a SidebarProvider');
  }

  return context;
}