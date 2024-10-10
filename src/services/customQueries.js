export const get_Hotels = /* GraphQL */ `
  query GetHotels($id: ID) {
    getHotels(id: $id) {
      id
      hotelDescriptiveContents
      brandCode
      hotelCode
      hotelCityCode
      hotelName
      brandName
      isActive
      isDeleted
      createdAt
      updatedAt
    }
  }
`;
export const getHotels = /* GraphQL */ `
  query GetHotels($id: ID!) {
    getHotels(id: $id) {
      id
      hotelDescriptiveContents
      brandCode
      hotelCode
      hotelCityCode
      hotelCodeContext
      hotelName
      brandName
      isActive
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;