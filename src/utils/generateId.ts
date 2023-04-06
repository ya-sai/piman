export const generateId = function(): number {
  const byteArray = new Uint16Array(1);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const crypto = window.crypto || window.msCrypto;
  crypto.getRandomValues(byteArray);
  return byteArray[0]
}
