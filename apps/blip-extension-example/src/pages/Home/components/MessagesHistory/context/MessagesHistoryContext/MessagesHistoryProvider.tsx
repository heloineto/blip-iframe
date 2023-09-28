import type { ReactNode } from 'react';
import type { MessagesHistoryContextType } from './MessagesHistoryContext';
import MessagesHistoryContext from './MessagesHistoryContext';

export interface MessagesHistoryProviderProps {
  value: MessagesHistoryContextType;
  children: ReactNode;
}

export default function MessagesHistoryProvider(
  props: MessagesHistoryProviderProps
) {
  return (
    <MessagesHistoryContext.Provider value={props.value}>
      {props.children}
    </MessagesHistoryContext.Provider>
  );
}
