export const GENERATE_MARKDOWN_DOCS_PROMPT = `
Review the following code and generate complete Markdown documentation.

REQUIREMENTS for Markdown Documentation:
- Detailed explanations of functionality and architecture
- Include @example with real usage scenarios
- Describe edge cases and performance considerations
- Document design patterns and architectural decisions
- Comprehensive enough for onboarding and reference

COMMON REQUIREMENTS:
- All documentation must be written in English
- Use standard JSDoc or TSDoc syntax where applicable
- Document classes, functions, methods, parameters, and return types
- Suggest better names if they improve clarity, explaining briefly why
- Do NOT modify code logic
- Maintain a professional and consistent tone

OUTPUT FORMAT:
## COMPLETE DOCUMENTATION (for markdown file)
- Module/File overview
- Main classes and their responsibilities
- Key functions with examples
- Edge cases and error handling
- Usage examples and patterns
- Performance considerations (if relevant)
`;
