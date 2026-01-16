export const SECURITY_NEXTJS_PROMPT = `
Perform a comprehensive security review of the Next.js code.

Validate:
- XSS (Cross-Site Scripting) and unsafe server-side rendering (SSR) with untrusted data
- Input validation and sanitization in API routes and endpoints
- Authentication and authorization in API endpoints and protected routes
- Data leakage: sensitive data in client-side code, DOM exposure, or environment variables in bundle
- Data isolation between requests (shared state, session management issues)
- Unsafe external API calls and third-party integrations
- Security headers (CSP, X-Frame-Options, etc.)

Provide:
- Vulnerability severity levels
- Vulnerable code examples with specific locations
- Secure implementation patterns
- Fix prioritization by impact
`;
