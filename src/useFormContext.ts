import { inject } from 'vue';
import type { InjectionKey } from 'vue';
import { getInjectionKeys } from './injectionKeys';
import type { FormContext } from './types/FormContext';

export const useFormContext = <TFormModel>(): FormContext<TFormModel> => {
  const injectionKeys = getInjectionKeys<TFormModel>();

  return {
    values: injectNonNull(injectionKeys.values),
    setValues: injectNonNull(injectionKeys.setValues),
    setFieldValue: injectNonNull(injectionKeys.setFieldValue),
    touched: injectNonNull(injectionKeys.touched),
    setTouched: injectNonNull(injectionKeys.setTouched),
    setFieldTouched: injectNonNull(injectionKeys.setFieldTouched),
    errors: injectNonNull(injectionKeys.errors),
    isSubmitting: injectNonNull(injectionKeys.isSubmitting),
    setSubmitting: injectNonNull(injectionKeys.setSubmitting),
    hasSubmitted: injectNonNull(injectionKeys.hasSubmitted),
    setHasSubmitted: injectNonNull(injectionKeys.setHasSubmitted),
    validate: injectNonNull(injectionKeys.validate),
    handleSubmit: injectNonNull(injectionKeys.handleSubmit),
  };
};

const injectNonNull = <T>(injectionKey: InjectionKey<T>): T => {
  const injectedValue = inject(injectionKey);

  if (injectionKey == null) {
    throw new Error(
      `Expected 'inject(${(injectionKey as Symbol).toString()})' not to be null`
    );
  } else {
    return injectedValue as T;
  }
};
