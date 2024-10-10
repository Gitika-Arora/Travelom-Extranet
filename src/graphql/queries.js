/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getBookingHistory = /* GraphQL */ `
  query GetBookingHistory($id: ID!) {
    getBookingHistory(id: $id) {
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
export const listBookingHistories = /* GraphQL */ `
  query ListBookingHistories(
    $id: ID
    $filter: ModelBookingHistoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBookingHistories(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getFavoriteProperties = /* GraphQL */ `
  query GetFavoriteProperties($id: ID!) {
    getFavoriteProperties(id: $id) {
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
export const listFavoriteProperties = /* GraphQL */ `
  query ListFavoriteProperties(
    $id: ID
    $filter: ModelFavoritePropertiesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFavoriteProperties(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        userId
        propertyCode
        brandCode
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMembership = /* GraphQL */ `
  query GetMembership($id: ID!) {
    getMembership(id: $id) {
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
export const listMemberships = /* GraphQL */ `
  query ListMemberships(
    $id: ID
    $filter: ModelMembershipFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMemberships(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPropertyRequests = /* GraphQL */ `
  query GetPropertyRequests($id: ID!) {
    getPropertyRequests(id: $id) {
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
export const listPropertyRequests = /* GraphQL */ `
  query ListPropertyRequests(
    $id: ID
    $filter: ModelPropertyRequestsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPropertyRequests(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getMostPopularHotel = /* GraphQL */ `
  query GetMostPopularHotel($id: ID!) {
    getMostPopularHotel(id: $id) {
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
export const listMostPopularHotels = /* GraphQL */ `
  query ListMostPopularHotels(
    $id: ID
    $filter: ModelMostPopularHotelFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMostPopularHotels(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getHotels = /* GraphQL */ `
  query GetHotels($id: ID!) {
    getHotels(id: $id) {
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
export const listHotels = /* GraphQL */ `
  query ListHotels(
    $id: ID
    $filter: ModelHotelsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listHotels(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUserByEmail = /* GraphQL */ `
  query GetUserByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUserByBookingHistory = /* GraphQL */ `
  query GetUserByBookingHistory(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookingHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByBookingHistory(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getFavoritePropertiesByUserId = /* GraphQL */ `
  query GetFavoritePropertiesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelfavoritePropertiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getFavoritePropertiesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        propertyCode
        brandCode
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMembershipByUserId = /* GraphQL */ `
  query GetMembershipByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelmembershipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getMembershipByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPropertyRequestsByUserId = /* GraphQL */ `
  query GetPropertyRequestsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPropertyRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPropertyRequestsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPropertyByPropertyCode = /* GraphQL */ `
  query GetPropertyByPropertyCode(
    $franchisePropertyCode: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPropertyRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPropertyByPropertyCode(
      franchisePropertyCode: $franchisePropertyCode
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getHotelByHotelCode = /* GraphQL */ `
  query GetHotelByHotelCode(
    $hotelCode: String!
    $sortDirection: ModelSortDirection
    $filter: ModelHotelsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getHotelByHotelCode(
      hotelCode: $hotelCode
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
