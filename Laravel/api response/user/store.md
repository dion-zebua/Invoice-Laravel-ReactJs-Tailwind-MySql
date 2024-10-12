{
"name": "John Doe",
"email": "john@example.com",
"password": "securepassword"
}

Rules:

-   name: required, string, max 50 char
-   email: required, valid email, unique in users table
-   password: required, string, min 8 char, max 30 char

Response success:

-   Status Code: 201

{
"status": true,
"message": "Berhasil tambah.",
"data": {
"id": 1,
"name": "John Doe",
"email": "john@example.com",
"token_verified": "random60characterstring",
"created_at": "2023-06-14T12:00:00.000000Z",
"updated_at": "2023-06-14T12:00:00.000000Z"
}
}

Response failed:

-   Status Code: 422 (for validation errors)

{
"status": false,
"message": "Validasi error.",
"errors": {
"name": [
"The name field is required."
],
"email": [
"The email has already been taken."
],
"password": [
"The password must be at least 8 characters."
]
}
}

-   Status Code: 500 (for server errors)

{
"status": false,
"message": "gagal tambah."
}
