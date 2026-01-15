export const SECURITY_REVIEW_PROMPT = `
Perform a comprehensive security-focused review of the NestJS code.

Validate:
- Input validation (all user inputs, query params, body data)
- Missing or weak authentication/authorization guards
- Unsafe error handling (exposing sensitive info in error messages)
- Sensitive data exposure (logging passwords, tokens, PII)
- SQL injection risks (raw queries without parameterization)
- Insecure or outdated dependencies
- Missing CORS, CSRF, rate limiting protections
- Improper secret management (hardcoded secrets)
- Method-level naming clarity and intent
- File/module naming doesn't expose security-sensitive operations

Assume this code is part of a public API.

Provide:
- Severity level for each vulnerability
- Code examples of vulnerable patterns
- Secure implementation examples
- Remediation steps
`;
