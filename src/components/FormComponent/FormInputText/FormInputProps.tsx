import {
  Control,
  UseFormSetValue
} from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};

export interface IFormInputProps {
  name: string;
  control: Control;
  label: string;
  setValue?: UseFormSetValue<Inputs>;
}
