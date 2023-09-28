import { useContext } from 'react';
import MessagesHistoryContext from './MessagesHistoryContext';

export default function useMessagesHistory() {
  const context = useContext(MessagesHistoryContext);

  if (!context) {
    throw new Error(
      'useMessagesHistory must be used within a MessagesHistoryProvider'
    );
  }

  return context;
}
