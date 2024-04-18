export const ticketStatuses = [
  'None',
  'Waiting',
  'Assigned',
  'Open',
  'ClosedClient',
  'ClosedClientInactivity',
  'ClosedAttendant',
  'Transferred',
] as const;

export type TicketStatuses = typeof ticketStatuses[number];

export const ticketStatusToLabel: Record<
  TicketStatuses | (string & {}),
  | {
      en: string;
      pt: string;
      es: string;
    }
  | undefined
> = {
  None: {
    en: 'None',
    pt: 'Nenhum',
    es: 'Ninguno',
  },
  Waiting: {
    en: 'Waiting',
    pt: 'Esperando',
    es: 'Esperando',
  },
  Assigned: {
    en: 'Assigned',
    pt: 'Atribuído',
    es: 'Asignado',
  },
  Open: {
    en: 'Open',
    pt: 'Aberto',
    es: 'Abierto',
  },
  ClosedClient: {
    en: 'Closed by client',
    pt: 'Fechado pelo cliente',
    es: 'Cerrado por cliente',
  },
  ClosedClientInactivity: {
    en: 'Closed due to client inactivity',
    pt: 'Fechado devido à inatividade do cliente',
    es: 'Cerrado debido a la inactividad del cliente',
  },
  ClosedAttendant: {
    en: 'Closed by attendant',
    pt: 'Fechado pelo atendente',
    es: 'Cerrado por el asistente',
  },
  Transferred: {
    en: 'Transferred',
    pt: 'Transferido',
    es: 'Transferido',
  },
};

export function getTicketStatusLabel(
  status: TicketStatuses | (string & {}),
  language: 'en' | 'pt' | 'es' = 'pt'
) {
  const label = ticketStatusToLabel[status];

  if (label) {
    return label[language];
  }

  return status;
}
