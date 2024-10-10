/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
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
export const onCreateBookingHistory = /* GraphQL */ `
  subscription OnCreateBookingHistory(
    $filter: ModelSubscriptionBookingHistoryFilterInput
  ) {
    onCreateBookingHistory(filter: $filter) {
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
export const onUpdateBookingHistory = /* GraphQL */ `
  subscription OnUpdateBookingHistory(
    $filter: ModelSubscriptionBookingHistoryFilterInput
  ) {
    onUpdateBookingHistory(filter: $filter) {
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
export const onDeleteBookingHistory = /* GraphQL */ `
  subscription OnDeleteBookingHistory(
    $filter: ModelSubscriptionBookingHistoryFilterInput
  ) {
    onDeleteBookingHistory(filter: $filter) {
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
export const onCreateFavoriteProperties = /* GraphQL */ `
  subscription OnCreateFavoriteProperties(
    $filter: ModelSubscriptionFavoritePropertiesFilterInput
  ) {
    onCreateFavoriteProperties(filter: $filter) {
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
export const onUpdateFavoriteProperties = /* GraphQL */ `
  subscription OnUpdateFavoriteProperties(
    $filter: ModelSubscriptionFavoritePropertiesFilterInput
  ) {
    onUpdateFavoriteProperties(filter: $filter) {
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
export const onDeleteFavoriteProperties = /* GraphQL */ `
  subscription OnDeleteFavoriteProperties(
    $filter: ModelSubscriptionFavoritePropertiesFilterInput
  ) {
    onDeleteFavoriteProperties(filter: $filter) {
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
export const onCreateMembership = /* GraphQL */ `
  subscription OnCreateMembership(
    $filter: ModelSubscriptionMembershipFilterInput
  ) {
    onCreateMembership(filter: $filter) {
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
export const onUpdateMembership = /* GraphQL */ `
  subscription OnUpdateMembership(
    $filter: ModelSubscriptionMembershipFilterInput
  ) {
    onUpdateMembership(filter: $filter) {
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
export const onDeleteMembership = /* GraphQL */ `
  subscription OnDeleteMembership(
    $filter: ModelSubscriptionMembershipFilterInput
  ) {
    onDeleteMembership(filter: $filter) {
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
export const onCreatePropertyRequests = /* GraphQL */ `
  subscription OnCreatePropertyRequests(
    $filter: ModelSubscriptionPropertyRequestsFilterInput
  ) {
    onCreatePropertyRequests(filter: $filter) {
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
export const onUpdatePropertyRequests = /* GraphQL */ `
  subscription OnUpdatePropertyRequests(
    $filter: ModelSubscriptionPropertyRequestsFilterInput
  ) {
    onUpdatePropertyRequests(filter: $filter) {
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
export const onDeletePropertyRequests = /* GraphQL */ `
  subscription OnDeletePropertyRequests(
    $filter: ModelSubscriptionPropertyRequestsFilterInput
  ) {
    onDeletePropertyRequests(filter: $filter) {
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
export const onCreateMostPopularHotel = /* GraphQL */ `
  subscription OnCreateMostPopularHotel(
    $filter: ModelSubscriptionMostPopularHotelFilterInput
  ) {
    onCreateMostPopularHotel(filter: $filter) {
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
export const onUpdateMostPopularHotel = /* GraphQL */ `
  subscription OnUpdateMostPopularHotel(
    $filter: ModelSubscriptionMostPopularHotelFilterInput
  ) {
    onUpdateMostPopularHotel(filter: $filter) {
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
export const onDeleteMostPopularHotel = /* GraphQL */ `
  subscription OnDeleteMostPopularHotel(
    $filter: ModelSubscriptionMostPopularHotelFilterInput
  ) {
    onDeleteMostPopularHotel(filter: $filter) {
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
export const onCreateHotels = /* GraphQL */ `
  subscription OnCreateHotels($filter: ModelSubscriptionHotelsFilterInput) {
    onCreateHotels(filter: $filter) {
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
export const onUpdateHotels = /* GraphQL */ `
  subscription OnUpdateHotels($filter: ModelSubscriptionHotelsFilterInput) {
    onUpdateHotels(filter: $filter) {
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
export const onDeleteHotels = /* GraphQL */ `
  subscription OnDeleteHotels($filter: ModelSubscriptionHotelsFilterInput) {
    onDeleteHotels(filter: $filter) {
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
