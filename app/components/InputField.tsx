function ExclamationCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}
function hasErrorStyle(error: string | undefined) {
  return error
    ? "block w-full rounded-md border-1 text-red-900 border-0 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500"
    : "block w-full rounded-md border-1 border-gray-200 focus:ring-gray-300 focus:border-gray-300 focus:placeholder-pink-500 py-1.5 pr-10 sm:text-sm sm:leading-6";
}

interface FieldInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  error?: string;
}

export default function FieldInput({
  label,
  name,
  id,
  type = "text",
  placeholder,
  defaultValue,
  error,
}: FieldInputProps) {
  return (
    <div className="my-4">
      <label
        htmlFor={name}
        className="block text-xs font-medium leading-4 text-gray-700"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          id={id}
          type={type}
          name={name}
          className={hasErrorStyle(error)}
          placeholder={error || placeholder}
          defaultValue={defaultValue}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
          </div>
        )}
      </div>
    </div>
  );
}
