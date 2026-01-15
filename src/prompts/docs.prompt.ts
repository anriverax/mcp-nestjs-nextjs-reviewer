export const GENERATE_DOCS_PROMPT = `
Review the following code and generate BOTH concise JSDoc for code AND complete Markdown documentation.

CRITICAL: Generate TWO separate outputs:

## OUTPUT 1: JSDoc for Code (CONCISE)
- Keep JSDoc comments SHORT and FOCUSED
- ONE line description for each element
- Only include @param, @returns, @throws if necessary
- NO @example in code JSDoc
- NO lengthy descriptions

## OUTPUT 2: Complete Markdown Documentation
- Detailed explanations
- Include @example with usage
- Describe edge cases
- Performance considerations
- Architecture decisions

Requirements for BOTH:
- All documentation must be written in English.
- Use standard JSDoc or TSDoc syntax.
- Document classes, methods, properties, parameters, and return types.
- Suggest better names if necessary, explaining why.
- Do NOT modify code logic.
- Maintain a professional tone.

STRUCTURE YOUR RESPONSE:
1. \`\`\`typescript\n## CODE WITH CONCISE JSDOC\n\`\`\`
2. ## COMPLETE DOCUMENTATION (for markdown file)
   - Detailed explanations
   - Examples
   - Use cases
`;
