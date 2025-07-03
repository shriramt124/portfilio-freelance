/**
 * Form validation utilities
 */
import { VALIDATION_MESSAGES } from '@/app/constants';

// Email validation regex
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

/**
 * Validates if a value is not empty
 * @param value Value to validate
 * @returns True if valid, false otherwise
 */
export const isRequired = (value: string): boolean => {
  return value.trim() !== '';
};

/**
 * Validates if a value is a valid email address
 * @param email Email to validate
 * @returns True if valid, false otherwise
 */
export const isValidEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};

/**
 * Validates if a value meets minimum length requirement
 * @param value Value to validate
 * @param minLength Minimum length required
 * @returns True if valid, false otherwise
 */
export const hasMinLength = (value: string, minLength: number): boolean => {
  return value.length >= minLength;
};

/**
 * Validates if a value meets maximum length requirement
 * @param value Value to validate
 * @param maxLength Maximum length allowed
 * @returns True if valid, false otherwise
 */
export const hasMaxLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength;
};

/**
 * Validates a form field and returns an error message if invalid
 * @param name Field name
 * @param value Field value
 * @param rules Validation rules to apply
 * @returns Error message or null if valid
 */
export const validateField = (
  name: string,
  value: string,
  rules: {
    required?: boolean;
    email?: boolean;
    minLength?: number;
    maxLength?: number;
  }
): string | null => {
  if (rules.required && !isRequired(value)) {
    return VALIDATION_MESSAGES.required;
  }

  if (rules.email && !isValidEmail(value)) {
    return VALIDATION_MESSAGES.email;
  }

  if (rules.minLength && !hasMinLength(value, rules.minLength)) {
    return VALIDATION_MESSAGES.minLength(rules.minLength);
  }

  if (rules.maxLength && !hasMaxLength(value, rules.maxLength)) {
    return VALIDATION_MESSAGES.maxLength(rules.maxLength);
  }

  return null;
};