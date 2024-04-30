export const messageStatuses = [
  'dispatched',
  'accepted',
  'received',
  'consumed',
  'failed',
];

export type MessageStatus = typeof messageStatuses[number];

export const messageStatusToLabel: Record<
  MessageStatus,
  {
    en: string;
    pt: string;
    es: string;
  }
> = {
  dispatched: {
    pt: 'Mensagem enviada',
    en: 'Message dispatched',
    es: 'Mensaje enviado',
  },
  accepted: {
    pt: 'Mensagem enviada com sucesso',
    en: 'Message sent successfully',
    es: 'Mensaje enviado con éxito',
  },
  received: {
    pt: 'Mensagem recebida',
    en: 'Message received',
    es: 'Mensaje recibido',
  },
  consumed: {
    pt: 'Mensagem lida',
    en: 'Message read',
    es: 'Mensaje leído',
  },
  failed: {
    pt: 'Mensagem falhou ao enviar',
    en: 'Message failed to send',
    es: 'Mensaje no se pudo enviar',
  },
};
