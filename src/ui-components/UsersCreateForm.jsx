/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createUsers } from "../graphql/mutations";
const client = generateClient();
export default function UsersCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userName: "",
    fullName: "",
    firstName: "",
    lastName: "",
    spouse: "",
    spouseFirstName: "",
    spouseLastName: "",
    email: "",
    profilePicture: "",
    phoneNumber: "",
    city: "",
    zipCode: "",
    country: "",
    alternatePhoneNumber: "",
    bio: "",
    fcmToken: "",
    loginType: "",
    deviceId: "",
    deviceType: "",
    dob: "",
    gender: "",
    address: "",
    latitude: "",
    longitude: "",
    appVersion: "",
    subscription: "",
    subscriptionDate: "",
    subscriptionExpiryDate: "",
    subscriptionStatus: "",
    membershipDetails: "",
    stripeCustomerId: "",
    isEmailVerified: false,
    isActive: false,
    isDeleted: false,
    lastAccessed: "",
    createdAt: "",
    updatedAt: "",
  };
  const [userName, setUserName] = React.useState(initialValues.userName);
  const [fullName, setFullName] = React.useState(initialValues.fullName);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [spouse, setSpouse] = React.useState(initialValues.spouse);
  const [spouseFirstName, setSpouseFirstName] = React.useState(
    initialValues.spouseFirstName
  );
  const [spouseLastName, setSpouseLastName] = React.useState(
    initialValues.spouseLastName
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [profilePicture, setProfilePicture] = React.useState(
    initialValues.profilePicture
  );
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [city, setCity] = React.useState(initialValues.city);
  const [zipCode, setZipCode] = React.useState(initialValues.zipCode);
  const [country, setCountry] = React.useState(initialValues.country);
  const [alternatePhoneNumber, setAlternatePhoneNumber] = React.useState(
    initialValues.alternatePhoneNumber
  );
  const [bio, setBio] = React.useState(initialValues.bio);
  const [fcmToken, setFcmToken] = React.useState(initialValues.fcmToken);
  const [loginType, setLoginType] = React.useState(initialValues.loginType);
  const [deviceId, setDeviceId] = React.useState(initialValues.deviceId);
  const [deviceType, setDeviceType] = React.useState(initialValues.deviceType);
  const [dob, setDob] = React.useState(initialValues.dob);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [address, setAddress] = React.useState(initialValues.address);
  const [latitude, setLatitude] = React.useState(initialValues.latitude);
  const [longitude, setLongitude] = React.useState(initialValues.longitude);
  const [appVersion, setAppVersion] = React.useState(initialValues.appVersion);
  const [subscription, setSubscription] = React.useState(
    initialValues.subscription
  );
  const [subscriptionDate, setSubscriptionDate] = React.useState(
    initialValues.subscriptionDate
  );
  const [subscriptionExpiryDate, setSubscriptionExpiryDate] = React.useState(
    initialValues.subscriptionExpiryDate
  );
  const [subscriptionStatus, setSubscriptionStatus] = React.useState(
    initialValues.subscriptionStatus
  );
  const [membershipDetails, setMembershipDetails] = React.useState(
    initialValues.membershipDetails
  );
  const [stripeCustomerId, setStripeCustomerId] = React.useState(
    initialValues.stripeCustomerId
  );
  const [isEmailVerified, setIsEmailVerified] = React.useState(
    initialValues.isEmailVerified
  );
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [lastAccessed, setLastAccessed] = React.useState(
    initialValues.lastAccessed
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserName(initialValues.userName);
    setFullName(initialValues.fullName);
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setSpouse(initialValues.spouse);
    setSpouseFirstName(initialValues.spouseFirstName);
    setSpouseLastName(initialValues.spouseLastName);
    setEmail(initialValues.email);
    setProfilePicture(initialValues.profilePicture);
    setPhoneNumber(initialValues.phoneNumber);
    setCity(initialValues.city);
    setZipCode(initialValues.zipCode);
    setCountry(initialValues.country);
    setAlternatePhoneNumber(initialValues.alternatePhoneNumber);
    setBio(initialValues.bio);
    setFcmToken(initialValues.fcmToken);
    setLoginType(initialValues.loginType);
    setDeviceId(initialValues.deviceId);
    setDeviceType(initialValues.deviceType);
    setDob(initialValues.dob);
    setGender(initialValues.gender);
    setAddress(initialValues.address);
    setLatitude(initialValues.latitude);
    setLongitude(initialValues.longitude);
    setAppVersion(initialValues.appVersion);
    setSubscription(initialValues.subscription);
    setSubscriptionDate(initialValues.subscriptionDate);
    setSubscriptionExpiryDate(initialValues.subscriptionExpiryDate);
    setSubscriptionStatus(initialValues.subscriptionStatus);
    setMembershipDetails(initialValues.membershipDetails);
    setStripeCustomerId(initialValues.stripeCustomerId);
    setIsEmailVerified(initialValues.isEmailVerified);
    setIsActive(initialValues.isActive);
    setIsDeleted(initialValues.isDeleted);
    setLastAccessed(initialValues.lastAccessed);
    setCreatedAt(initialValues.createdAt);
    setUpdatedAt(initialValues.updatedAt);
    setErrors({});
  };
  const validations = {
    userName: [],
    fullName: [],
    firstName: [],
    lastName: [],
    spouse: [],
    spouseFirstName: [],
    spouseLastName: [],
    email: [{ type: "Required" }],
    profilePicture: [],
    phoneNumber: [],
    city: [],
    zipCode: [],
    country: [],
    alternatePhoneNumber: [],
    bio: [],
    fcmToken: [],
    loginType: [],
    deviceId: [],
    deviceType: [],
    dob: [],
    gender: [],
    address: [],
    latitude: [],
    longitude: [],
    appVersion: [],
    subscription: [],
    subscriptionDate: [],
    subscriptionExpiryDate: [],
    subscriptionStatus: [],
    membershipDetails: [{ type: "JSON" }],
    stripeCustomerId: [],
    isEmailVerified: [],
    isActive: [],
    isDeleted: [],
    lastAccessed: [],
    createdAt: [],
    updatedAt: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userName,
          fullName,
          firstName,
          lastName,
          spouse,
          spouseFirstName,
          spouseLastName,
          email,
          profilePicture,
          phoneNumber,
          city,
          zipCode,
          country,
          alternatePhoneNumber,
          bio,
          fcmToken,
          loginType,
          deviceId,
          deviceType,
          dob,
          gender,
          address,
          latitude,
          longitude,
          appVersion,
          subscription,
          subscriptionDate,
          subscriptionExpiryDate,
          subscriptionStatus,
          membershipDetails,
          stripeCustomerId,
          isEmailVerified,
          isActive,
          isDeleted,
          lastAccessed,
          createdAt,
          updatedAt,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createUsers.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UsersCreateForm")}
      {...rest}
    >
      <TextField
        label="User name"
        isRequired={false}
        isReadOnly={false}
        value={userName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName: value,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.userName ?? value;
          }
          if (errors.userName?.hasError) {
            runValidationTasks("userName", value);
          }
          setUserName(value);
        }}
        onBlur={() => runValidationTasks("userName", userName)}
        errorMessage={errors.userName?.errorMessage}
        hasError={errors.userName?.hasError}
        {...getOverrideProps(overrides, "userName")}
      ></TextField>
      <TextField
        label="Full name"
        isRequired={false}
        isReadOnly={false}
        value={fullName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName: value,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.fullName ?? value;
          }
          if (errors.fullName?.hasError) {
            runValidationTasks("fullName", value);
          }
          setFullName(value);
        }}
        onBlur={() => runValidationTasks("fullName", fullName)}
        errorMessage={errors.fullName?.errorMessage}
        hasError={errors.fullName?.hasError}
        {...getOverrideProps(overrides, "fullName")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName: value,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName: value,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Spouse"
        isRequired={false}
        isReadOnly={false}
        value={spouse}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse: value,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.spouse ?? value;
          }
          if (errors.spouse?.hasError) {
            runValidationTasks("spouse", value);
          }
          setSpouse(value);
        }}
        onBlur={() => runValidationTasks("spouse", spouse)}
        errorMessage={errors.spouse?.errorMessage}
        hasError={errors.spouse?.hasError}
        {...getOverrideProps(overrides, "spouse")}
      ></TextField>
      <TextField
        label="Spouse first name"
        isRequired={false}
        isReadOnly={false}
        value={spouseFirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName: value,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.spouseFirstName ?? value;
          }
          if (errors.spouseFirstName?.hasError) {
            runValidationTasks("spouseFirstName", value);
          }
          setSpouseFirstName(value);
        }}
        onBlur={() => runValidationTasks("spouseFirstName", spouseFirstName)}
        errorMessage={errors.spouseFirstName?.errorMessage}
        hasError={errors.spouseFirstName?.hasError}
        {...getOverrideProps(overrides, "spouseFirstName")}
      ></TextField>
      <TextField
        label="Spouse last name"
        isRequired={false}
        isReadOnly={false}
        value={spouseLastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName: value,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.spouseLastName ?? value;
          }
          if (errors.spouseLastName?.hasError) {
            runValidationTasks("spouseLastName", value);
          }
          setSpouseLastName(value);
        }}
        onBlur={() => runValidationTasks("spouseLastName", spouseLastName)}
        errorMessage={errors.spouseLastName?.errorMessage}
        hasError={errors.spouseLastName?.hasError}
        {...getOverrideProps(overrides, "spouseLastName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email: value,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Profile picture"
        isRequired={false}
        isReadOnly={false}
        value={profilePicture}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture: value,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.profilePicture ?? value;
          }
          if (errors.profilePicture?.hasError) {
            runValidationTasks("profilePicture", value);
          }
          setProfilePicture(value);
        }}
        onBlur={() => runValidationTasks("profilePicture", profilePicture)}
        errorMessage={errors.profilePicture?.errorMessage}
        hasError={errors.profilePicture?.hasError}
        {...getOverrideProps(overrides, "profilePicture")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber: value,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city: value,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Zip code"
        isRequired={false}
        isReadOnly={false}
        value={zipCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode: value,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.zipCode ?? value;
          }
          if (errors.zipCode?.hasError) {
            runValidationTasks("zipCode", value);
          }
          setZipCode(value);
        }}
        onBlur={() => runValidationTasks("zipCode", zipCode)}
        errorMessage={errors.zipCode?.errorMessage}
        hasError={errors.zipCode?.hasError}
        {...getOverrideProps(overrides, "zipCode")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country: value,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Alternate phone number"
        isRequired={false}
        isReadOnly={false}
        value={alternatePhoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber: value,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.alternatePhoneNumber ?? value;
          }
          if (errors.alternatePhoneNumber?.hasError) {
            runValidationTasks("alternatePhoneNumber", value);
          }
          setAlternatePhoneNumber(value);
        }}
        onBlur={() =>
          runValidationTasks("alternatePhoneNumber", alternatePhoneNumber)
        }
        errorMessage={errors.alternatePhoneNumber?.errorMessage}
        hasError={errors.alternatePhoneNumber?.hasError}
        {...getOverrideProps(overrides, "alternatePhoneNumber")}
      ></TextField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        value={bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio: value,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.bio ?? value;
          }
          if (errors.bio?.hasError) {
            runValidationTasks("bio", value);
          }
          setBio(value);
        }}
        onBlur={() => runValidationTasks("bio", bio)}
        errorMessage={errors.bio?.errorMessage}
        hasError={errors.bio?.hasError}
        {...getOverrideProps(overrides, "bio")}
      ></TextField>
      <TextField
        label="Fcm token"
        isRequired={false}
        isReadOnly={false}
        value={fcmToken}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken: value,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.fcmToken ?? value;
          }
          if (errors.fcmToken?.hasError) {
            runValidationTasks("fcmToken", value);
          }
          setFcmToken(value);
        }}
        onBlur={() => runValidationTasks("fcmToken", fcmToken)}
        errorMessage={errors.fcmToken?.errorMessage}
        hasError={errors.fcmToken?.hasError}
        {...getOverrideProps(overrides, "fcmToken")}
      ></TextField>
      <TextField
        label="Login type"
        isRequired={false}
        isReadOnly={false}
        value={loginType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType: value,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.loginType ?? value;
          }
          if (errors.loginType?.hasError) {
            runValidationTasks("loginType", value);
          }
          setLoginType(value);
        }}
        onBlur={() => runValidationTasks("loginType", loginType)}
        errorMessage={errors.loginType?.errorMessage}
        hasError={errors.loginType?.hasError}
        {...getOverrideProps(overrides, "loginType")}
      ></TextField>
      <TextField
        label="Device id"
        isRequired={false}
        isReadOnly={false}
        value={deviceId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId: value,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.deviceId ?? value;
          }
          if (errors.deviceId?.hasError) {
            runValidationTasks("deviceId", value);
          }
          setDeviceId(value);
        }}
        onBlur={() => runValidationTasks("deviceId", deviceId)}
        errorMessage={errors.deviceId?.errorMessage}
        hasError={errors.deviceId?.hasError}
        {...getOverrideProps(overrides, "deviceId")}
      ></TextField>
      <TextField
        label="Device type"
        isRequired={false}
        isReadOnly={false}
        value={deviceType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType: value,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.deviceType ?? value;
          }
          if (errors.deviceType?.hasError) {
            runValidationTasks("deviceType", value);
          }
          setDeviceType(value);
        }}
        onBlur={() => runValidationTasks("deviceType", deviceType)}
        errorMessage={errors.deviceType?.errorMessage}
        hasError={errors.deviceType?.hasError}
        {...getOverrideProps(overrides, "deviceType")}
      ></TextField>
      <TextField
        label="Dob"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={dob && convertToLocal(new Date(dob))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob: value,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.dob ?? value;
          }
          if (errors.dob?.hasError) {
            runValidationTasks("dob", value);
          }
          setDob(value);
        }}
        onBlur={() => runValidationTasks("dob", dob)}
        errorMessage={errors.dob?.errorMessage}
        hasError={errors.dob?.hasError}
        {...getOverrideProps(overrides, "dob")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender: value,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address: value,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Latitude"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={latitude}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude: value,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.latitude ?? value;
          }
          if (errors.latitude?.hasError) {
            runValidationTasks("latitude", value);
          }
          setLatitude(value);
        }}
        onBlur={() => runValidationTasks("latitude", latitude)}
        errorMessage={errors.latitude?.errorMessage}
        hasError={errors.latitude?.hasError}
        {...getOverrideProps(overrides, "latitude")}
      ></TextField>
      <TextField
        label="Longitude"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={longitude}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude: value,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.longitude ?? value;
          }
          if (errors.longitude?.hasError) {
            runValidationTasks("longitude", value);
          }
          setLongitude(value);
        }}
        onBlur={() => runValidationTasks("longitude", longitude)}
        errorMessage={errors.longitude?.errorMessage}
        hasError={errors.longitude?.hasError}
        {...getOverrideProps(overrides, "longitude")}
      ></TextField>
      <TextField
        label="App version"
        isRequired={false}
        isReadOnly={false}
        value={appVersion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion: value,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.appVersion ?? value;
          }
          if (errors.appVersion?.hasError) {
            runValidationTasks("appVersion", value);
          }
          setAppVersion(value);
        }}
        onBlur={() => runValidationTasks("appVersion", appVersion)}
        errorMessage={errors.appVersion?.errorMessage}
        hasError={errors.appVersion?.hasError}
        {...getOverrideProps(overrides, "appVersion")}
      ></TextField>
      <TextField
        label="Subscription"
        isRequired={false}
        isReadOnly={false}
        value={subscription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription: value,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.subscription ?? value;
          }
          if (errors.subscription?.hasError) {
            runValidationTasks("subscription", value);
          }
          setSubscription(value);
        }}
        onBlur={() => runValidationTasks("subscription", subscription)}
        errorMessage={errors.subscription?.errorMessage}
        hasError={errors.subscription?.hasError}
        {...getOverrideProps(overrides, "subscription")}
      ></TextField>
      <TextField
        label="Subscription date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={subscriptionDate && convertToLocal(new Date(subscriptionDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate: value,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.subscriptionDate ?? value;
          }
          if (errors.subscriptionDate?.hasError) {
            runValidationTasks("subscriptionDate", value);
          }
          setSubscriptionDate(value);
        }}
        onBlur={() => runValidationTasks("subscriptionDate", subscriptionDate)}
        errorMessage={errors.subscriptionDate?.errorMessage}
        hasError={errors.subscriptionDate?.hasError}
        {...getOverrideProps(overrides, "subscriptionDate")}
      ></TextField>
      <TextField
        label="Subscription expiry date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          subscriptionExpiryDate &&
          convertToLocal(new Date(subscriptionExpiryDate))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate: value,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.subscriptionExpiryDate ?? value;
          }
          if (errors.subscriptionExpiryDate?.hasError) {
            runValidationTasks("subscriptionExpiryDate", value);
          }
          setSubscriptionExpiryDate(value);
        }}
        onBlur={() =>
          runValidationTasks("subscriptionExpiryDate", subscriptionExpiryDate)
        }
        errorMessage={errors.subscriptionExpiryDate?.errorMessage}
        hasError={errors.subscriptionExpiryDate?.hasError}
        {...getOverrideProps(overrides, "subscriptionExpiryDate")}
      ></TextField>
      <TextField
        label="Subscription status"
        isRequired={false}
        isReadOnly={false}
        value={subscriptionStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus: value,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.subscriptionStatus ?? value;
          }
          if (errors.subscriptionStatus?.hasError) {
            runValidationTasks("subscriptionStatus", value);
          }
          setSubscriptionStatus(value);
        }}
        onBlur={() =>
          runValidationTasks("subscriptionStatus", subscriptionStatus)
        }
        errorMessage={errors.subscriptionStatus?.errorMessage}
        hasError={errors.subscriptionStatus?.hasError}
        {...getOverrideProps(overrides, "subscriptionStatus")}
      ></TextField>
      <TextAreaField
        label="Membership details"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails: value,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.membershipDetails ?? value;
          }
          if (errors.membershipDetails?.hasError) {
            runValidationTasks("membershipDetails", value);
          }
          setMembershipDetails(value);
        }}
        onBlur={() =>
          runValidationTasks("membershipDetails", membershipDetails)
        }
        errorMessage={errors.membershipDetails?.errorMessage}
        hasError={errors.membershipDetails?.hasError}
        {...getOverrideProps(overrides, "membershipDetails")}
      ></TextAreaField>
      <TextField
        label="Stripe customer id"
        isRequired={false}
        isReadOnly={false}
        value={stripeCustomerId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId: value,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.stripeCustomerId ?? value;
          }
          if (errors.stripeCustomerId?.hasError) {
            runValidationTasks("stripeCustomerId", value);
          }
          setStripeCustomerId(value);
        }}
        onBlur={() => runValidationTasks("stripeCustomerId", stripeCustomerId)}
        errorMessage={errors.stripeCustomerId?.errorMessage}
        hasError={errors.stripeCustomerId?.hasError}
        {...getOverrideProps(overrides, "stripeCustomerId")}
      ></TextField>
      <SwitchField
        label="Is email verified"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isEmailVerified}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified: value,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.isEmailVerified ?? value;
          }
          if (errors.isEmailVerified?.hasError) {
            runValidationTasks("isEmailVerified", value);
          }
          setIsEmailVerified(value);
        }}
        onBlur={() => runValidationTasks("isEmailVerified", isEmailVerified)}
        errorMessage={errors.isEmailVerified?.errorMessage}
        hasError={errors.isEmailVerified?.hasError}
        {...getOverrideProps(overrides, "isEmailVerified")}
      ></SwitchField>
      <SwitchField
        label="Is active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isActive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive: value,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.isActive ?? value;
          }
          if (errors.isActive?.hasError) {
            runValidationTasks("isActive", value);
          }
          setIsActive(value);
        }}
        onBlur={() => runValidationTasks("isActive", isActive)}
        errorMessage={errors.isActive?.errorMessage}
        hasError={errors.isActive?.hasError}
        {...getOverrideProps(overrides, "isActive")}
      ></SwitchField>
      <SwitchField
        label="Is deleted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isDeleted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted: value,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.isDeleted ?? value;
          }
          if (errors.isDeleted?.hasError) {
            runValidationTasks("isDeleted", value);
          }
          setIsDeleted(value);
        }}
        onBlur={() => runValidationTasks("isDeleted", isDeleted)}
        errorMessage={errors.isDeleted?.errorMessage}
        hasError={errors.isDeleted?.hasError}
        {...getOverrideProps(overrides, "isDeleted")}
      ></SwitchField>
      <TextField
        label="Last accessed"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={lastAccessed && convertToLocal(new Date(lastAccessed))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.lastAccessed ?? value;
          }
          if (errors.lastAccessed?.hasError) {
            runValidationTasks("lastAccessed", value);
          }
          setLastAccessed(value);
        }}
        onBlur={() => runValidationTasks("lastAccessed", lastAccessed)}
        errorMessage={errors.lastAccessed?.errorMessage}
        hasError={errors.lastAccessed?.hasError}
        {...getOverrideProps(overrides, "lastAccessed")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt: value,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={updatedAt && convertToLocal(new Date(updatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              userName,
              fullName,
              firstName,
              lastName,
              spouse,
              spouseFirstName,
              spouseLastName,
              email,
              profilePicture,
              phoneNumber,
              city,
              zipCode,
              country,
              alternatePhoneNumber,
              bio,
              fcmToken,
              loginType,
              deviceId,
              deviceType,
              dob,
              gender,
              address,
              latitude,
              longitude,
              appVersion,
              subscription,
              subscriptionDate,
              subscriptionExpiryDate,
              subscriptionStatus,
              membershipDetails,
              stripeCustomerId,
              isEmailVerified,
              isActive,
              isDeleted,
              lastAccessed,
              createdAt,
              updatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
