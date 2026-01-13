export const SECURITY_REVIEW_PROMPT = `
Perform a security-focused review of the NestJS code.

Check for:
- Missing validation
- Missing guards or authorization
- Unsafe error handling
- Sensitive data exposure
- Insecure dependency usage

Assume this code is part of an API.
`;
