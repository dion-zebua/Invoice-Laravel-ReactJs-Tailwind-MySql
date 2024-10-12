# API Specification: User Registration

## Endpoint
**POST** `/api/users/store`

## Request

### Headers
- `Content-Type: application/json`

### Body Parameters
| Parameter | Type   | Required | Description                           |
|-----------|--------|----------|---------------------------------------|
| `name`    | string | Yes      | The full name of the user (max 50 chars). |
| `email`   | string | Yes      | The email address of the user (must be unique). |
| `password`| string | Yes      | The password for the user (min 8, max 30 chars). |

### Example Request
```json
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securePassword123"
}

