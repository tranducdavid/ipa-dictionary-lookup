import { lazyLoad } from 'utils/loadable';

export const IpaLookup = lazyLoad(
  () => import('./index'),
  module => module.IpaLookup,
);
