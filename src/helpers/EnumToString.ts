/**
 * Conver Enum to String
 * @param _enum Enum
 * @returns string type
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const EnumToString = (_enum: object) =>
  Object.keys(_enum)
    .map((key) => _enum[key])
    .filter((value) => typeof value === 'string') as string[];
