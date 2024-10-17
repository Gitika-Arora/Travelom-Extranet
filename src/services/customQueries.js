export const list_Hotels = /* GraphQL */ `
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
        brandCode
        hotelCode
        hotelName
        city
        isActive
        isDeleted
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
