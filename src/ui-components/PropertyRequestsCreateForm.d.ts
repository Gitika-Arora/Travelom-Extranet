/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PropertyRequestsCreateFormInputValues = {
    userId?: string;
    franchisePropertyCode?: string;
    hotelName?: string;
    hotelAddress?: string;
    hotelCity?: string;
    hotelState?: string;
    hotelCountry?: string;
    hotelZipCode?: string;
    contactName?: string;
    mobile?: string;
    email?: string;
    additional?: string;
    isActive?: boolean;
    isMember?: boolean;
    isDeleted?: boolean;
    createdAt?: string;
    updatedAt?: string;
};
export declare type PropertyRequestsCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    franchisePropertyCode?: ValidationFunction<string>;
    hotelName?: ValidationFunction<string>;
    hotelAddress?: ValidationFunction<string>;
    hotelCity?: ValidationFunction<string>;
    hotelState?: ValidationFunction<string>;
    hotelCountry?: ValidationFunction<string>;
    hotelZipCode?: ValidationFunction<string>;
    contactName?: ValidationFunction<string>;
    mobile?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    additional?: ValidationFunction<string>;
    isActive?: ValidationFunction<boolean>;
    isMember?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PropertyRequestsCreateFormOverridesProps = {
    PropertyRequestsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    franchisePropertyCode?: PrimitiveOverrideProps<TextFieldProps>;
    hotelName?: PrimitiveOverrideProps<TextFieldProps>;
    hotelAddress?: PrimitiveOverrideProps<TextFieldProps>;
    hotelCity?: PrimitiveOverrideProps<TextFieldProps>;
    hotelState?: PrimitiveOverrideProps<TextFieldProps>;
    hotelCountry?: PrimitiveOverrideProps<TextFieldProps>;
    hotelZipCode?: PrimitiveOverrideProps<TextFieldProps>;
    contactName?: PrimitiveOverrideProps<TextFieldProps>;
    mobile?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    additional?: PrimitiveOverrideProps<TextAreaFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    isMember?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PropertyRequestsCreateFormProps = React.PropsWithChildren<{
    overrides?: PropertyRequestsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PropertyRequestsCreateFormInputValues) => PropertyRequestsCreateFormInputValues;
    onSuccess?: (fields: PropertyRequestsCreateFormInputValues) => void;
    onError?: (fields: PropertyRequestsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PropertyRequestsCreateFormInputValues) => PropertyRequestsCreateFormInputValues;
    onValidate?: PropertyRequestsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PropertyRequestsCreateForm(props: PropertyRequestsCreateFormProps): React.ReactElement;
