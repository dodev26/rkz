import React, { ComponentProps } from 'react';
import { Form, FormInstance } from 'antd';

export type BaseFormProps = Omit<ComponentProps<typeof Form>, 'onFinish'> & {
  onFinish?: (values: any) => void;
};
export type BaseFormInstance = FormInstance;
// export interface BaseFormInterface<T> extends React.FC<T> {
//   Title: typeof BaseFormTitle;
//   Item: typeof BaseFormItem;
//   List: typeof BaseFormList;
//   useForm: typeof Form.useForm;
//   Provider: typeof Form.Provider;
// }
export const BaseForm = () => {
  return <div>index</div>;
};
