import { ProfileIds } from '../interfaces/User';

const ProfileManagement: { [key in ProfileIds]: number } = {
  admin: 1,
  vend: 2,
  cli: 3,
};

export const VerifyPermissions = (
  profile: ProfileIds,
  loggedProfile: ProfileIds = 'cli'
) => ProfileManagement[profile] >= ProfileManagement[loggedProfile];
