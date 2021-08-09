import { Card } from '../types';

export function parseJSONFromLocalStorage(
  key: string,
  defaultValue: Card[]
): Card[] {
  const json = localStorage.getItem(key);

  if (!json) {
    return defaultValue;
  }

  const data = JSON.parse(json);

  return data;
}

export function stringifyJSONToLocalStorage(key: string, value: Card[]): void {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}
