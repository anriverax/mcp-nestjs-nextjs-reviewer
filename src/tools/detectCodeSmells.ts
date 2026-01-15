import { z } from 'zod';
import { CODE_SMELLS_PROMPT } from '../prompts/nextjs/smells.prompt.js';
import { MARKDOWN_OUTPUT_PROMPT } from '../prompts/base/markdown.prompt.js';

export const detectCodeSmellsTool = {
	name: 'detect_code_smells',
	description: 'Detects code smells in NestJS code.',
	inputSchema: z.object({
		code: z.string().describe('NestJS code to review'),
	}),

	execute({ code }: { code: string }, _extra: any) {
		return {
			content: [
				{
					type: 'text' as const,
					text: `${MARKDOWN_OUTPUT_PROMPT}\n\n${CODE_SMELLS_PROMPT}\n\n### CODE\n\`\`\`ts\n${code}\n\`\`\``,
				},
			],
		};
	},
};
