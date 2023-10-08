'use client';

import type { GetTicketsHistoryItem } from 'blip-iframe';
import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

export interface MessagesHistoryContextType {
  selectedTicket: GetTicketsHistoryItem | null;
  setSelectedTicket: Dispatch<SetStateAction<GetTicketsHistoryItem | null>>;
  onCloseDrawer: () => void;
  setBotKey: Dispatch<SetStateAction<string>>;
  botKey: string;
}

const MessagesHistoryContext = createContext<MessagesHistoryContextType | null>(
  null
);

export default MessagesHistoryContext;
