export default {
  id: 'recycling',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  url: 'https://phl.carto.com:443/api/v2/sql',
  options: {
    params: {
      q: "SELECT * FROM phl.recycling_and_donations where hide_on_finder is null or hide_on_finder::text not in ('TRUE', 'true', 'True', 'T')",
    },
  },
};
