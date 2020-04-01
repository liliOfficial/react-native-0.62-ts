export interface Job {
    jobId: String;
    jobTitle: JobTitle;
    company: Company;
    wagePerHourInCents: number;
    milesToTravel: number;
    shifts: Shift[];
    branch: string;
    branchPhoneNumber: string;
    requirements?: string[];
}

interface JobTitle {
    name: string;
    imageUrl: string;
}

interface Company {
    name: string;
    address: Address;
    reportTo: ReportTo;
}

interface ReportTo {
    name: string;
    phone?: string;
}

interface Shift {
    startDate: string;
    endDate: string;
}

interface Address {
    formattedAddress: string;
    zoneId: string;
}

export interface User {
    address: Address;
    email: string;
    firstName: string;
    lastName: string;
    maxJobDistance: number;
    phoneNumber: string;
    workerId: string;
}

export interface UserId {
    workerId: string;
}


