/**
 * Postman and API Testing Documentation
 * 
 * Postman is a popular API client that makes it easy for developers to create, 
 * share, test and document APIs. This allows users to create and save simple 
 * and complex HTTP/s requests, as well as read their responses.
 */

/*
================================================================================
1. BASIC CONCEPTS
================================================================================
- Request: An HTTP command (GET, POST, PUT, DELETE, etc.) sent to a server.
- Response: The data sent back from the server (Status code, Headers, Body).
- Collection: A group of related requests that can be organized into folders.
- Environment: A set of variables you can use in your requests (e.g., base_url).

================================================================================
2. REQUEST TYPES (HTTP METHODS)
================================================================================
- GET: Retrieve data from a server.
- POST: Send data to a server to create a new resource.
- PUT: Update an existing resource on the server.
- PATCH: Partially update an existing resource.
- DELETE: Remove a resource from the server.

================================================================================
3. REQUEST COMPONENTS
================================================================================
- URL: The endpoint you are hitting (e.g., https://api.example.com/users).
- Params: Key-value pairs added to the end of the URL (Query Strings).
- Headers: Metadata about the request (e.g., Content-Type: application/json, Authorization).
- Body: The data sent with POST/PUT requests (Raw -> JSON is most common).
- Auth: Methods like API Key, Bearer Token, Basic Auth, or OAuth 2.0.

================================================================================
4. API TESTING IN POSTMAN (Scripts)
================================================================================
Postman allows you to write JavaScript tests for your requests. These run 
immediately after the response is received.

Example Test Scripts in Postman:
*/

// Check if status code is 200
/*
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Check if response time is less than 200ms
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

// Check if JSON body contains a specific value
pm.test("Check if user is admin", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.role).to.eql("admin");
});

// Set an environment variable from a response
pm.test("Value check", function () {
    var jsonData = pm.response.json();
    pm.environment.set("token", jsonData.token);
});
*/

/*
================================================================================
5. COMMON HTTP STATUS CODES
================================================================================
- 200 OK: Success (Standard response for successful GET).
- 201 Created: Success (Standard response for successful POST).
- 400 Bad Request: The server cannot process the request (Client error).
- 401 Unauthorized: Authentication is required or has failed.
- 403 Forbidden: Authenticated but restricted from the resource.
- 404 Not Found: The resource does not exist.
- 500 Internal Server Error: Generic server error.

================================================================================
6. WHY USE POSTMAN?
================================================================================
1. Automation: Run collections of tests automatically using "Collection Runner" or "Newman".
2. Collaboration: Share collections and environments with your team.
3. Documentation: Generate beautiful API documentation from your collections.
4. Mock Servers: Create mock endpoints before the actual backend is ready.
*/
