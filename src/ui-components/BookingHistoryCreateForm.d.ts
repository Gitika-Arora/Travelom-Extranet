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
export declare type BookingHistoryCreateFormInputValues = {
    userId?: string;
    hotelName?: string;
    brand?: string;
    property?: string;
    room?: string;
    adult?: string;
    child?: string;
    inDate?: string;
    outDate?: string;
    rateCode?: string;
    roomCode?: string;
    roomRate?: string;
    cardNumber?: string;
    cardExpDate?: string;
    cardCVVNo?: string;
    name?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    city?: string;
    country?: string;
    line1?: string;
    sessionId?: string;
    confirmationNumber?: string;
    status?: string;
    zipCode?: string;
    receipt?: string;
    isChangeDisabled?: boolean;
    createdAt?: string;
    updatedAt?: string;
};
export declare type BookingHistoryCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    hotelName?: ValidationFunction<string>;
    brand?: ValidationFunction<string>;
    property?: ValidationFunction<string>;
    room?: ValidationFunction<string>;
    adult?: ValidationFunction<string>;
    child?: ValidationFunction<string>;
    inDate?: ValidationFunction<string>;
    outDate?: ValidationFunction<string>;
    rateCode?: ValidationFunction<string>;
    roomCode?: ValidationFunction<string>;
    roomRate?: ValidationFunction<string>;
    cardNumber?: ValidationFunction<string>;
    cardExpDate?: ValidationFunction<string>;
    cardCVVNo?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    line1?: ValidationFunction<string>;
    sessionId?: ValidationFunction<string>;
    confirmationNumber?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    zipCode?: ValidationFunction<string>;
    receipt?: ValidationFunction<string>;
    isChangeDisabled?: ValidationFunction<boolean>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookingHistoryCreateFormOverridesProps = {
    BookingHistoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    hotelName?: PrimitiveOverrideProps<TextFieldProps>;
    brand?: PrimitiveOverrideProps<TextFieldProps>;
    property?: PrimitiveOverrideProps<TextFieldProps>;
    room?: PrimitiveOverrideProps<TextFieldProps>;
    adult?: PrimitiveOverrideProps<TextFieldProps>;
    child?: PrimitiveOverrideProps<TextFieldProps>;
    inDate?: PrimitiveOverrideProps<TextFieldProps>;
    outDate?: PrimitiveOverrideProps<TextFieldProps>;
    rateCode?: PrimitiveOverrideProps<TextFieldProps>;
    roomCode?: PrimitiveOverrideProps<TextFieldProps>;
    roomRate?: PrimitiveOverrideProps<TextFieldProps>;
    cardNumber?: PrimitiveOverrideProps<TextFieldProps>;
    cardExpDate?: PrimitiveOverrideProps<TextFieldProps>;
    cardCVVNo?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    line1?: PrimitiveOverrideProps<TextFieldProps>;
    sessionId?: PrimitiveOverrideProps<TextFieldProps>;
    confirmationNumber?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    zipCode?: PrimitiveOverrideProps<TextFieldProps>;
    receipt?: PrimitiveOverrideProps<TextAreaFieldProps>;
    isChangeDisabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BookingHistoryCreateFormProps = React.PropsWithChildren<{
    overrides?: BookingHistoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BookingHistoryCreateFormInputValues) => BookingHistoryCreateFormInputValues;
    onSuccess?: (fields: BookingHistoryCreateFormInputValues) => void;
    onError?: (fields: BookingHistoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookingHistoryCreateFormInputValues) => BookingHistoryCreateFormInputValues;
    onValidate?: BookingHistoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function BookingHistoryCreateForm(props: BookingHistoryCreateFormProps): React.ReactElement;
