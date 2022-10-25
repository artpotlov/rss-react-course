import axios from 'axios';
import { getAllProducts, getLimitProducts, getProductByID } from './api';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

describe('API tests:', () => {
  it('when getLimitsProducts is called and server returned status 200 and one object, data length should be equal 1', async () => {
    axiosMock.get.mockResolvedValueOnce({ status: 200, data: [{}] });
    const data = await getLimitProducts();
    expect(data).toHaveLength(1);
  });

  it('when getAllProducts is called and server returned status 200 and one object, data length should be equal 1', async () => {
    axiosMock.get.mockResolvedValueOnce({ status: 200, data: [{}] });
    const data = await getAllProducts();
    expect(data).toHaveLength(1);
  });

  it('when getProductById is called and server returned status 200 and one object, data id should be equal 1', async () => {
    axiosMock.get.mockResolvedValueOnce({ status: 200, data: { id: 1 } });
    const data = await getProductByID(1);
    expect(data?.id).toEqual(1);
  });

  it('when getLimitsProducts is called and server returned status 404 and one object, data length should be equal 0', async () => {
    axiosMock.get.mockResolvedValueOnce({ status: 404, data: [{}] });
    const data = await getLimitProducts();
    expect(data).toHaveLength(0);
  });

  it('when getAllProducts is called and server returned status 404 and one object, data length should be equal 0', async () => {
    axiosMock.get.mockResolvedValueOnce({ status: 404, data: [{}] });
    const data = await getAllProducts();
    expect(data).toHaveLength(0);
  });

  it('when getProductByID is called and server returned status 404 and one object, data should be equal null', async () => {
    axiosMock.get.mockResolvedValueOnce({ status: 404, data: { id: 1 } });
    const data = await getProductByID(1);
    expect(data).toBeNull();
  });
});
