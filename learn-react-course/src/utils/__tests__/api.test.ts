import axios from 'axios';
import { getAllProducts, getLimitProducts, getProductByID } from '../api';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

describe('API tests:', () => {
  it('when getLimitsProducts is called and server returned status 200 and one object, data length should be equal 1', async () => {
    axiosMock.get.mockResolvedValueOnce({ status: 200, data: [{}] });
    const response = await getLimitProducts();
    expect(response?.data).toHaveLength(1);
  });

  it('when getAllProducts is called and server returned status 200 and one object, data length should be equal 1', async () => {
    axiosMock.get.mockResolvedValueOnce({ status: 200, data: [{}] });
    const response = await getAllProducts();
    expect(response?.data).toHaveLength(1);
  });

  it('when getProductById is called and server returned status 200 and one object, data id should be equal 1', async () => {
    axiosMock.get.mockResolvedValueOnce({ status: 200, data: { id: 1 } });
    const response = await getProductByID(1);
    expect(response?.data).toHaveProperty('id', 1);
  });

  it('when getLimitsProducts is called and server returned status 404, the data should be has an error property', async () => {
    axiosMock.get.mockResolvedValueOnce({ status: 404, data: { error: 'Not Found' } });
    const response = await getLimitProducts();
    expect(response?.data).toHaveProperty('error', 'Not Found');
  });

  it('when getAllProducts is called and server returned status 404, the data should be equal has an error property', async () => {
    axiosMock.get.mockResolvedValueOnce({ status: 404, data: { error: 'Not Found' } });
    const response = await getAllProducts();
    expect(response?.data).toHaveProperty('error', 'Not Found');
  });

  it('when getProductByID is called with wrong id and server returned status 404, data should be has an error property', async () => {
    axiosMock.get.mockResolvedValueOnce({ status: 404, data: { error: 'Not Found' } });
    const response = await getProductByID(-1);
    expect(response?.data).toHaveProperty('error', 'Not Found');
  });

  it('when getLimitProducts returned nothing should be called an exception', async () => {
    axiosMock.get.mockRejectedValueOnce(null);
    const response = await getLimitProducts();
    expect(response).toBeNull();
  });

  it('when getAllProducts returned nothing should be called an exception', async () => {
    axiosMock.get.mockRejectedValueOnce(null);
    const response = await getAllProducts();
    expect(response).toBeNull();
  });

  it('when getProductByID returned nothing should be called an exception', async () => {
    axiosMock.get.mockRejectedValueOnce(null);
    const response = await getProductByID(1);
    expect(response).toBeNull();
  });
});
