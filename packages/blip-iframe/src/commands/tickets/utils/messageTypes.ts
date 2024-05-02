export const messageTypes = [
  'text/plain',
  'application/vnd.iris.ticket+json',
  'application/vnd.lime.select+json',
  'application/vnd.lime.media-link+json',
  'application/vnd.lime.collection+json',
  'application/vnd.lime.web-link+json',
  'application/vnd.lime.location+json',
  'application/vnd.lime.input+json',
  'application/vnd.lime.chatstate+json',
  'application/vnd.lime.redirect+json',
  'application/vnd.iris.calls.media+json',
  'application/vnd.lime.contact+json',
  'application/json',
  'application/vnd.lime.reply+json',
  'application/vnd.lime.reaction+json',
  'application/vnd.lime.copy-and-paste+json',
] as const;

export type MessageType = typeof messageTypes[number];

export const messageTypeToLabel: Record<
  MessageType,
  {
    en: string;
    pt: string;
    es: string;
  }
> = {
  'application/json': { pt: 'JSON', en: 'JSON', es: 'JSON' },
  'application/vnd.iris.calls.media+json': {
    pt: 'Chamada',
    en: 'Call',
    es: 'Llamada',
  },
  'application/vnd.lime.chatstate+json': {
    pt: 'Status',
    en: 'Status',
    es: 'Estado',
  },
  'application/vnd.lime.collection+json': {
    pt: 'Coleção',
    en: 'Collection',
    es: 'Colección',
  },
  'application/vnd.lime.contact+json': {
    pt: 'Contato',
    en: 'Contact',
    es: 'Contacto',
  },
  'application/vnd.iris.ticket+json': {
    pt: 'Criação de ticket',
    en: 'Ticket creation',
    es: 'Creación de ticket',
  },
  'application/vnd.lime.copy-and-paste+json': {
    pt: 'Copiar e colar',
    en: 'Copy and paste',
    es: 'Copiar y pegar',
  },
  'application/vnd.lime.input+json': {
    pt: 'Entrada',
    en: 'Input',
    es: 'Entrada',
  },
  'application/vnd.lime.location+json': {
    pt: 'Localização',
    en: 'Location',
    es: 'Ubicación',
  },
  'application/vnd.lime.media-link+json': {
    pt: 'Mídia',
    en: 'Media',
    es: 'Medios',
  },
  'application/vnd.lime.reaction+json': {
    pt: 'Reação',
    en: 'Reaction',
    es: 'Reacción',
  },
  'application/vnd.lime.redirect+json': {
    pt: 'Redirecionamento',
    en: 'Redirect',
    es: 'Redirección',
  },
  'application/vnd.lime.reply+json': {
    pt: 'Resposta',
    en: 'Reply',
    es: 'Respuesta',
  },
  'application/vnd.lime.select+json': {
    pt: 'Seleção',
    en: 'Select',
    es: 'Seleccionar',
  },
  'application/vnd.lime.web-link+json': {
    pt: 'Link',
    en: 'Link',
    es: 'Enlace',
  },
  'text/plain': { pt: 'Texto', en: 'Text', es: 'Texto' },
};

export function getMessageTypeLabel(
  type: MessageType | (string & {}),
  language: 'en' | 'pt' | 'es' = 'pt'
) {
  if (!(type in messageTypeToLabel)) {
    return type;
  }

  const label = messageTypeToLabel[type as MessageType];
  return label[language];
}

export const messageTypeToColor: Record<MessageType, string> = {
  'text/plain': 'blue',
  'application/vnd.iris.ticket+json': 'grape',
  'application/vnd.lime.select+json': 'cyan',
  'application/vnd.lime.media-link+json': 'green',
  'application/vnd.lime.collection+json': 'yellow',
  'application/vnd.lime.web-link+json': 'pink',
  'application/vnd.lime.location+json': 'orange',
  'application/vnd.lime.input+json': 'lime',
  'application/vnd.lime.chatstate+json': 'green',
  'application/vnd.lime.redirect+json': 'red',
  'application/vnd.iris.calls.media+json': 'teal',
  'application/vnd.lime.contact+json': 'indigo',
  'application/json': 'gray',
  'application/vnd.lime.reply+json': 'violet',
  'application/vnd.lime.reaction+json': 'teal',
  'application/vnd.lime.copy-and-paste+json': 'orange',
};

export function getMessageTypeColor(type: string) {
  if (!(type in messageTypeToColor)) {
    return 'gray';
  }

  return messageTypeToColor[type as MessageType];
}
