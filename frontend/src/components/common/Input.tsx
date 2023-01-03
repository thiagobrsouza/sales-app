import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";
import { Form } from "react-bootstrap";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

export function Input({ label, id, ...props }: InputProps) {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{label}</Form.Label>
      <input className="form-control" id={id} {...props} />
    </Form.Group>
  )
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  children?: ReactNode;
}

export function SelectForm({ children, label, id }: SelectProps) {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Select id={id} className="mb-3">
        {children}
      </Form.Select>
    </>
  )
}