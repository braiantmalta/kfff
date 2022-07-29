import { Role } from '../role';

export type Permission = {
  id: number;
  resource: Resource;
  role: Role;
  can_create: boolean;
  can_read: boolean;
  can_update: boolean;
  can_delete: boolean;
};

type Resource = {
  id: number;
  name: string;
  description: string;
};

export type InputPermission = {
  resource_id?: number;
  role_id?: number;
  can_create?: boolean;
  can_read?: boolean;
  can_update?: boolean;
  can_delete?: boolean;
};
