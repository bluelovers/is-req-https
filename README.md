# is-req-https
This module returns whether a request is under https

## Installation
```bash
yarn add is-req-https2
```

## Users
 - Node.js
 - Express
 - Hapi

## Usage
If one of the following test is true, the function immediately return true.
- Check if `req.connection.encrypted` exist.
- Check the property `req.secure`.
- Check the `x-forwarded-proto` in headers
- Check `req.server.info.protocol` for Hapi requests

Otherwise the function returns false.

## Example

```ts
import isHttps from 'is-req-https2';

// for express users
app.use((req, res, next) => {
  req.isSecure = isHttps(req);
  next();
});
```
