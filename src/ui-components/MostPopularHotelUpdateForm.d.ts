/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type MostPopularHotelUpdateFormInputValues = {
    brand?: string;
    pid?: string;
    propName?: string;
    image?: string;
    address?: string;
    city?: string;
    state?: string;
    postal?: string;
    country?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: string;
    updatedAt?: string;
};
export declare type MostPopularHotelUpdateFormValidationValues = {
    brand?: ValidationFunction<string>;
    pid?: ValidationFunction<string>;
    propName?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    postal?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    isActive?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MostPopularHotelUpdateFormOverridesProps = {
    MostPopularHotelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    brand?: PrimitiveOverrideProps<TextFieldProps>;
    pid?: PrimitiveOverrideProps<TextFieldProps>;
    propName?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    postal?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MostPopularHotelUpdateFormProps = React.PropsWithChildren<{
    overrides?: MostPopularHotelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mostPopularHotel?: any;
    onSubmit?: (fields: MostPopularHotelUpdateFormInputValues) => MostPopularHotelUpdateFormInputValues;
    onSuccess?: (fields: MostPopularHotelUpdateFormInputValues) => void;
    onError?: (fields: MostPopularHotelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MostPopularHotelUpdateFormInputValues) => MostPopularHotelUpdateFormInputValues;
    onValidate?: MostPopularHotelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MostPopularHotelUpdateForm(props: MostPopularHotelUpdateFormProps): React.ReactElement;
