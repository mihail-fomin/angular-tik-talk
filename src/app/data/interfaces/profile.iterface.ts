export interface Profile {
    id: number;
    username: string;
    description: string;
    avatarUrl: string | null;
    firstName: string;
    lastName: string;
    middleName: string;
    isActive: boolean;
    stack: string[];
    city: string;
}