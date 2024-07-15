export interface SystemMessage {
  message: string;
  type: 'error' | 'info' | 'success' | 'warning';
  show?: boolean;
}
