'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

type ValidationRules<T> = {
  [K in keyof T]?: {
    required?: boolean;
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    validate?: (value: T[K]) => boolean;
    errorMessage?: string;
  };
};

type FormErrors<T> = {
  [K in keyof T]?: string;
};

/**
 * Custom hook for form handling with validation
 * @param initialValues Initial form values
 * @param validationRules Rules for form validation
 * @param onSubmit Function to call on successful form submission
 * @returns Form state and handlers
 */
const useForm = <T extends Record<string, any>>(
  initialValues: T,
  validationRules: ValidationRules<T>,
  onSubmit: (values: T) => Promise<void>
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Reset form to initial values
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
    setIsSuccess(false);
    setSubmitError(null);
  };

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof T]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof T];
        return newErrors;
      });
    }
  };

  // Validate a single field
  const validateField = (name: keyof T, value: any): string | undefined => {
    const rules = validationRules[name];
    if (!rules) return undefined;

    if (rules.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
      return rules.errorMessage || 'This field is required';
    }

    if (rules.pattern && typeof value === 'string' && !rules.pattern.test(value)) {
      return rules.errorMessage || 'Invalid format';
    }

    if (rules.minLength && typeof value === 'string' && value.length < rules.minLength) {
      return rules.errorMessage || `Must be at least ${rules.minLength} characters`;
    }

    if (rules.maxLength && typeof value === 'string' && value.length > rules.maxLength) {
      return rules.errorMessage || `Must be less than ${rules.maxLength} characters`;
    }

    if (rules.validate && !rules.validate(value)) {
      return rules.errorMessage || 'Invalid value';
    }

    return undefined;
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors<T> = {};
    let isValid = true;

    for (const key in validationRules) {
      const fieldName = key as keyof T;
      const error = validateField(fieldName, values[fieldName]);
      
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
        setIsSuccess(true);
      } catch (error) {
        setSubmitError(error instanceof Error ? error.message : 'An error occurred');
        setIsSuccess(false);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    isSuccess,
    submitError,
    handleChange,
    handleSubmit,
    resetForm,
    validateField,
    validateForm
  };
};

export default useForm;