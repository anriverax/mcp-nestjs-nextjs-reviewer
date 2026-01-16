export const GENERATE_JSDOC_PROMPT = `
Generate concise TSDoc documentation for the provided code files.

STRICT REQUIREMENTS - DO NOT DEVIATE:
- Process ALL provided files automatically WITHOUT asking questions
- Use TSDoc syntax (standard for TypeScript)
- Comments must be SHORT and CONCISE - maximum 1-2 lines per element
- Only document: classes, functions, methods, parameters, return types
- NO lengthy explanations or @example tags in code comments
- Describe WHAT the code does, not HOW
- Only use @param, @returns, @throws when necessary and helpful
- Do NOT modify code logic or structure
- Suggest better names ONLY if they significantly improve clarity (brief explanation)

CONSTRAINT: Minimize comment lines while maintaining clarity.
`;
