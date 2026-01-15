export const SMELLS_NEXTJS_PROMPT = `
Detect code smells in the provided code.

Look for:
- God classes / God components
- Long methods / Long functions
- Duplicated logic
- Mixed responsibilities
- Tight coupling
- Props drilling (in React/NextJS)
- Unnecessary re-renders (in React/NextJS)

For React/NextJS code:
- PREFER: Functional components with hooks
- AVOID: Class components (use hooks instead since React 16.8)
- Check: Custom hooks for logic reuse
- Suggest: Context API or state management for deeply nested data

Explain each smell and its long-term impact.
`;
