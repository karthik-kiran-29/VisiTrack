# VisiTracks API Documentation

## Overview

VisiTracks is an API service that provides user authentication and visitor tracking functionality. This documentation outlines the available endpoints, their required parameters, and example responses.

## Base URL

For development: `http://localhost:3000/api`

## Authentication

Most endpoints require authentication using either:
- JWT token (obtained after signin)
- API key (created through the `/auth/key` endpoint)

## API Endpoints

### User Management

#### Sign Up
Creates a new user account.

- **URL**: `/v1/signup`
- **Method**: `POST`
- **Auth Required**: No
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "name": "String",
    "email": "String",
    "password": "String"
  }
  ```

- **Example**:
  ```json
  {
    "name": "karthik",
    "email": "kk.da.29@gmail.com",
    "password": "hahahah"
  }
  ```

#### Sign In
Authenticates a user and returns a JWT token.

- **URL**: `/v1/signin`
- **Method**: `POST`
- **Auth Required**: No
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "email": "String",
    "password": "String"
  }
  ```

- **Example**:
  ```json
  {
    "email": "madhan@kce.ac.in",
    "password": "madhan1234"
  }
  ```

### API Key Management

#### Create Access Key
Generate a new API key for integrations.

- **URL**: `/auth/key`
- **Method**: `POST`
- **Auth Required**: Yes (JWT token)
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "name": "String"
  }
  ```

- **Example**:
  ```json
  {
    "name": "LinkedIn"
  }
  ```

#### Get All API Keys
Lists all API keys associated with the authenticated user.

- **URL**: `/auth/key`
- **Method**: `GET`
- **Auth Required**: Yes (JWT token)

#### Delete API Key
Removes an API key from the system.

- **URL**: `/auth/key`
- **Method**: `DELETE`
- **Auth Required**: Yes (JWT token)
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "keyid": "String"
  }
  ```

- **Example**:
  ```json
  {
    "keyid": "67ea2bc104a299481d9290d2"
  }
  ```

### Visitor Tracking

#### Get Visitors
Retrieves visitor data for a specific tracking ID.

- **URL**: `/visitor/:trackingId`
- **Method**: `GET`
- **Auth Required**: Yes (JWT token)
- **URL Parameters**: `trackingId` - The unique identifier for the tracking session

- **Example**:
  ```
  /visitor/67ea2c7d1b93a9310095b73f
  ```

## Error Handling

The API returns appropriate HTTP status codes along with error messages in the response body:

- `200 OK`: Request successful
- `201 Created`: Resource created successfully
- `400 Bad Request`: Invalid request parameters
- `401 Unauthorized`: Missing or invalid authentication
- `403 Forbidden`: Authenticated but not authorized
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server-side error

## Rate Limiting

Please note that API requests are subject to rate limiting. Excessive requests may result in temporary blocking.

## Support

For additional support or questions about the API, please contact the development team.
