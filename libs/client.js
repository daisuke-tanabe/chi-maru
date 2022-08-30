import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'k5govv1a2k',
  apiKey: process.env.API_KEY,
});
