'use client';

import type { GetTicketsResponseItem } from 'blip-iframe';
import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

export interface MessagesHistoryContextType {
  selectedTicket: GetTicketsResponseItem | null;
  setSelectedTicket: Dispatch<SetStateAction<GetTicketsResponseItem | null>>;
  onCloseDrawer: () => void;
  setBotKey: Dispatch<SetStateAction<string>>;
  botKey: string;
}

const MessagesHistoryContext = createContext<MessagesHistoryContextType | null>(
  null
);

export default MessagesHistoryContext;
