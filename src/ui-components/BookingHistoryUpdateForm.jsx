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
import { getBookingHistory } from "../graphql/queries";
import { updateBookingHistory } from "../graphql/mutations";
const client = generateClient();
export default function BookingHistoryUpdateForm(props) {
  const {
    id: idProp,
    bookingHistory: bookingHistoryModelProp,
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
    hotelName: "",
    brand: "",
    property: "",
    room: "",
    adult: "",
    child: "",
    inDate: "",
    outDate: "",
    rateCode: "",
    roomCode: "",
    roomRate: "",
    cardNumber: "",
    cardExpDate: "",
    cardCVVNo: "",
    name: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    country: "",
    line1: "",
    sessionId: "",
    confirmationNumber: "",
    status: "",
    zipCode: "",
    receipt: "",
    isChangeDisabled: false,
    createdAt: "",
    updatedAt: "",
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [hotelName, setHotelName] = React.useState(initialValues.hotelName);
  const [brand, setBrand] = React.useState(initialValues.brand);
  const [property, setProperty] = React.useState(initialValues.property);
  const [room, setRoom] = React.useState(initialValues.room);
  const [adult, setAdult] = React.useState(initialValues.adult);
  const [child, setChild] = React.useState(initialValues.child);
  const [inDate, setInDate] = React.useState(initialValues.inDate);
  const [outDate, setOutDate] = React.useState(initialValues.outDate);
  const [rateCode, setRateCode] = React.useState(initialValues.rateCode);
  const [roomCode, setRoomCode] = React.useState(initialValues.roomCode);
  const [roomRate, setRoomRate] = React.useState(initialValues.roomRate);
  const [cardNumber, setCardNumber] = React.useState(initialValues.cardNumber);
  const [cardExpDate, setCardExpDate] = React.useState(
    initialValues.cardExpDate
  );
  const [cardCVVNo, setCardCVVNo] = React.useState(initialValues.cardCVVNo);
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [city, setCity] = React.useState(initialValues.city);
  const [country, setCountry] = React.useState(initialValues.country);
  const [line1, setLine1] = React.useState(initialValues.line1);
  const [sessionId, setSessionId] = React.useState(initialValues.sessionId);
  const [confirmationNumber, setConfirmationNumber] = React.useState(
    initialValues.confirmationNumber
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [zipCode, setZipCode] = React.useState(initialValues.zipCode);
  const [receipt, setReceipt] = React.useState(initialValues.receipt);
  const [isChangeDisabled, setIsChangeDisabled] = React.useState(
    initialValues.isChangeDisabled
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bookingHistoryRecord
      ? { ...initialValues, ...bookingHistoryRecord }
      : initialValues;
    setUserId(cleanValues.userId);
    setHotelName(cleanValues.hotelName);
    setBrand(cleanValues.brand);
    setProperty(cleanValues.property);
    setRoom(cleanValues.room);
    setAdult(cleanValues.adult);
    setChild(cleanValues.child);
    setInDate(cleanValues.inDate);
    setOutDate(cleanValues.outDate);
    setRateCode(cleanValues.rateCode);
    setRoomCode(cleanValues.roomCode);
    setRoomRate(cleanValues.roomRate);
    setCardNumber(cleanValues.cardNumber);
    setCardExpDate(cleanValues.cardExpDate);
    setCardCVVNo(cleanValues.cardCVVNo);
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setPhone(cleanValues.phone);
    setCity(cleanValues.city);
    setCountry(cleanValues.country);
    setLine1(cleanValues.line1);
    setSessionId(cleanValues.sessionId);
    setConfirmationNumber(cleanValues.confirmationNumber);
    setStatus(cleanValues.status);
    setZipCode(cleanValues.zipCode);
    setReceipt(
      typeof cleanValues.receipt === "string" || cleanValues.receipt === null
        ? cleanValues.receipt
        : JSON.stringify(cleanValues.receipt)
    );
    setIsChangeDisabled(cleanValues.isChangeDisabled);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [bookingHistoryRecord, setBookingHistoryRecord] = React.useState(
    bookingHistoryModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBookingHistory.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBookingHistory
        : bookingHistoryModelProp;
      setBookingHistoryRecord(record);
    };
    queryData();
  }, [idProp, bookingHistoryModelProp]);
  React.useEffect(resetStateValues, [bookingHistoryRecord]);
  const validations = {
    userId: [{ type: "Required" }],
    hotelName: [],
    brand: [],
    property: [],
    room: [],
    adult: [],
    child: [],
    inDate: [],
    outDate: [],
    rateCode: [],
    roomCode: [],
    roomRate: [],
    cardNumber: [],
    cardExpDate: [],
    cardCVVNo: [],
    name: [],
    email: [],
    firstName: [],
    lastName: [],
    phone: [],
    city: [],
    country: [],
    line1: [],
    sessionId: [],
    confirmationNumber: [],
    status: [],
    zipCode: [],
    receipt: [{ type: "JSON" }],
    isChangeDisabled: [],
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
          hotelName: hotelName ?? null,
          brand: brand ?? null,
          property: property ?? null,
          room: room ?? null,
          adult: adult ?? null,
          child: child ?? null,
          inDate: inDate ?? null,
          outDate: outDate ?? null,
          rateCode: rateCode ?? null,
          roomCode: roomCode ?? null,
          roomRate: roomRate ?? null,
          cardNumber: cardNumber ?? null,
          cardExpDate: cardExpDate ?? null,
          cardCVVNo: cardCVVNo ?? null,
          name: name ?? null,
          email: email ?? null,
          firstName: firstName ?? null,
          lastName: lastName ?? null,
          phone: phone ?? null,
          city: city ?? null,
          country: country ?? null,
          line1: line1 ?? null,
          sessionId: sessionId ?? null,
          confirmationNumber: confirmationNumber ?? null,
          status: status ?? null,
          zipCode: zipCode ?? null,
          receipt: receipt ?? null,
          isChangeDisabled: isChangeDisabled ?? null,
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
            query: updateBookingHistory.replaceAll("__typename", ""),
            variables: {
              input: {
                id: bookingHistoryRecord.id,
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
      {...getOverrideProps(overrides, "BookingHistoryUpdateForm")}
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
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
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
        label="Hotel name"
        isRequired={false}
        isReadOnly={false}
        value={hotelName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName: value,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
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
        label="Brand"
        isRequired={false}
        isReadOnly={false}
        value={brand}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand: value,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
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
        label="Property"
        isRequired={false}
        isReadOnly={false}
        value={property}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property: value,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.property ?? value;
          }
          if (errors.property?.hasError) {
            runValidationTasks("property", value);
          }
          setProperty(value);
        }}
        onBlur={() => runValidationTasks("property", property)}
        errorMessage={errors.property?.errorMessage}
        hasError={errors.property?.hasError}
        {...getOverrideProps(overrides, "property")}
      ></TextField>
      <TextField
        label="Room"
        isRequired={false}
        isReadOnly={false}
        value={room}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room: value,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.room ?? value;
          }
          if (errors.room?.hasError) {
            runValidationTasks("room", value);
          }
          setRoom(value);
        }}
        onBlur={() => runValidationTasks("room", room)}
        errorMessage={errors.room?.errorMessage}
        hasError={errors.room?.hasError}
        {...getOverrideProps(overrides, "room")}
      ></TextField>
      <TextField
        label="Adult"
        isRequired={false}
        isReadOnly={false}
        value={adult}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult: value,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.adult ?? value;
          }
          if (errors.adult?.hasError) {
            runValidationTasks("adult", value);
          }
          setAdult(value);
        }}
        onBlur={() => runValidationTasks("adult", adult)}
        errorMessage={errors.adult?.errorMessage}
        hasError={errors.adult?.hasError}
        {...getOverrideProps(overrides, "adult")}
      ></TextField>
      <TextField
        label="Child"
        isRequired={false}
        isReadOnly={false}
        value={child}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child: value,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.child ?? value;
          }
          if (errors.child?.hasError) {
            runValidationTasks("child", value);
          }
          setChild(value);
        }}
        onBlur={() => runValidationTasks("child", child)}
        errorMessage={errors.child?.errorMessage}
        hasError={errors.child?.hasError}
        {...getOverrideProps(overrides, "child")}
      ></TextField>
      <TextField
        label="In date"
        isRequired={false}
        isReadOnly={false}
        value={inDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate: value,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.inDate ?? value;
          }
          if (errors.inDate?.hasError) {
            runValidationTasks("inDate", value);
          }
          setInDate(value);
        }}
        onBlur={() => runValidationTasks("inDate", inDate)}
        errorMessage={errors.inDate?.errorMessage}
        hasError={errors.inDate?.hasError}
        {...getOverrideProps(overrides, "inDate")}
      ></TextField>
      <TextField
        label="Out date"
        isRequired={false}
        isReadOnly={false}
        value={outDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate: value,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.outDate ?? value;
          }
          if (errors.outDate?.hasError) {
            runValidationTasks("outDate", value);
          }
          setOutDate(value);
        }}
        onBlur={() => runValidationTasks("outDate", outDate)}
        errorMessage={errors.outDate?.errorMessage}
        hasError={errors.outDate?.hasError}
        {...getOverrideProps(overrides, "outDate")}
      ></TextField>
      <TextField
        label="Rate code"
        isRequired={false}
        isReadOnly={false}
        value={rateCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode: value,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.rateCode ?? value;
          }
          if (errors.rateCode?.hasError) {
            runValidationTasks("rateCode", value);
          }
          setRateCode(value);
        }}
        onBlur={() => runValidationTasks("rateCode", rateCode)}
        errorMessage={errors.rateCode?.errorMessage}
        hasError={errors.rateCode?.hasError}
        {...getOverrideProps(overrides, "rateCode")}
      ></TextField>
      <TextField
        label="Room code"
        isRequired={false}
        isReadOnly={false}
        value={roomCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode: value,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.roomCode ?? value;
          }
          if (errors.roomCode?.hasError) {
            runValidationTasks("roomCode", value);
          }
          setRoomCode(value);
        }}
        onBlur={() => runValidationTasks("roomCode", roomCode)}
        errorMessage={errors.roomCode?.errorMessage}
        hasError={errors.roomCode?.hasError}
        {...getOverrideProps(overrides, "roomCode")}
      ></TextField>
      <TextField
        label="Room rate"
        isRequired={false}
        isReadOnly={false}
        value={roomRate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate: value,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.roomRate ?? value;
          }
          if (errors.roomRate?.hasError) {
            runValidationTasks("roomRate", value);
          }
          setRoomRate(value);
        }}
        onBlur={() => runValidationTasks("roomRate", roomRate)}
        errorMessage={errors.roomRate?.errorMessage}
        hasError={errors.roomRate?.hasError}
        {...getOverrideProps(overrides, "roomRate")}
      ></TextField>
      <TextField
        label="Card number"
        isRequired={false}
        isReadOnly={false}
        value={cardNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber: value,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.cardNumber ?? value;
          }
          if (errors.cardNumber?.hasError) {
            runValidationTasks("cardNumber", value);
          }
          setCardNumber(value);
        }}
        onBlur={() => runValidationTasks("cardNumber", cardNumber)}
        errorMessage={errors.cardNumber?.errorMessage}
        hasError={errors.cardNumber?.hasError}
        {...getOverrideProps(overrides, "cardNumber")}
      ></TextField>
      <TextField
        label="Card exp date"
        isRequired={false}
        isReadOnly={false}
        value={cardExpDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate: value,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.cardExpDate ?? value;
          }
          if (errors.cardExpDate?.hasError) {
            runValidationTasks("cardExpDate", value);
          }
          setCardExpDate(value);
        }}
        onBlur={() => runValidationTasks("cardExpDate", cardExpDate)}
        errorMessage={errors.cardExpDate?.errorMessage}
        hasError={errors.cardExpDate?.hasError}
        {...getOverrideProps(overrides, "cardExpDate")}
      ></TextField>
      <TextField
        label="Card cvv no"
        isRequired={false}
        isReadOnly={false}
        value={cardCVVNo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo: value,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.cardCVVNo ?? value;
          }
          if (errors.cardCVVNo?.hasError) {
            runValidationTasks("cardCVVNo", value);
          }
          setCardCVVNo(value);
        }}
        onBlur={() => runValidationTasks("cardCVVNo", cardCVVNo)}
        errorMessage={errors.cardCVVNo?.errorMessage}
        hasError={errors.cardCVVNo?.hasError}
        {...getOverrideProps(overrides, "cardCVVNo")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name: value,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
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
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email: value,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
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
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName: value,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
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
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName: value,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
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
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone: value,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
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
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city: value,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
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
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country: value,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
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
        label="Line1"
        isRequired={false}
        isReadOnly={false}
        value={line1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1: value,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.line1 ?? value;
          }
          if (errors.line1?.hasError) {
            runValidationTasks("line1", value);
          }
          setLine1(value);
        }}
        onBlur={() => runValidationTasks("line1", line1)}
        errorMessage={errors.line1?.errorMessage}
        hasError={errors.line1?.hasError}
        {...getOverrideProps(overrides, "line1")}
      ></TextField>
      <TextField
        label="Session id"
        isRequired={false}
        isReadOnly={false}
        value={sessionId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId: value,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.sessionId ?? value;
          }
          if (errors.sessionId?.hasError) {
            runValidationTasks("sessionId", value);
          }
          setSessionId(value);
        }}
        onBlur={() => runValidationTasks("sessionId", sessionId)}
        errorMessage={errors.sessionId?.errorMessage}
        hasError={errors.sessionId?.hasError}
        {...getOverrideProps(overrides, "sessionId")}
      ></TextField>
      <TextField
        label="Confirmation number"
        isRequired={false}
        isReadOnly={false}
        value={confirmationNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber: value,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.confirmationNumber ?? value;
          }
          if (errors.confirmationNumber?.hasError) {
            runValidationTasks("confirmationNumber", value);
          }
          setConfirmationNumber(value);
        }}
        onBlur={() =>
          runValidationTasks("confirmationNumber", confirmationNumber)
        }
        errorMessage={errors.confirmationNumber?.errorMessage}
        hasError={errors.confirmationNumber?.hasError}
        {...getOverrideProps(overrides, "confirmationNumber")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status: value,
              zipCode,
              receipt,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
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
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode: value,
              receipt,
              isChangeDisabled,
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
      <TextAreaField
        label="Receipt"
        isRequired={false}
        isReadOnly={false}
        value={receipt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt: value,
              isChangeDisabled,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.receipt ?? value;
          }
          if (errors.receipt?.hasError) {
            runValidationTasks("receipt", value);
          }
          setReceipt(value);
        }}
        onBlur={() => runValidationTasks("receipt", receipt)}
        errorMessage={errors.receipt?.errorMessage}
        hasError={errors.receipt?.hasError}
        {...getOverrideProps(overrides, "receipt")}
      ></TextAreaField>
      <SwitchField
        label="Is change disabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isChangeDisabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.isChangeDisabled ?? value;
          }
          if (errors.isChangeDisabled?.hasError) {
            runValidationTasks("isChangeDisabled", value);
          }
          setIsChangeDisabled(value);
        }}
        onBlur={() => runValidationTasks("isChangeDisabled", isChangeDisabled)}
        errorMessage={errors.isChangeDisabled?.errorMessage}
        hasError={errors.isChangeDisabled?.hasError}
        {...getOverrideProps(overrides, "isChangeDisabled")}
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
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
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
              hotelName,
              brand,
              property,
              room,
              adult,
              child,
              inDate,
              outDate,
              rateCode,
              roomCode,
              roomRate,
              cardNumber,
              cardExpDate,
              cardCVVNo,
              name,
              email,
              firstName,
              lastName,
              phone,
              city,
              country,
              line1,
              sessionId,
              confirmationNumber,
              status,
              zipCode,
              receipt,
              isChangeDisabled,
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
          isDisabled={!(idProp || bookingHistoryModelProp)}
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
              !(idProp || bookingHistoryModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
