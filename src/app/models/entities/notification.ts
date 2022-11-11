import { Schedule } from './schedule';

export interface Notification{
    id: string;
    schedule: Schedule;
    status: string;
    createdOn: string;
    updatedOn: string;
}
