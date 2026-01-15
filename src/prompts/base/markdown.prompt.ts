export const MARKDOWN_OUTPUT_PROMPT = `
Format the response strictly in Markdown for consistency and readability.

MANDATORY STRUCTURE for reproducibility:
- Use consistent heading hierarchy: ## Main sections, ### Subsections, #### Details
- Use bullet points (- not *) for lists
- Use code blocks with \`\`\`ts language identifier for TypeScript
- Use bold (**text**) for emphasis, not italics
- Keep paragraphs short (max 3 sentences)
- Use tables for comparisons
- Always use the same heading structure for the same analysis type

CONSISTENCY RULES:
- Every assessment of identical code must produce identical structure
- Do not vary output depth based on follow-up questions
- Always provide specific examples, never generic statements
- Output must be readable in VS Code Markdown viewer
- Use consistent formatting for all code snippets
`;
