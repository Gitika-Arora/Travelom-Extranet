/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      userName
      fullName
      firstName
      lastName
      spouse
      spouseFirstName
      spouseLastName
      email
      profilePicture
      phoneNumber
      city
      zipCode
      country
      alternatePhoneNumber
      bio
      fcmToken
      loginType
      deviceId
      deviceType
      dob
      gender
      address
      latitude
      longitude
      appVersion
      subscription
      subscriptionDate
      subscriptionExpiryDate
      subscriptionStatus
      membershipDetails
      stripeCustomerId
      isEmailVerified
      isActive
      isDeleted
      lastAccessed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      userName
      fullName
      firstName
      lastName
      spouse
      spouseFirstName
      spouseLastName
      email
      profilePicture
      phoneNumber
      city
      zipCode
      country
      alternatePhoneNumber
      bio
      fcmToken
      loginType
      deviceId
      deviceType
      dob
      gender
      address
      latitude
      longitude
      appVersion
      subscription
      subscriptionDate
      subscriptionExpiryDate
      subscriptionStatus
      membershipDetails
      stripeCustomerId
      isEmailVerified
      isActive
      isDeleted
      lastAccessed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      userName
      fullName
      firstName
      lastName
      spouse
      spouseFirstName
      spouseLastName
      email
      profilePicture
      phoneNumber
      city
      zipCode
      country
      alternatePhoneNumber
      bio
      fcmToken
      loginType
      deviceId
      deviceType
      dob
      gender
      address
      latitude
      longitude
      appVersion
      subscription
      subscriptionDate
      subscriptionExpiryDate
      subscriptionStatus
      membershipDetails
      stripeCustomerId
      isEmailVerified
      isActive
      isDeleted
      lastAccessed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBookingHistory = /* GraphQL */ `
  mutation CreateBookingHistory(
    $input: CreateBookingHistoryInput!
    $condition: ModelBookingHistoryConditionInput
  ) {
    createBookingHistory(input: $input, condition: $condition) {
      id
      userId
      hotelName
      brand
      property
      room
      adult
      child
      inDate
      outDate
      rateCode
      roomCode
      roomRate
      cardNumber
      cardExpDate
      cardCVVNo
      name
      email
      firstName
      lastName
      phone
      city
      country
      line1
      sessionId
      confirmationNumber
      status
      zipCode
      receipt
      isChangeDisabled
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBookingHistory = /* GraphQL */ `
  mutation UpdateBookingHistory(
    $input: UpdateBookingHistoryInput!
    $condition: ModelBookingHistoryConditionInput
  ) {
    updateBookingHistory(input: $input, condition: $condition) {
      id
      userId
      hotelName
      brand
      property
      room
      adult
      child
      inDate
      outDate
      rateCode
      roomCode
      roomRate
      cardNumber
      cardExpDate
      cardCVVNo
      name
      email
      firstName
      lastName
      phone
      city
      country
      line1
      sessionId
      confirmationNumber
      status
      zipCode
      receipt
      isChangeDisabled
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBookingHistory = /* GraphQL */ `
  mutation DeleteBookingHistory(
    $input: DeleteBookingHistoryInput!
    $condition: ModelBookingHistoryConditionInput
  ) {
    deleteBookingHistory(input: $input, condition: $condition) {
      id
      userId
      hotelName
      brand
      property
      room
      adult
      child
      inDate
      outDate
      rateCode
      roomCode
      roomRate
      cardNumber
      cardExpDate
      cardCVVNo
      name
      email
      firstName
      lastName
      phone
      city
      country
      line1
      sessionId
      confirmationNumber
      status
      zipCode
      receipt
      isChangeDisabled
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createFavoriteProperties = /* GraphQL */ `
  mutation CreateFavoriteProperties(
    $input: CreateFavoritePropertiesInput!
    $condition: ModelFavoritePropertiesConditionInput
  ) {
    createFavoriteProperties(input: $input, condition: $condition) {
      id
      userId
      propertyCode
      brandCode
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateFavoriteProperties = /* GraphQL */ `
  mutation UpdateFavoriteProperties(
    $input: UpdateFavoritePropertiesInput!
    $condition: ModelFavoritePropertiesConditionInput
  ) {
    updateFavoriteProperties(input: $input, condition: $condition) {
      id
      userId
      propertyCode
      brandCode
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteFavoriteProperties = /* GraphQL */ `
  mutation DeleteFavoriteProperties(
    $input: DeleteFavoritePropertiesInput!
    $condition: ModelFavoritePropertiesConditionInput
  ) {
    deleteFavoriteProperties(input: $input, condition: $condition) {
      id
      userId
      propertyCode
      brandCode
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMembership = /* GraphQL */ `
  mutation CreateMembership(
    $input: CreateMembershipInput!
    $condition: ModelMembershipConditionInput
  ) {
    createMembership(input: $input, condition: $condition) {
      id
      userId
      paymentIntentId
      subscriptionType
      subscriptionAmount
      subscriptionAt
      subscriptionExpiryAt
      subscriptionStatus
      receipt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMembership = /* GraphQL */ `
  mutation UpdateMembership(
    $input: UpdateMembershipInput!
    $condition: ModelMembershipConditionInput
  ) {
    updateMembership(input: $input, condition: $condition) {
      id
      userId
      paymentIntentId
      subscriptionType
      subscriptionAmount
      subscriptionAt
      subscriptionExpiryAt
      subscriptionStatus
      receipt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMembership = /* GraphQL */ `
  mutation DeleteMembership(
    $input: DeleteMembershipInput!
    $condition: ModelMembershipConditionInput
  ) {
    deleteMembership(input: $input, condition: $condition) {
      id
      userId
      paymentIntentId
      subscriptionType
      subscriptionAmount
      subscriptionAt
      subscriptionExpiryAt
      subscriptionStatus
      receipt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPropertyRequests = /* GraphQL */ `
  mutation CreatePropertyRequests(
    $input: CreatePropertyRequestsInput!
    $condition: ModelPropertyRequestsConditionInput
  ) {
    createPropertyRequests(input: $input, condition: $condition) {
      id
      userId
      franchisePropertyCode
      hotelName
      hotelAddress
      hotelCity
      hotelState
      hotelCountry
      hotelZipCode
      contactName
      mobile
      email
      additional
      isActive
      isMember
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePropertyRequests = /* GraphQL */ `
  mutation UpdatePropertyRequests(
    $input: UpdatePropertyRequestsInput!
    $condition: ModelPropertyRequestsConditionInput
  ) {
    updatePropertyRequests(input: $input, condition: $condition) {
      id
      userId
      franchisePropertyCode
      hotelName
      hotelAddress
      hotelCity
      hotelState
      hotelCountry
      hotelZipCode
      contactName
      mobile
      email
      additional
      isActive
      isMember
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePropertyRequests = /* GraphQL */ `
  mutation DeletePropertyRequests(
    $input: DeletePropertyRequestsInput!
    $condition: ModelPropertyRequestsConditionInput
  ) {
    deletePropertyRequests(input: $input, condition: $condition) {
      id
      userId
      franchisePropertyCode
      hotelName
      hotelAddress
      hotelCity
      hotelState
      hotelCountry
      hotelZipCode
      contactName
      mobile
      email
      additional
      isActive
      isMember
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMostPopularHotel = /* GraphQL */ `
  mutation CreateMostPopularHotel(
    $input: CreateMostPopularHotelInput!
    $condition: ModelMostPopularHotelConditionInput
  ) {
    createMostPopularHotel(input: $input, condition: $condition) {
      id
      brand
      pid
      propName
      image
      address
      city
      state
      postal
      country
      isActive
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMostPopularHotel = /* GraphQL */ `
  mutation UpdateMostPopularHotel(
    $input: UpdateMostPopularHotelInput!
    $condition: ModelMostPopularHotelConditionInput
  ) {
    updateMostPopularHotel(input: $input, condition: $condition) {
      id
      brand
      pid
      propName
      image
      address
      city
      state
      postal
      country
      isActive
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMostPopularHotel = /* GraphQL */ `
  mutation DeleteMostPopularHotel(
    $input: DeleteMostPopularHotelInput!
    $condition: ModelMostPopularHotelConditionInput
  ) {
    deleteMostPopularHotel(input: $input, condition: $condition) {
      id
      brand
      pid
      propName
      image
      address
      city
      state
      postal
      country
      isActive
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createHotels = /* GraphQL */ `
  mutation CreateHotels(
    $input: CreateHotelsInput!
    $condition: ModelHotelsConditionInput
  ) {
    createHotels(input: $input, condition: $condition) {
      id
      userId
      hotelDescriptiveContents
      brandCode
      hotelCode
      hotelName
      address
      city
      postalCode
      stateCode
      countyCode
      hotelUpdatedInExtranet
      isActive
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateHotels = /* GraphQL */ `
  mutation UpdateHotels(
    $input: UpdateHotelsInput!
    $condition: ModelHotelsConditionInput
  ) {
    updateHotels(input: $input, condition: $condition) {
      id
      userId
      hotelDescriptiveContents
      brandCode
      hotelCode
      hotelName
      address
      city
      postalCode
      stateCode
      countyCode
      hotelUpdatedInExtranet
      isActive
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteHotels = /* GraphQL */ `
  mutation DeleteHotels(
    $input: DeleteHotelsInput!
    $condition: ModelHotelsConditionInput
  ) {
    deleteHotels(input: $input, condition: $condition) {
      id
      userId
      hotelDescriptiveContents
      brandCode
      hotelCode
      hotelName
      address
      city
      postalCode
      stateCode
      countyCode
      hotelUpdatedInExtranet
      isActive
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;
