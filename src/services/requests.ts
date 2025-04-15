import axios, {
  AxiosRequestConfig,
} from 'axios';

const apiClient = axios.create({});


const call = async <T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await apiClient.request<T>({
      url: endpoint,
      ...config,
      data: config?.data,
      params: config?.params,
      headers: {},
    });
    return response.data as T;
  } catch (error) {
    throw error;
  }
};

export const get = async <T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> =>
  call<T>(endpoint, { ...config, method: 'GET' });
