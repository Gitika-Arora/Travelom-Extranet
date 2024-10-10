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
import { createHotels } from "../graphql/mutations";
const client = generateClient();
export default function HotelsCreateForm(props) {
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
    userId: "",
    hotelDescriptiveContents: "",
    brandCode: "",
    hotelCode: "",
    hotelName: "",
    address: "",
    city: "",
    postalCode: "",
    stateCode: "",
    countyCode: "",
    hotelUpdatedInExtranet: false,
    isActive: false,
    isDeleted: false,
    createdAt: "",
    updatedAt: "",
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [hotelDescriptiveContents, setHotelDescriptiveContents] =
    React.useState(initialValues.hotelDescriptiveContents);
  const [brandCode, setBrandCode] = React.useState(initialValues.brandCode);
  const [hotelCode, setHotelCode] = React.useState(initialValues.hotelCode);
  const [hotelName, setHotelName] = React.useState(initialValues.hotelName);
  const [address, setAddress] = React.useState(initialValues.address);
  const [city, setCity] = React.useState(initialValues.city);
  const [postalCode, setPostalCode] = React.useState(initialValues.postalCode);
  const [stateCode, setStateCode] = React.useState(initialValues.stateCode);
  const [countyCode, setCountyCode] = React.useState(initialValues.countyCode);
  const [hotelUpdatedInExtranet, setHotelUpdatedInExtranet] = React.useState(
    initialValues.hotelUpdatedInExtranet
  );
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserId(initialValues.userId);
    setHotelDescriptiveContents(initialValues.hotelDescriptiveContents);
    setBrandCode(initialValues.brandCode);
    setHotelCode(initialValues.hotelCode);
    setHotelName(initialValues.hotelName);
    setAddress(initialValues.address);
    setCity(initialValues.city);
    setPostalCode(initialValues.postalCode);
    setStateCode(initialValues.stateCode);
    setCountyCode(initialValues.countyCode);
    setHotelUpdatedInExtranet(initialValues.hotelUpdatedInExtranet);
    setIsActive(initialValues.isActive);
    setIsDeleted(initialValues.isDeleted);
    setCreatedAt(initialValues.createdAt);
    setUpdatedAt(initialValues.updatedAt);
    setErrors({});
  };
  const validations = {
    userId: [],
    hotelDescriptiveContents: [{ type: "JSON" }],
    brandCode: [],
    hotelCode: [{ type: "Required" }],
    hotelName: [],
    address: [],
    city: [],
    postalCode: [],
    stateCode: [],
    countyCode: [],
    hotelUpdatedInExtranet: [],
    isActive: [],
    isDeleted: [],
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
          userId,
          hotelDescriptiveContents,
          brandCode,
          hotelCode,
          hotelName,
          address,
          city,
          postalCode,
          stateCode,
          countyCode,
          hotelUpdatedInExtranet,
          isActive,
          isDeleted,
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
            query: createHotels.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "HotelsCreateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId: value,
              hotelDescriptiveContents,
              brandCode,
              hotelCode,
              hotelName,
              address,
              city,
              postalCode,
              stateCode,
              countyCode,
              hotelUpdatedInExtranet,
              isActive,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.userId ?? value;
          }
          if (errors.userId?.hasError) {
            runValidationTasks("userId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("userId", userId)}
        errorMessage={errors.userId?.errorMessage}
        hasError={errors.userId?.hasError}
        {...getOverrideProps(overrides, "userId")}
      ></TextField>
      <TextAreaField
        label="Hotel descriptive contents"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelDescriptiveContents: value,
              brandCode,
              hotelCode,
              hotelName,
              address,
              city,
              postalCode,
              stateCode,
              countyCode,
              hotelUpdatedInExtranet,
              isActive,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.hotelDescriptiveContents ?? value;
          }
          if (errors.hotelDescriptiveContents?.hasError) {
            runValidationTasks("hotelDescriptiveContents", value);
          }
          setHotelDescriptiveContents(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "hotelDescriptiveContents",
            hotelDescriptiveContents
          )
        }
        errorMessage={errors.hotelDescriptiveContents?.errorMessage}
        hasError={errors.hotelDescriptiveContents?.hasError}
        {...getOverrideProps(overrides, "hotelDescriptiveContents")}
      ></TextAreaField>
      <TextField
        label="Brand code"
        isRequired={false}
        isReadOnly={false}
        value={brandCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelDescriptiveContents,
              brandCode: value,
              hotelCode,
              hotelName,
              address,
              city,
              postalCode,
              stateCode,
              countyCode,
              hotelUpdatedInExtranet,
              isActive,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.brandCode ?? value;
          }
          if (errors.brandCode?.hasError) {
            runValidationTasks("brandCode", value);
          }
          setBrandCode(value);
        }}
        onBlur={() => runValidationTasks("brandCode", brandCode)}
        errorMessage={errors.brandCode?.errorMessage}
        hasError={errors.brandCode?.hasError}
        {...getOverrideProps(overrides, "brandCode")}
      ></TextField>
      <TextField
        label="Hotel code"
        isRequired={true}
        isReadOnly={false}
        value={hotelCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelDescriptiveContents,
              brandCode,
              hotelCode: value,
              hotelName,
              address,
              city,
              postalCode,
              stateCode,
              countyCode,
              hotelUpdatedInExtranet,
              isActive,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.hotelCode ?? value;
          }
          if (errors.hotelCode?.hasError) {
            runValidationTasks("hotelCode", value);
          }
          setHotelCode(value);
        }}
        onBlur={() => runValidationTasks("hotelCode", hotelCode)}
        errorMessage={errors.hotelCode?.errorMessage}
        hasError={errors.hotelCode?.hasError}
        {...getOverrideProps(overrides, "hotelCode")}
      ></TextField>
      <TextField
        label="Hotel name"
        isRequired={false}
        isReadOnly={false}
        value={hotelName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelDescriptiveContents,
              brandCode,
              hotelCode,
              hotelName: value,
              address,
              city,
              postalCode,
              stateCode,
              countyCode,
              hotelUpdatedInExtranet,
              isActive,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.hotelName ?? value;
          }
          if (errors.hotelName?.hasError) {
            runValidationTasks("hotelName", value);
          }
          setHotelName(value);
        }}
        onBlur={() => runValidationTasks("hotelName", hotelName)}
        errorMessage={errors.hotelName?.errorMessage}
        hasError={errors.hotelName?.hasError}
        {...getOverrideProps(overrides, "hotelName")}
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
              userId,
              hotelDescriptiveContents,
              brandCode,
              hotelCode,
              hotelName,
              address: value,
              city,
              postalCode,
              stateCode,
              countyCode,
              hotelUpdatedInExtranet,
              isActive,
              isDeleted,
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
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelDescriptiveContents,
              brandCode,
              hotelCode,
              hotelName,
              address,
              city: value,
              postalCode,
              stateCode,
              countyCode,
              hotelUpdatedInExtranet,
              isActive,
              isDeleted,
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
        label="Postal code"
        isRequired={false}
        isReadOnly={false}
        value={postalCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelDescriptiveContents,
              brandCode,
              hotelCode,
              hotelName,
              address,
              city,
              postalCode: value,
              stateCode,
              countyCode,
              hotelUpdatedInExtranet,
              isActive,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.postalCode ?? value;
          }
          if (errors.postalCode?.hasError) {
            runValidationTasks("postalCode", value);
          }
          setPostalCode(value);
        }}
        onBlur={() => runValidationTasks("postalCode", postalCode)}
        errorMessage={errors.postalCode?.errorMessage}
        hasError={errors.postalCode?.hasError}
        {...getOverrideProps(overrides, "postalCode")}
      ></TextField>
      <TextField
        label="State code"
        isRequired={false}
        isReadOnly={false}
        value={stateCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelDescriptiveContents,
              brandCode,
              hotelCode,
              hotelName,
              address,
              city,
              postalCode,
              stateCode: value,
              countyCode,
              hotelUpdatedInExtranet,
              isActive,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.stateCode ?? value;
          }
          if (errors.stateCode?.hasError) {
            runValidationTasks("stateCode", value);
          }
          setStateCode(value);
        }}
        onBlur={() => runValidationTasks("stateCode", stateCode)}
        errorMessage={errors.stateCode?.errorMessage}
        hasError={errors.stateCode?.hasError}
        {...getOverrideProps(overrides, "stateCode")}
      ></TextField>
      <TextField
        label="County code"
        isRequired={false}
        isReadOnly={false}
        value={countyCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelDescriptiveContents,
              brandCode,
              hotelCode,
              hotelName,
              address,
              city,
              postalCode,
              stateCode,
              countyCode: value,
              hotelUpdatedInExtranet,
              isActive,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.countyCode ?? value;
          }
          if (errors.countyCode?.hasError) {
            runValidationTasks("countyCode", value);
          }
          setCountyCode(value);
        }}
        onBlur={() => runValidationTasks("countyCode", countyCode)}
        errorMessage={errors.countyCode?.errorMessage}
        hasError={errors.countyCode?.hasError}
        {...getOverrideProps(overrides, "countyCode")}
      ></TextField>
      <SwitchField
        label="Hotel updated in extranet"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hotelUpdatedInExtranet}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              hotelDescriptiveContents,
              brandCode,
              hotelCode,
              hotelName,
              address,
              city,
              postalCode,
              stateCode,
              countyCode,
              hotelUpdatedInExtranet: value,
              isActive,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.hotelUpdatedInExtranet ?? value;
          }
          if (errors.hotelUpdatedInExtranet?.hasError) {
            runValidationTasks("hotelUpdatedInExtranet", value);
          }
          setHotelUpdatedInExtranet(value);
        }}
        onBlur={() =>
          runValidationTasks("hotelUpdatedInExtranet", hotelUpdatedInExtranet)
        }
        errorMessage={errors.hotelUpdatedInExtranet?.errorMessage}
        hasError={errors.hotelUpdatedInExtranet?.hasError}
        {...getOverrideProps(overrides, "hotelUpdatedInExtranet")}
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
              userId,
              hotelDescriptiveContents,
              brandCode,
              hotelCode,
              hotelName,
              address,
              city,
              postalCode,
              stateCode,
              countyCode,
              hotelUpdatedInExtranet,
              isActive: value,
              isDeleted,
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
              userId,
              hotelDescriptiveContents,
              brandCode,
              hotelCode,
              hotelName,
              address,
              city,
              postalCode,
              stateCode,
              countyCode,
              hotelUpdatedInExtranet,
              isActive,
              isDeleted: value,
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
              userId,
              hotelDescriptiveContents,
              brandCode,
              hotelCode,
              hotelName,
              address,
              city,
              postalCode,
              stateCode,
              countyCode,
              hotelUpdatedInExtranet,
              isActive,
              isDeleted,
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
              userId,
              hotelDescriptiveContents,
              brandCode,
              hotelCode,
              hotelName,
              address,
              city,
              postalCode,
              stateCode,
              countyCode,
              hotelUpdatedInExtranet,
              isActive,
              isDeleted,
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
