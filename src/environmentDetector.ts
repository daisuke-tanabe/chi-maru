import { UAParser } from 'ua-parser-js';

export type DeviceType = string | undefined;
export type EnvironmentDetector = (userAgent: string | undefined) => DeviceType;

const environmentDetector: EnvironmentDetector = (userAgent) => {
  return userAgent ? new UAParser().setUA(userAgent).getDevice().type : undefined
};
export default environmentDetector;
