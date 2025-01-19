interface ColorSwatch {
    [key: string]: {
      value: string;
      textColor: string;
    };
  }

export const colors: Record<string, ColorSwatch> = {
  Core: {
    'teal': {  value: '#407178', textColor: '#1F2937' },
    'white': {  value: '#FFFFFF', textColor: '#1F2937' },
    'black': {value: '#000000', textColor: '#FFFFFF' },
  },
  Grey: {
    'lightest-grey': { value: '#F5F5F5', textColor: '#1F2937' },
    'light-grey-1': { value: '#EBEBEB', textColor: '#1F2937' },
    'medium-grey-1': { value: '#BFDBFE', textColor: '#1F2937' },
    'medium-grey-2': { value: '#93C5FD', textColor: '#1F2937' },
    'medium-grey-3': { value: '#999', textColor: '#FFFFFF' },
    'dark-grey': { value: '#7D7D7D', textColor: '#FFFFFF' },
  },
  Teal: {
    default: { value: '#407178', textColor: '#1F2937' },
    'teal-dark': { value: '#FEF2F2', textColor: '#1F2937' },
    'teal-light': { value: '#FEE2E2', textColor: '#1F2937' },
    'teal-soft': { value: '#F87171', textColor: '#FFFFFF' },
    'red-500': { value: '#EF4444', textColor: '#FFFFFF' },
    'red-600': { value: '#DC2626', textColor: '#FFFFFF' },
  },
  Classification: {
    orange: { value: '#FFCC99', textColor: '#1F2937' },
    purple: { value: '#E1C7FF', textColor: '#1F2937' },
    blue: { value: '#AAC0FF', textColor: '#FFFFFF' },
    green: { value: '#CBF8D0', textColor: '#FFFFFF' },
  },
  Error: {
    'error-red': { value: '#FEF2F2', textColor: '#1F2937' },
    'error-deep-red': { value: '#FEE2E2', textColor: '#1F2937' },
  },
  
};