export const GENERATE_DOCS_PROMPT = `
Review the following code and generate complete documentation
using JSDoc or TSDoc format.

Requirements:
- All documentation must be written in English.
- Use standard JSDoc or TSDoc syntax.
- Document classes, methods, properties, parameters, and return types.
- Include @param, @returns, @throws, @example, @async when applicable.
- Suggest better names if necessary, explaining why.
- Do NOT modify code logic.
- Maintain a professional tone.
`;
