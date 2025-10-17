import { useState, useCallback } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    
    Object.entries(values).forEach(([key, value]) => {
      if (!value || value.trim() === '') {
        const fieldNames = {
          name: 'กรุณากรอกชื่อ',
          email: 'กรุณากรอกอีเมล',
          message: 'กรุณากรอกข้อความ'
        };
        newErrors[key] = fieldNames[key] || `${key} จำเป็นต้องกรอก`;
      }
      
      if (key === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[key] = 'กรุณากรอกอีเมลให้ถูกต้อง';
        }
      }
      
      if (key === 'name' && value && value.length < 2) {
        newErrors[key] = 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร';
      }
      
      if (key === 'message' && value && value.length < 10) {
        newErrors[key] = 'ข้อความต้องมีอย่างน้อย 10 ตัวอักษร';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values]);

  const resetForm = useCallback(() => {
    setValues(initialState);
    setErrors({});
    setIsSubmitting(false);
  }, [initialState]);

  return {
    values,
    errors,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    validateForm,
    resetForm
  };
};