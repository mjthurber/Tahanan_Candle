import { gql } from "@apollo/client";

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ProductInput]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  query getAllProducts {
    products {
      _id
      name
      description
      fragranceNotes
      signatureNotes
      inspiration
      intendedExperience
      pleaseNote
      image
      quantity
      price
      size
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          fragranceNotes
          signatureNotes
          inspiration
          intendedExperience
          pleaseNote
          price
          quantity
          image
          size
        }
      }
    }
  }
`;
