export const MARKDOWN_OUTPUT_PROMPT = `
Format the response strictly in Markdown for consistency and readability.

FORMATTING GUIDELINES:
- Use clear section headings with consistent hierarchy: ## Main, ### Subsections, #### Details
- Use bullet points (- not *) instead of paragraphs
- Use code blocks with \`\`\`ts language identifier for TypeScript
- Use bold (**text**) for emphasis, not italics
- Keep paragraphs short (max 3 sentences)
- Use tables for comparisons
- Keep explanations concise and avoid unnecessary verbosity
- Code blocks should be short and focused
- Output must be readable inside VS Code

CONSISTENCY RULES for reproducibility:
- Every assessment of identical code must produce identical structure
- Do not vary output depth based on follow-up questions
- Always provide specific examples, never generic statements
- Always use the same heading structure for the same analysis type
- Use consistent formatting for all code snippets
`;
