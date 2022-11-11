import { SubjectName } from './subject';

export interface Course {
    id: string;
    name: string;
    subjects: SubjectName;
    isActive: boolean;
    createdOn: string;
    updatedOn: string;
}
