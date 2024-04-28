import { Children, PropsWithChildren, cloneElement, useRef } from 'react';

type FieldProps = {
  label?: string;
  errorMessage?: string;
};

export default function Field({ label, children, errorMessage }: PropsWithChildren<FieldProps>) {
  const id = useRef((Date.now() * Math.random()).toString(16));

  return (
    <div>
      {label && <label htmlFor={id.current}>{label}</label>}
      {/* @ts-expect-error */}
      {Children.map(children, (child) => cloneElement(child, { id: id.current }))}
      {errorMessage && <div className="red-400">{errorMessage}</div>}
    </div>
  );
}
