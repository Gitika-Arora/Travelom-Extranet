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
export declare type HotelsCreateFormInputValues = {
    userId?: string;
    hotelDescriptiveContents?: string;
    brandCode?: string;
    hotelCode?: string;
    hotelName?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    stateCode?: string;
    countyCode?: string;
    hotelUpdatedInExtranet?: boolean;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: string;
    updatedAt?: string;
};
export declare type HotelsCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    hotelDescriptiveContents?: ValidationFunction<string>;
    brandCode?: ValidationFunction<string>;
    hotelCode?: ValidationFunction<string>;
    hotelName?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    postalCode?: ValidationFunction<string>;
    stateCode?: ValidationFunction<string>;
    countyCode?: ValidationFunction<string>;
    hotelUpdatedInExtranet?: ValidationFunction<boolean>;
    isActive?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HotelsCreateFormOverridesProps = {
    HotelsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    hotelDescriptiveContents?: PrimitiveOverrideProps<TextAreaFieldProps>;
    brandCode?: PrimitiveOverrideProps<TextFieldProps>;
    hotelCode?: PrimitiveOverrideProps<TextFieldProps>;
    hotelName?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    postalCode?: PrimitiveOverrideProps<TextFieldProps>;
    stateCode?: PrimitiveOverrideProps<TextFieldProps>;
    countyCode?: PrimitiveOverrideProps<TextFieldProps>;
    hotelUpdatedInExtranet?: PrimitiveOverrideProps<SwitchFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HotelsCreateFormProps = React.PropsWithChildren<{
    overrides?: HotelsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HotelsCreateFormInputValues) => HotelsCreateFormInputValues;
    onSuccess?: (fields: HotelsCreateFormInputValues) => void;
    onError?: (fields: HotelsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HotelsCreateFormInputValues) => HotelsCreateFormInputValues;
    onValidate?: HotelsCreateFormValidationValues;
} & React.CSSProperties>;
export default function HotelsCreateForm(props: HotelsCreateFormProps): React.ReactElement;
