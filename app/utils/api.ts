/**
 * API utilities for making requests and handling responses
 */
import { API_ENDPOINTS } from '@/app/constants';

/**
 * Generic API error class
 */
export class ApiError extends Error {
  status: number;
  data?: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

/**
 * Generic function to handle API responses
 * @param response Fetch response object
 * @returns Parsed response data
 * @throws ApiError if response is not ok
 */
async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type');
  const isJson = contentType && contentType.includes('application/json');
  
  const data = isJson ? await response.json() : await response.text();
  
  if (!response.ok) {
    const message = isJson && data.error ? data.error : 'An error occurred';
    throw new ApiError(message, response.status, data);
  }
  
  return data as T;
}

/**
 * Send a contact form submission
 * @param formData Contact form data
 * @returns Response data
 */
export async function sendContactForm(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const response = await fetch(API_ENDPOINTS.contact, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    return handleResponse(response);
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      error instanceof Error ? error.message : 'An unknown error occurred',
      500
    );
  }
}