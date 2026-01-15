export const CODE_SMELLS_PROMPT = `
Detect code smells and maintainability issues in the provided code.

Identify:
- God classes/God components (too many responsibilities)
- Long methods/functions (>20 lines)
- Duplicated logic or copy-paste code
- Mixed/unclear responsibilities (Single Responsibility Principle violations)
- Tight coupling between modules/classes
- Poor naming (unclear variable, function, or class names)
- Magic numbers and hardcoded values
- Dead code and unused imports
- Deeply nested conditionals (cyclomatic complexity)

For each smell:
- Explain why it's a problem
- Show the problematic code
- Provide a refactored example
- Assess long-term impact on maintainability
`;
