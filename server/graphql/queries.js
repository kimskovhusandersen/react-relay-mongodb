import { Viewer } from './new_types';

module.exports = {
  viewer: {
    type: Viewer,
    resolve: () => ({
      id: 'VIEWER_ID',
    }),
  },
};
