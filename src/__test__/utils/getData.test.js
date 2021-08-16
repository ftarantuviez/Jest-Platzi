import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('LLamar API', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://google.com')
      .then((response, _) => {
        expect(response.data).toEqual('12345');
      })
      .catch(console.log);

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
