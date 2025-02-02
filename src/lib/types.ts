export type File = {
    id: string;
    name: string;
    parentId: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
    size: string;
};

export type Folder = {
    id: string;
    name: string;
    parentId: string | null;
    createdAt: Date;
    updatedAt: Date;
};
