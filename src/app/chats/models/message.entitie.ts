import { Timestamp } from '@firebase/firestore'; 

export interface Message {
  id?: string; 
  text: string;
  senderId: string;
  timestamp: Timestamp;
  chatId: string;
  isRead?: boolean;
}