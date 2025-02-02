import type { File, Folder } from "./types";

export const mockFolders: Folder[] = [
    {
        id: "root",
        name: "root",
        parentId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "1",
        name: "Documents",
        parentId: "root",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "2",
        name: "Photos",
        parentId: "root",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "3",
        name: "Work",
        parentId: "root",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

export const mockFiles: File[] = [
    {
        id: "4",
        name: "lorem.txt",
        parentId: "1",
        url: "/files/lorem.txt",
        createdAt: new Date(),
        updatedAt: new Date(),
        size: "769 B",
    },
    {
        id: "5",
        name: "file2.txt",
        parentId: "1",
        url: "/files/file2.txt",
        createdAt: new Date(),
        updatedAt: new Date(),
        size: "1.2 KB",
    },
    {
        id: "6",
        name: "photo1.jpg",
        parentId: "2",
        url: "/files/photo1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        size: "3.4 MB",
    },
    {
        id: "7",
        name: "Resume.pdf",
        parentId: "1",
        url: "/files/Resume.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
        size: "1.1 MB",
    },
    {
        id: "8",
        name: "1984.epub",
        parentId: "root",
        url: "/files/1984.epub",
        createdAt: new Date(),
        updatedAt: new Date(),
        size: "2.3 MB",
    },
];
