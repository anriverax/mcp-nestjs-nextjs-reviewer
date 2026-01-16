export const SMELLS_NEXTJS_PROMPT = `
Detect code smells in the provided code.

Look for:
- God components (too many responsibilities)
- Long functions or deeply nested logic
- Duplicated or mixed responsibilities (violates DRY/SRP)
- Tight coupling and props drilling
- Unnecessary re-renders
- Over-engineered or premature abstractions

React/NextJS specific:
- Prefer functional components with hooks over class components
- Identify custom hooks for logic reuse opportunities
- Suggest Context API or state management instead of props drilling
- Check for performance anti-patterns

Explain each smell and its long-term impact on maintainability and scalability.
`;
