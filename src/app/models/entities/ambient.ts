export interface Ambient {
    id: string;
    availabilities: [];
    characteristics: [];
    name: string;
    type: string;
    reference: string;
    number: number;
    isActive: boolean;
    createdOn: string;
    updatedOn: string;
}

export interface AmbientMaintenance{
    id: string;
    ambient: Ambient;
    isDone: boolean;
    startDate: string;
    endDate: string;
    createdOn: string;
    updatedOn: string;
}