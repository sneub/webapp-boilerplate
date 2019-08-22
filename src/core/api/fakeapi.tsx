const MOCK_DATA = [
  {'foo': 'bar'},
];

export default {
  example: {
    get: () => Promise.resolve(MOCK_DATA),
    post: (data: any) => Promise.resolve(MOCK_DATA),
  },
};
