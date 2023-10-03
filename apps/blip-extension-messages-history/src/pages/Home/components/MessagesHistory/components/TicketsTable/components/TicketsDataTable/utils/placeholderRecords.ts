import { PAGE_SIZE } from './components';

export const placeholderRecords = Array.from({ length: PAGE_SIZE }).map(
  (_, index) => ({
    id: String(index),
    sequentialId: 'N/A',
    attendant: 'N/A',
    attendantPhoto: undefined,
    contact: 'N/A',
  })
);
