#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { generateDocsTool } from './tools/generateDocs.js';
import { detectCodeSmellsTool } from './tools/nestjs/detectCodeSmells.js';
import { reviewNestCodeTool } from './tools/nestjs/reviewNestCode.js';
import { analyzeArchitectureTool } from './tools/nestjs/analyzeArchitecture.js';
import { securityReviewTool } from './tools/nestjs/securityReview.js';
import { reviewNextjsCodeTool } from './tools/nextjs/reviewNestCode.js';
import { analyzeNextjsArchitectureTool } from './tools/nextjs/analyzeArchitecture.js';
import { performanceNextjsReviewTool } from './tools/nextjs/performanceReview.js';
import { securityNextjsReviewTool } from './tools/nextjs/securityReview.js';
import { detectNextjsCodeSmellsTool } from './tools/nextjs/detectCodeSmells.js';
import { hexagonalCheckTool } from './tools/nestjs/hexagonalCheck.js';
import { dddBoundaryCheckTool } from './tools/nestjs/dddBoundaryCheck.js';
import { initializeProjectDocs } from './tools/initializeProjectDocs.js';

const server = new McpServer({
	name: 'nestjs-mcp-reviewer',
	version: '1.0.0',
});
/** NESTJS */
server.registerTool(
	reviewNestCodeTool.name,
	{
		description: reviewNestCodeTool.description,
		inputSchema: reviewNestCodeTool.inputSchema,
	},
	reviewNestCodeTool.execute
);
server.registerTool(
	analyzeArchitectureTool.name,
	{
		description: analyzeArchitectureTool.description,
		inputSchema: analyzeArchitectureTool.inputSchema,
	},
	analyzeArchitectureTool.execute
);
server.registerTool(
	securityReviewTool.name,
	{
		description: securityReviewTool.description,
		inputSchema: securityReviewTool.inputSchema,
	},
	securityReviewTool.execute
);
server.registerTool(
	hexagonalCheckTool.name,
	{
		description: hexagonalCheckTool.description,
		inputSchema: hexagonalCheckTool.inputSchema,
	},
	hexagonalCheckTool.execute
);
server.registerTool(
	dddBoundaryCheckTool.name,
	{
		description: dddBoundaryCheckTool.description,
		inputSchema: dddBoundaryCheckTool.inputSchema,
	},
	dddBoundaryCheckTool.execute
);
server.registerTool(
	detectCodeSmellsTool.name,
	{
		description: detectCodeSmellsTool.description,
		inputSchema: detectCodeSmellsTool.inputSchema,
	},
	detectCodeSmellsTool.execute
);

/** NEXTJS */
server.registerTool(
	reviewNextjsCodeTool.name,
	{
		description: reviewNextjsCodeTool.description,
		inputSchema: reviewNextjsCodeTool.inputSchema,
	},
	reviewNextjsCodeTool.execute
);

server.registerTool(
	analyzeNextjsArchitectureTool.name,
	{
		description: analyzeNextjsArchitectureTool.description,
		inputSchema: analyzeNextjsArchitectureTool.inputSchema,
	},
	analyzeNextjsArchitectureTool.execute
);

server.registerTool(
	performanceNextjsReviewTool.name,
	{
		description: performanceNextjsReviewTool.description,
		inputSchema: performanceNextjsReviewTool.inputSchema,
	},
	performanceNextjsReviewTool.execute
);

server.registerTool(
	securityNextjsReviewTool.name,
	{
		description: securityNextjsReviewTool.description,
		inputSchema: securityNextjsReviewTool.inputSchema,
	},
	securityNextjsReviewTool.execute
);

server.registerTool(
	detectNextjsCodeSmellsTool.name,
	{
		description: detectNextjsCodeSmellsTool.description,
		inputSchema: detectNextjsCodeSmellsTool.inputSchema,
	},
	detectNextjsCodeSmellsTool.execute
);

/** others */

server.registerTool(
	generateDocsTool.name,
	{
		description: generateDocsTool.description,
		inputSchema: generateDocsTool.inputSchema,
	},
	generateDocsTool.execute
);

// Inicializar documentación del proyecto al arrancar
await initializeProjectDocs();

const transport = new StdioServerTransport();
await server.connect(transport);
