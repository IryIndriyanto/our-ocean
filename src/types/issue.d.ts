// Define enum untuk kategori dan status isu
enum IssueCategory {
    Trash = 'Trash',
    Pollution = 'Pollution',
    Erosion = 'Erosion',
    Unsafe = 'Unsafe',
    OTHER = "other"
}

enum IssueStatus {
    Reported = 'Reported',
    InProgress = 'In Progress',
    Resolved = 'Resolved'
}

// Definisikan interface untuk IIssue
export interface IIssue {
    id: number;
    user_id: number;
    location_id: number;
    issue_title: string;
    issue_image: string;
    issue_category: IssueCategory;
    issue_status: IssueStatus;
    issue_description: string;
    created_at: Date; 
    updated_at: Date; 
}
