export class BlipError extends Error {
  code: number;
  raw: unknown;

  constructor(description: string, code: number, raw: unknown) {
    super(description);
    this.code = code;
    this.raw = raw;
  }
}
