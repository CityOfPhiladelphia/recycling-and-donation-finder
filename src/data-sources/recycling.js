export default {
  id: 'recycling',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  url: 'https://phl.carto.com:443/api/v2/sql',
  options: {
    params: {
      q: 'select * from recycling_and_donations',
    },
  },
};
