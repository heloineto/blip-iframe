export const attendantStatuses = ['Online', 'Away', 'Invisible', 'Offline'];

export type AttendantStatus = typeof attendantStatuses[number];

export const attendantStatusToLabel: Record<
  AttendantStatus | (string & {}),
  | {
      en: string;
      pt: string;
      es: string;
    }
  | undefined
> = {
  Online: {
    en: 'Online',
    pt: 'Online',
    es: 'En línea',
  },
  Away: {
    en: 'Away',
    pt: 'Ausente',
    es: 'Ausente',
  },
  Invisible: {
    en: 'Invisible',
    pt: 'Invisível',
    es: 'Invisible',
  },
  Offline: {
    en: 'Offline',
    pt: 'Offline',
    es: 'Desconectado',
  },
};

export function getAttendantStatusLabel(
  status: AttendantStatus | (string & {}),
  language: 'en' | 'pt' | 'es' = 'pt'
) {
  const label = attendantStatusToLabel[status];

  if (label) {
    return label[language];
  }

  return status;
}
