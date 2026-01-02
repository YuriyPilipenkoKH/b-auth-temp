export const formClasses = {
  container: 'form-container',
  wrapper: 'form-wrapper',

  error: 'form-error',
  loading: 'form-loading',
  spinner: 'spinner',
  space: 'space',
  form: 'form',
  inputContainer: 'input-container',
  input: 'form-input',
  submitButton: 'submit-button',

} as const;

// Create a type from the values
export type FormClassName = typeof formClasses[keyof typeof formClasses];

