#!/usr/bin/env node

/**
 * Setup Script for MCP NestJS + Next.js Reviewer
 *
 * This script automatically generates the mcp.json configuration file
 * with both HOME and OFFICE server configurations.
 *
 * Usage:
 *   npm run setup:mcp
 */

import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.dirname(__dirname);

// Detect current machine by username
function getCurrentMachine() {
	const username = process.env.USERNAME || process.env.USER || os.userInfo().username;
	// You can customize this logic to detect HOME vs OFFICE by username
	// For example: if username is 'AnibalAntonioRivera', it's OFFICE
	// Otherwise, it's HOME
	if (username === 'AnibalAntonioRivera') {
		return 'office';
	}
	return 'home';
}

// Get server path based on machine type
function getServerPath(machineType) {
	// Both HOME and OFFICE should use the current project root
	// The script will be run in each environment separately
	return path.join(PROJECT_ROOT, 'dist', 'server.js');
}

// Determine the correct mcp.json location based on OS
function getMcpJsonPath() {
	const platform = process.platform;

	if (platform === 'win32') {
		// Windows
		return path.join(
			process.env.APPDATA || path.join(os.homedir(), 'AppData', 'Roaming'),
			'Code',
			'User',
			'mcp.json'
		);
	} else if (platform === 'darwin') {
		// macOS
		return path.join(os.homedir(), '.config', 'Code', 'User', 'mcp.json');
	} else {
		// Linux
		return path.join(os.homedir(), '.config', 'Code', 'User', 'mcp.json');
	}
}

// Create or update mcp.json
function setupMcpJson() {
	const currentMachine = getCurrentMachine();
	const serverPath = getServerPath(currentMachine);
	const mcpJsonPath = getMcpJsonPath();
	const mcpDir = path.dirname(mcpJsonPath);

	// Create directory if it doesn't exist
	if (!fs.existsSync(mcpDir)) {
		fs.mkdirSync(mcpDir, { recursive: true });
		console.log(`📁 Created directory: ${mcpDir}`);
	}

	// Read existing mcp.json if it exists
	let config = {};
	if (fs.existsSync(mcpJsonPath)) {
		try {
			const content = fs.readFileSync(mcpJsonPath, 'utf-8');
			config = JSON.parse(content);
			console.log(`📖 Existing mcp.json found at: ${mcpJsonPath}`);
		} catch (error) {
			console.warn(`⚠️  Could not parse existing mcp.json: ${error.message}`);
			config = {};
		}
	}

	// Ensure servers object exists
	if (!config.servers) {
		config.servers = {};
	}

	// Add server configuration for current machine
	if (currentMachine === 'office') {
		config.servers['office-nestjs-nextjs-reviewer'] = {
			command: 'node',
			args: [serverPath],
		};
	} else {
		config.servers['home-nestjs-nextjs-reviewer'] = {
			command: 'node',
			args: [serverPath],
		};
	}

	// Write the updated configuration
	try {
		fs.writeFileSync(mcpJsonPath, JSON.stringify(config, null, 2), 'utf-8');
		console.log(`\n✅ MCP configuration updated successfully!\n`);
		console.log(`📍 Location: ${mcpJsonPath}`);
		console.log(`🤖 Machine: ${currentMachine.toUpperCase()}`);
		console.log(`\n🎯 Server configured:`);
		console.log(
			`   ${currentMachine === 'office' ? '🏢' : '🏠'} ${currentMachine}-nestjs-nextjs-reviewer`
		);
		console.log(`\n📂 Path: ${serverPath}\n`);
		console.log(`📋 Next steps:`);
		console.log(`   1. Restart VS Code completely`);
		console.log(`   2. Open Copilot Chat and use @${currentMachine}-nestjs-nextjs-reviewer\n`);
	} catch (error) {
		console.error(`❌ Error writing mcp.json: ${error.message}`);
		process.exit(1);
	}
}

// Verify server.js exists
function verifyServerFile(serverPath) {
	if (!fs.existsSync(serverPath)) {
		console.warn(`⚠️  Warning: ${serverPath} not found.`);
		console.log(`   Please run: npm run build\n`);
	}
}

// Main execution
console.log(`\n🚀 MCP Setup for NestJS + Next.js Reviewer`);
console.log(`📍 Project Root: ${PROJECT_ROOT}\n`);

const currentMachine = getCurrentMachine();
const serverPath = getServerPath(currentMachine);

verifyServerFile(serverPath);
setupMcpJson();
