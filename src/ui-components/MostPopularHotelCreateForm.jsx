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
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createMostPopularHotel } from "../graphql/mutations";
const client = generateClient();
export default function MostPopularHotelCreateForm(props) {
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
    brand: "",
    pid: "",
    propName: "",
    image: "",
    address: "",
    city: "",
    state: "",
    postal: "",
    country: "",
    isActive: false,
    isDeleted: false,
    createdAt: "",
    updatedAt: "",
  };
  const [brand, setBrand] = React.useState(initialValues.brand);
  const [pid, setPid] = React.useState(initialValues.pid);
  const [propName, setPropName] = React.useState(initialValues.propName);
  const [image, setImage] = React.useState(initialValues.image);
  const [address, setAddress] = React.useState(initialValues.address);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [postal, setPostal] = React.useState(initialValues.postal);
  const [country, setCountry] = React.useState(initialValues.country);
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setBrand(initialValues.brand);
    setPid(initialValues.pid);
    setPropName(initialValues.propName);
    setImage(initialValues.image);
    setAddress(initialValues.address);
    setCity(initialValues.city);
    setState(initialValues.state);
    setPostal(initialValues.postal);
    setCountry(initialValues.country);
    setIsActive(initialValues.isActive);
    setIsDeleted(initialValues.isDeleted);
    setCreatedAt(initialValues.createdAt);
    setUpdatedAt(initialValues.updatedAt);
    setErrors({});
  };
  const validations = {
    brand: [],
    pid: [],
    propName: [],
    image: [],
    address: [],
    city: [],
    state: [],
    postal: [],
    country: [],
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
          brand,
          pid,
          propName,
          image,
          address,
          city,
          state,
          postal,
          country,
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
            query: createMostPopularHotel.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "MostPopularHotelCreateForm")}
      {...rest}
    >
      <TextField
        label="Brand"
        isRequired={false}
        isReadOnly={false}
        value={brand}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brand: value,
              pid,
              propName,
              image,
              address,
              city,
              state,
              postal,
              country,
              isActive,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.brand ?? value;
          }
          if (errors.brand?.hasError) {
            runValidationTasks("brand", value);
          }
          setBrand(value);
        }}
        onBlur={() => runValidationTasks("brand", brand)}
        errorMessage={errors.brand?.errorMessage}
        hasError={errors.brand?.hasError}
        {...getOverrideProps(overrides, "brand")}
      ></TextField>
      <TextField
        label="Pid"
        isRequired={false}
        isReadOnly={false}
        value={pid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brand,
              pid: value,
              propName,
              image,
              address,
              city,
              state,
              postal,
              country,
              isActive,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.pid ?? value;
          }
          if (errors.pid?.hasError) {
            runValidationTasks("pid", value);
          }
          setPid(value);
        }}
        onBlur={() => runValidationTasks("pid", pid)}
        errorMessage={errors.pid?.errorMessage}
        hasError={errors.pid?.hasError}
        {...getOverrideProps(overrides, "pid")}
      ></TextField>
      <TextField
        label="Prop name"
        isRequired={false}
        isReadOnly={false}
        value={propName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brand,
              pid,
              propName: value,
              image,
              address,
              city,
              state,
              postal,
              country,
              isActive,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.propName ?? value;
          }
          if (errors.propName?.hasError) {
            runValidationTasks("propName", value);
          }
          setPropName(value);
        }}
        onBlur={() => runValidationTasks("propName", propName)}
        errorMessage={errors.propName?.errorMessage}
        hasError={errors.propName?.hasError}
        {...getOverrideProps(overrides, "propName")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brand,
              pid,
              propName,
              image: value,
              address,
              city,
              state,
              postal,
              country,
              isActive,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
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
              brand,
              pid,
              propName,
              image,
              address: value,
              city,
              state,
              postal,
              country,
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
              brand,
              pid,
              propName,
              image,
              address,
              city: value,
              state,
              postal,
              country,
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
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brand,
              pid,
              propName,
              image,
              address,
              city,
              state: value,
              postal,
              country,
              isActive,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Postal"
        isRequired={false}
        isReadOnly={false}
        value={postal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brand,
              pid,
              propName,
              image,
              address,
              city,
              state,
              postal: value,
              country,
              isActive,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.postal ?? value;
          }
          if (errors.postal?.hasError) {
            runValidationTasks("postal", value);
          }
          setPostal(value);
        }}
        onBlur={() => runValidationTasks("postal", postal)}
        errorMessage={errors.postal?.errorMessage}
        hasError={errors.postal?.hasError}
        {...getOverrideProps(overrides, "postal")}
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
              brand,
              pid,
              propName,
              image,
              address,
              city,
              state,
              postal,
              country: value,
              isActive,
              isDeleted,
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
      <SwitchField
        label="Is active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isActive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              brand,
              pid,
              propName,
              image,
              address,
              city,
              state,
              postal,
              country,
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
              brand,
              pid,
              propName,
              image,
              address,
              city,
              state,
              postal,
              country,
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
              brand,
              pid,
              propName,
              image,
              address,
              city,
              state,
              postal,
              country,
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
              brand,
              pid,
              propName,
              image,
              address,
              city,
              state,
              postal,
              country,
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
