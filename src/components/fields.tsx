import { useId, type ComponentProps } from "react";

const controlClass =
  "h-11 w-full min-w-0 rounded-lg border border-line bg-white px-3 text-base text-ink transition-colors focus:border-forest aria-invalid:border-danger disabled:bg-sand sm:text-sm";

type FieldProps = { label: string; error?: string };

function FieldShell({
  id,
  label,
  error,
  children,
}: FieldProps & { id: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({ label, error, ...inputProps }: FieldProps & ComponentProps<"input">) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} error={error}>
      <input
        id={id}
        className={controlClass}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...inputProps}
      />
    </FieldShell>
  );
}

export function SelectField({ label, error, children, ...selectProps }: FieldProps & ComponentProps<"select">) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} error={error}>
      <select
        id={id}
        className={controlClass}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...selectProps}
      >
        {children}
      </select>
    </FieldShell>
  );
}

export function GuestOptions({ max }: { max: number }) {
  return Array.from({ length: max }, (_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1} {index === 0 ? "guest" : "guests"}
    </option>
  ));
}
