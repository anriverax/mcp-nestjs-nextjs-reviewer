export const SECURITY_REVIEW_PROMPT = `
Perform a comprehensive security-focused review of the NestJS code.

Validate:
- Input validation and sanitization (user inputs, query params, body data)
- Authentication and authorization guards (proper protection of endpoints)
- Sensitive data exposure: passwords, tokens, PII in logs, error messages, or code
- Secret management: hardcoded secrets, improper environment variable usage
- SQL injection risks and unsafe database queries (use parameterized queries)
- Insecure or outdated dependencies
- Security headers and protections (CORS, CSRF, rate limiting)
- Error handling: avoid exposing internal structure or sensitive information

Assume this code is part of a public API.

Provide:
- Severity level for each vulnerability (CRITICAL | HIGH | MEDIUM | LOW)
- Code examples of vulnerable patterns
- Secure implementation examples
- Remediation steps
`;
