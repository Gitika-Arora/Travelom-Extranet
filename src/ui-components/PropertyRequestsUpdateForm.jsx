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
import { getPropertyRequests } from "../graphql/queries";
import { updatePropertyRequests } from "../graphql/mutations";
const client = generateClient();
export default function PropertyRequestsUpdateForm(props) {
  const {
    id: idProp,
    propertyRequests: propertyRequestsModelProp,
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
    franchisePropertyCode: "",
    hotelName: "",
    hotelAddress: "",
    hotelCity: "",
    hotelState: "",
    hotelCountry: "",
    hotelZipCode: "",
    contactName: "",
    mobile: "",
    email: "",
    additional: "",
    isActive: false,
    isMember: false,
    isDeleted: false,
    createdAt: "",
    updatedAt: "",
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [franchisePropertyCode, setFranchisePropertyCode] = React.useState(
    initialValues.franchisePropertyCode
  );
  const [hotelName, setHotelName] = React.useState(initialValues.hotelName);
  const [hotelAddress, setHotelAddress] = React.useState(
    initialValues.hotelAddress
  );
  const [hotelCity, setHotelCity] = React.useState(initialValues.hotelCity);
  const [hotelState, setHotelState] = React.useState(initialValues.hotelState);
  const [hotelCountry, setHotelCountry] = React.useState(
    initialValues.hotelCountry
  );
  const [hotelZipCode, setHotelZipCode] = React.useState(
    initialValues.hotelZipCode
  );
  const [contactName, setContactName] = React.useState(
    initialValues.contactName
  );
  const [mobile, setMobile] = React.useState(initialValues.mobile);
  const [email, setEmail] = React.useState(initialValues.email);
  const [additional, setAdditional] = React.useState(initialValues.additional);
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [isMember, setIsMember] = React.useState(initialValues.isMember);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = propertyRequestsRecord
      ? { ...initialValues, ...propertyRequestsRecord }
      : initialValues;
    setUserId(cleanValues.userId);
    setFranchisePropertyCode(cleanValues.franchisePropertyCode);
    setHotelName(cleanValues.hotelName);
    setHotelAddress(cleanValues.hotelAddress);
    setHotelCity(cleanValues.hotelCity);
    setHotelState(cleanValues.hotelState);
    setHotelCountry(cleanValues.hotelCountry);
    setHotelZipCode(cleanValues.hotelZipCode);
    setContactName(cleanValues.contactName);
    setMobile(cleanValues.mobile);
    setEmail(cleanValues.email);
    setAdditional(
      typeof cleanValues.additional === "string" ||
        cleanValues.additional === null
        ? cleanValues.additional
        : JSON.stringify(cleanValues.additional)
    );
    setIsActive(cleanValues.isActive);
    setIsMember(cleanValues.isMember);
    setIsDeleted(cleanValues.isDeleted);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [propertyRequestsRecord, setPropertyRequestsRecord] = React.useState(
    propertyRequestsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPropertyRequests.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPropertyRequests
        : propertyRequestsModelProp;
      setPropertyRequestsRecord(record);
    };
    queryData();
  }, [idProp, propertyRequestsModelProp]);
  React.useEffect(resetStateValues, [propertyRequestsRecord]);
  const validations = {
    userId: [{ type: "Required" }],
    franchisePropertyCode: [{ type: "Required" }],
    hotelName: [],
    hotelAddress: [],
    hotelCity: [],
    hotelState: [],
    hotelCountry: [],
    hotelZipCode: [],
    contactName: [],
    mobile: [],
    email: [],
    additional: [{ type: "JSON" }],
    isActive: [],
    isMember: [],
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
          franchisePropertyCode,
          hotelName: hotelName ?? null,
          hotelAddress: hotelAddress ?? null,
          hotelCity: hotelCity ?? null,
          hotelState: hotelState ?? null,
          hotelCountry: hotelCountry ?? null,
          hotelZipCode: hotelZipCode ?? null,
          contactName: contactName ?? null,
          mobile: mobile ?? null,
          email: email ?? null,
          additional: additional ?? null,
          isActive: isActive ?? null,
          isMember: isMember ?? null,
          isDeleted: isDeleted ?? null,
          createdAt: createdAt ?? null,
          updatedAt: updatedAt ?? null,
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
            query: updatePropertyRequests.replaceAll("__typename", ""),
            variables: {
              input: {
                id: propertyRequestsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PropertyRequestsUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId: value,
              franchisePropertyCode,
              hotelName,
              hotelAddress,
              hotelCity,
              hotelState,
              hotelCountry,
              hotelZipCode,
              contactName,
              mobile,
              email,
              additional,
              isActive,
              isMember,
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
      <TextField
        label="Franchise property code"
        isRequired={true}
        isReadOnly={false}
        value={franchisePropertyCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              franchisePropertyCode: value,
              hotelName,
              hotelAddress,
              hotelCity,
              hotelState,
              hotelCountry,
              hotelZipCode,
              contactName,
              mobile,
              email,
              additional,
              isActive,
              isMember,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.franchisePropertyCode ?? value;
          }
          if (errors.franchisePropertyCode?.hasError) {
            runValidationTasks("franchisePropertyCode", value);
          }
          setFranchisePropertyCode(value);
        }}
        onBlur={() =>
          runValidationTasks("franchisePropertyCode", franchisePropertyCode)
        }
        errorMessage={errors.franchisePropertyCode?.errorMessage}
        hasError={errors.franchisePropertyCode?.hasError}
        {...getOverrideProps(overrides, "franchisePropertyCode")}
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
              franchisePropertyCode,
              hotelName: value,
              hotelAddress,
              hotelCity,
              hotelState,
              hotelCountry,
              hotelZipCode,
              contactName,
              mobile,
              email,
              additional,
              isActive,
              isMember,
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
        label="Hotel address"
        isRequired={false}
        isReadOnly={false}
        value={hotelAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              franchisePropertyCode,
              hotelName,
              hotelAddress: value,
              hotelCity,
              hotelState,
              hotelCountry,
              hotelZipCode,
              contactName,
              mobile,
              email,
              additional,
              isActive,
              isMember,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.hotelAddress ?? value;
          }
          if (errors.hotelAddress?.hasError) {
            runValidationTasks("hotelAddress", value);
          }
          setHotelAddress(value);
        }}
        onBlur={() => runValidationTasks("hotelAddress", hotelAddress)}
        errorMessage={errors.hotelAddress?.errorMessage}
        hasError={errors.hotelAddress?.hasError}
        {...getOverrideProps(overrides, "hotelAddress")}
      ></TextField>
      <TextField
        label="Hotel city"
        isRequired={false}
        isReadOnly={false}
        value={hotelCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              franchisePropertyCode,
              hotelName,
              hotelAddress,
              hotelCity: value,
              hotelState,
              hotelCountry,
              hotelZipCode,
              contactName,
              mobile,
              email,
              additional,
              isActive,
              isMember,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.hotelCity ?? value;
          }
          if (errors.hotelCity?.hasError) {
            runValidationTasks("hotelCity", value);
          }
          setHotelCity(value);
        }}
        onBlur={() => runValidationTasks("hotelCity", hotelCity)}
        errorMessage={errors.hotelCity?.errorMessage}
        hasError={errors.hotelCity?.hasError}
        {...getOverrideProps(overrides, "hotelCity")}
      ></TextField>
      <TextField
        label="Hotel state"
        isRequired={false}
        isReadOnly={false}
        value={hotelState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              franchisePropertyCode,
              hotelName,
              hotelAddress,
              hotelCity,
              hotelState: value,
              hotelCountry,
              hotelZipCode,
              contactName,
              mobile,
              email,
              additional,
              isActive,
              isMember,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.hotelState ?? value;
          }
          if (errors.hotelState?.hasError) {
            runValidationTasks("hotelState", value);
          }
          setHotelState(value);
        }}
        onBlur={() => runValidationTasks("hotelState", hotelState)}
        errorMessage={errors.hotelState?.errorMessage}
        hasError={errors.hotelState?.hasError}
        {...getOverrideProps(overrides, "hotelState")}
      ></TextField>
      <TextField
        label="Hotel country"
        isRequired={false}
        isReadOnly={false}
        value={hotelCountry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              franchisePropertyCode,
              hotelName,
              hotelAddress,
              hotelCity,
              hotelState,
              hotelCountry: value,
              hotelZipCode,
              contactName,
              mobile,
              email,
              additional,
              isActive,
              isMember,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.hotelCountry ?? value;
          }
          if (errors.hotelCountry?.hasError) {
            runValidationTasks("hotelCountry", value);
          }
          setHotelCountry(value);
        }}
        onBlur={() => runValidationTasks("hotelCountry", hotelCountry)}
        errorMessage={errors.hotelCountry?.errorMessage}
        hasError={errors.hotelCountry?.hasError}
        {...getOverrideProps(overrides, "hotelCountry")}
      ></TextField>
      <TextField
        label="Hotel zip code"
        isRequired={false}
        isReadOnly={false}
        value={hotelZipCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              franchisePropertyCode,
              hotelName,
              hotelAddress,
              hotelCity,
              hotelState,
              hotelCountry,
              hotelZipCode: value,
              contactName,
              mobile,
              email,
              additional,
              isActive,
              isMember,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.hotelZipCode ?? value;
          }
          if (errors.hotelZipCode?.hasError) {
            runValidationTasks("hotelZipCode", value);
          }
          setHotelZipCode(value);
        }}
        onBlur={() => runValidationTasks("hotelZipCode", hotelZipCode)}
        errorMessage={errors.hotelZipCode?.errorMessage}
        hasError={errors.hotelZipCode?.hasError}
        {...getOverrideProps(overrides, "hotelZipCode")}
      ></TextField>
      <TextField
        label="Contact name"
        isRequired={false}
        isReadOnly={false}
        value={contactName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              franchisePropertyCode,
              hotelName,
              hotelAddress,
              hotelCity,
              hotelState,
              hotelCountry,
              hotelZipCode,
              contactName: value,
              mobile,
              email,
              additional,
              isActive,
              isMember,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.contactName ?? value;
          }
          if (errors.contactName?.hasError) {
            runValidationTasks("contactName", value);
          }
          setContactName(value);
        }}
        onBlur={() => runValidationTasks("contactName", contactName)}
        errorMessage={errors.contactName?.errorMessage}
        hasError={errors.contactName?.hasError}
        {...getOverrideProps(overrides, "contactName")}
      ></TextField>
      <TextField
        label="Mobile"
        isRequired={false}
        isReadOnly={false}
        value={mobile}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              franchisePropertyCode,
              hotelName,
              hotelAddress,
              hotelCity,
              hotelState,
              hotelCountry,
              hotelZipCode,
              contactName,
              mobile: value,
              email,
              additional,
              isActive,
              isMember,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.mobile ?? value;
          }
          if (errors.mobile?.hasError) {
            runValidationTasks("mobile", value);
          }
          setMobile(value);
        }}
        onBlur={() => runValidationTasks("mobile", mobile)}
        errorMessage={errors.mobile?.errorMessage}
        hasError={errors.mobile?.hasError}
        {...getOverrideProps(overrides, "mobile")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              franchisePropertyCode,
              hotelName,
              hotelAddress,
              hotelCity,
              hotelState,
              hotelCountry,
              hotelZipCode,
              contactName,
              mobile,
              email: value,
              additional,
              isActive,
              isMember,
              isDeleted,
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
      <TextAreaField
        label="Additional"
        isRequired={false}
        isReadOnly={false}
        value={additional}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              franchisePropertyCode,
              hotelName,
              hotelAddress,
              hotelCity,
              hotelState,
              hotelCountry,
              hotelZipCode,
              contactName,
              mobile,
              email,
              additional: value,
              isActive,
              isMember,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.additional ?? value;
          }
          if (errors.additional?.hasError) {
            runValidationTasks("additional", value);
          }
          setAdditional(value);
        }}
        onBlur={() => runValidationTasks("additional", additional)}
        errorMessage={errors.additional?.errorMessage}
        hasError={errors.additional?.hasError}
        {...getOverrideProps(overrides, "additional")}
      ></TextAreaField>
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
              franchisePropertyCode,
              hotelName,
              hotelAddress,
              hotelCity,
              hotelState,
              hotelCountry,
              hotelZipCode,
              contactName,
              mobile,
              email,
              additional,
              isActive: value,
              isMember,
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
        label="Is member"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isMember}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              franchisePropertyCode,
              hotelName,
              hotelAddress,
              hotelCity,
              hotelState,
              hotelCountry,
              hotelZipCode,
              contactName,
              mobile,
              email,
              additional,
              isActive,
              isMember: value,
              isDeleted,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.isMember ?? value;
          }
          if (errors.isMember?.hasError) {
            runValidationTasks("isMember", value);
          }
          setIsMember(value);
        }}
        onBlur={() => runValidationTasks("isMember", isMember)}
        errorMessage={errors.isMember?.errorMessage}
        hasError={errors.isMember?.hasError}
        {...getOverrideProps(overrides, "isMember")}
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
              franchisePropertyCode,
              hotelName,
              hotelAddress,
              hotelCity,
              hotelState,
              hotelCountry,
              hotelZipCode,
              contactName,
              mobile,
              email,
              additional,
              isActive,
              isMember,
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
              franchisePropertyCode,
              hotelName,
              hotelAddress,
              hotelCity,
              hotelState,
              hotelCountry,
              hotelZipCode,
              contactName,
              mobile,
              email,
              additional,
              isActive,
              isMember,
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
              franchisePropertyCode,
              hotelName,
              hotelAddress,
              hotelCity,
              hotelState,
              hotelCountry,
              hotelZipCode,
              contactName,
              mobile,
              email,
              additional,
              isActive,
              isMember,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || propertyRequestsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || propertyRequestsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
