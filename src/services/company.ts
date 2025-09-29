import {useQuery} from '@tanstack/react-query';
import {api} from '../api';
import type {Company} from '@/types/company';

export const fetchCompany = async (): Promise<Company> => {
  const response = await api.get<Company>(`/core/v2/app/store/config/?format=json&app_variant=mobile`);
  return response;
};

export const useCompany = () => {
  return useQuery({
    queryKey: ['company'],
    queryFn: () => fetchCompany(),
  });
};