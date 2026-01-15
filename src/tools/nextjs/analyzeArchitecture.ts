import { z } from 'zod';
import { ANALYZE_NEXTJS_ARCHITECTURE_PROMPT } from '../../prompts/nextjs/architecture.prompt.js';
import { MARKDOWN_OUTPUT_PROMPT } from '../../prompts/base/markdown.prompt.js';
import { BASE_NEXTJS_REVIEW_PROMPT } from '../../prompts/base/base-nextjs.prompt.js';
import { autoInitializeProjectDocs } from '../initializeProjectDocs.js';

export const analyzeNextjsArchitectureTool = {
	name: 'analyze_nextjs_architecture',
	description: 'Analyzes overall NextJS architecture.',
	inputSchema: z.object({
		code: z.string().describe('NextJS code to review'),
	}),

	async execute({ code }: { code: string }, _extra: any) {
		// Auto-initialize project docs
		await autoInitializeProjectDocs();
		const text = `${BASE_NEXTJS_REVIEW_PROMPT}\n\n${MARKDOWN_OUTPUT_PROMPT}\n\n${ANALYZE_NEXTJS_ARCHITECTURE_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``;

		return {
			content: [
				{
					type: 'text' as const,
					text: text,
				},
			],
		};
	},
};
