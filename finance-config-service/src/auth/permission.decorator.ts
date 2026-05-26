import { SetMetadata } from '@nestjs/common';

export const PERMISSION_KEY = 'permission';
export const CheckPermission = (moduleName: string, action: string) =>
  SetMetadata(PERMISSION_KEY, { module: moduleName, action });
