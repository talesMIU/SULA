export class Ambient {
    id!: string;
    availabilities!: [];
    characteristics!: [];
    name!: string;
    type!: string;
    reference!: string;
    number!: number;
    isActive!: boolean;
    createdOn!: string;
    updatedOn!: string;
}

export class AmbientMaintenance{
    id!: string;
    ambient!: Ambient;
    isDone!: boolean;
    startDate!: Date;
    endDate!: Date;
    createdOn!: string;
    updatedOn!: string;
}