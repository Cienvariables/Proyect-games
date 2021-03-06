import React from 'react';
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username</label>
      <input type="text" name="name" {...register('name', { required: true })} />
      <label>Email</label>
      <input type="email" name="email" {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
      <label>Password</label>
      <input type="password" name="password" {...register('password', { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/ })} />
      <button>Register</button>
    </form>);
}