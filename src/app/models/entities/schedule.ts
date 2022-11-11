import { Ambient } from "./ambient";
import { Course } from "./course";
import { UserValid } from "./user";
import { SubjectName } from './subject'

export interface Schedule {
    id: string;
    user: UserValid;
    ambient: Ambient;
    course: Course;
    subjectName: SubjectName;
    startDate: string;
    endDate: string;
    isActive: boolean;
    createdOn: string;
    updatedOn: string;
}
