'use client';

import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

export interface MessagesHistoryContextType {
  selectedTicketId: string | null;
  setSelectedTicketId: Dispatch<SetStateAction<string | null>>;
  onCloseDrawer: () => void;
}

const MessagesHistoryContext = createContext<MessagesHistoryContextType | null>(
  null
);

export default MessagesHistoryContext;
