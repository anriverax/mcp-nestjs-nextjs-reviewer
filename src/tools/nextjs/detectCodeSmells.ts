import { z } from 'zod';
import { MARKDOWN_OUTPUT_PROMPT } from '../../prompts/base/markdown.prompt.js';
import { SMELLS_NEXTJS_PROMPT } from '../../prompts/nextjs/smells.prompt.js';
import { autoInitializeProjectDocs } from '../initializeProjectDocs.js';

export const detectNextjsCodeSmellsTool = {
	name: 'detect_nextjs_code_smells',
	description: 'Detects code smells in NextJS code.',
	inputSchema: z.object({
		code: z.string().describe('NextJS code to review'),
	}),

	async execute({ code }: { code: string }, _extra: any) {
		// Auto-initialize project docs
		await autoInitializeProjectDocs();
		const text = `${MARKDOWN_OUTPUT_PROMPT}\n\n${SMELLS_NEXTJS_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``;

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
