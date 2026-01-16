export const CODE_SMELLS_PROMPT = `
Detect code smells and maintainability issues in the provided NestJS code.

Identify:
- God classes (too many responsibilities, violates Single Responsibility Principle)
- Long methods/functions (>20 lines) and deeply nested conditionals (high cyclomatic complexity)
- Duplicated logic or copy-paste code
- Tight coupling between modules/classes
- Poor naming (unclear variable, function, or class names)
- Magic numbers and hardcoded values
- Dead code and unused imports

For each smell:
- Explain why it's a problem and its long-term impact on maintainability
- Show the problematic code with specific location
- Provide a refactored example
`;
