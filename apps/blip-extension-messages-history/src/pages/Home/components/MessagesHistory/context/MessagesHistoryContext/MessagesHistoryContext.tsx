'use client';

import type { GetTicketsItem } from 'blip-iframe';
import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

export interface MessagesHistoryContextType {
  selectedTicket: GetTicketsItem | null;
  setSelectedTicket: Dispatch<SetStateAction<GetTicketsItem | null>>;
  onCloseDrawer: () => void;
  setBotKey: Dispatch<SetStateAction<string>>;
  botKey: string;
}

const MessagesHistoryContext = createContext<MessagesHistoryContextType | null>(
  null
);

export default MessagesHistoryContext;
