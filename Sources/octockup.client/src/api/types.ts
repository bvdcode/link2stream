export interface LoginRequest {
  username: string;
  passwordHash: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  role: UserRole;
}

export enum UserRole {
  Blocked = 0,
  Regular = 1,
  Admin = 2,
}

export interface BackupStatus {
  jobName: string;
  lastRun: string;
  duration: string;
  status: BackupStatusType;
}

export enum BackupStatusType {
  Created = 0,
  Running = 1,
  Failed = 2,
  Completed = 3,
}
