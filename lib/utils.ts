import 'moment/locale/uk';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumberWithSpaces(value: number): string {
  let numStr = value.toString();
  numStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return numStr;
}

export function formatTimestamp(time: Date): string {
  return moment(time).format('YYYY-MM-DD HH:mm:ss');
}

export function formatDate(date: Date): string {
  return moment(date).locale('urk').utc().format('D MMMM YYYY');
}
