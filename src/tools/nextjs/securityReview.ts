import { z } from 'zod';
import { SECURITY_NEXTJS_PROMPT } from '../../prompts/nextjs/security.prompt.js';
import { MARKDOWN_OUTPUT_PROMPT } from '../../prompts/base/markdown.prompt.js';
import { BASE_NEXTJS_REVIEW_PROMPT } from '../../prompts/base/base-nextjs.prompt.js';
import { autoInitializeProjectDocs } from '../initializeProjectDocs.js';

export const securityNextjsReviewTool = {
	name: 'security_nextjs_review',
	description: 'Performs a security-focused review.',
	inputSchema: z.object({
		code: z.string().describe('NextJS code to review'),
	}),

	async execute({ code }: { code: string }, _extra: any) {
		// Auto-initialize project docs
		await autoInitializeProjectDocs();
		const text = `${BASE_NEXTJS_REVIEW_PROMPT}\n\n${MARKDOWN_OUTPUT_PROMPT}\n\n${SECURITY_NEXTJS_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``;

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
