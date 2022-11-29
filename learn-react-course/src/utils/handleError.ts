import axios from 'axios';

export const handleError = (error: unknown): string => {
  if (axios.isAxiosError(error) && error.response) {
    return error.response.data;
  }

  if (axios.isAxiosError(error) && error.request && error.request instanceof XMLHttpRequest) {
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Bad request';
};
