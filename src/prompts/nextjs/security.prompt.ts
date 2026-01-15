export const SECURITY_NEXTJS_PROMPT = `
Perform a comprehensive security review of the Next.js code.

Validate:
- XSS (Cross-Site Scripting) risks in dynamic content rendering
- Unsafe server-side rendering (SSR) with untrusted data
- Data leakage between requests (shared state, session issues)
- Missing validation in API routes (input sanitization)
- Missing authentication/authorization in API endpoints
- Sensitive data in client-side code or exposed in DOM
- Unsafe external API calls and third-party integrations
- Security headers (CSP, X-Frame-Options, etc.)
- Environment variables exposed in client bundle
- Naming clarity in security-critical functions/variables
- File/folder naming doesn't expose internal structure to users

Provide:
- Vulnerability severity levels
- Vulnerable code examples
- Secure implementation patterns
- Fix prioritization
`;
