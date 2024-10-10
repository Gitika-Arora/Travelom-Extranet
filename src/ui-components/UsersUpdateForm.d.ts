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
export declare type UsersUpdateFormInputValues = {
    userName?: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    spouse?: string;
    spouseFirstName?: string;
    spouseLastName?: string;
    email?: string;
    profilePicture?: string;
    phoneNumber?: string;
    city?: string;
    zipCode?: string;
    country?: string;
    alternatePhoneNumber?: string;
    bio?: string;
    fcmToken?: string;
    loginType?: string;
    deviceId?: string;
    deviceType?: string;
    dob?: string;
    gender?: string;
    address?: string;
    latitude?: number;
    longitude?: number;
    appVersion?: string;
    subscription?: string;
    subscriptionDate?: string;
    subscriptionExpiryDate?: string;
    subscriptionStatus?: string;
    membershipDetails?: string;
    stripeCustomerId?: string;
    isEmailVerified?: boolean;
    isActive?: boolean;
    isDeleted?: boolean;
    lastAccessed?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type UsersUpdateFormValidationValues = {
    userName?: ValidationFunction<string>;
    fullName?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    spouse?: ValidationFunction<string>;
    spouseFirstName?: ValidationFunction<string>;
    spouseLastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    profilePicture?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    zipCode?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    alternatePhoneNumber?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    fcmToken?: ValidationFunction<string>;
    loginType?: ValidationFunction<string>;
    deviceId?: ValidationFunction<string>;
    deviceType?: ValidationFunction<string>;
    dob?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    latitude?: ValidationFunction<number>;
    longitude?: ValidationFunction<number>;
    appVersion?: ValidationFunction<string>;
    subscription?: ValidationFunction<string>;
    subscriptionDate?: ValidationFunction<string>;
    subscriptionExpiryDate?: ValidationFunction<string>;
    subscriptionStatus?: ValidationFunction<string>;
    membershipDetails?: ValidationFunction<string>;
    stripeCustomerId?: ValidationFunction<string>;
    isEmailVerified?: ValidationFunction<boolean>;
    isActive?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
    lastAccessed?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersUpdateFormOverridesProps = {
    UsersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    fullName?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    spouse?: PrimitiveOverrideProps<TextFieldProps>;
    spouseFirstName?: PrimitiveOverrideProps<TextFieldProps>;
    spouseLastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    profilePicture?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    zipCode?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    alternatePhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    fcmToken?: PrimitiveOverrideProps<TextFieldProps>;
    loginType?: PrimitiveOverrideProps<TextFieldProps>;
    deviceId?: PrimitiveOverrideProps<TextFieldProps>;
    deviceType?: PrimitiveOverrideProps<TextFieldProps>;
    dob?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    latitude?: PrimitiveOverrideProps<TextFieldProps>;
    longitude?: PrimitiveOverrideProps<TextFieldProps>;
    appVersion?: PrimitiveOverrideProps<TextFieldProps>;
    subscription?: PrimitiveOverrideProps<TextFieldProps>;
    subscriptionDate?: PrimitiveOverrideProps<TextFieldProps>;
    subscriptionExpiryDate?: PrimitiveOverrideProps<TextFieldProps>;
    subscriptionStatus?: PrimitiveOverrideProps<TextFieldProps>;
    membershipDetails?: PrimitiveOverrideProps<TextAreaFieldProps>;
    stripeCustomerId?: PrimitiveOverrideProps<TextFieldProps>;
    isEmailVerified?: PrimitiveOverrideProps<SwitchFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    lastAccessed?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    users?: any;
    onSubmit?: (fields: UsersUpdateFormInputValues) => UsersUpdateFormInputValues;
    onSuccess?: (fields: UsersUpdateFormInputValues) => void;
    onError?: (fields: UsersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersUpdateFormInputValues) => UsersUpdateFormInputValues;
    onValidate?: UsersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsersUpdateForm(props: UsersUpdateFormProps): React.ReactElement;
