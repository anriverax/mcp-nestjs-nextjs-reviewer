# MCP NestJS + Next.js Reviewer

A **Model Context Protocol (MCP) Server** for **professional code review**
supporting **NestJS (backend)** and **Next.js (frontend)** projects.

This tool integrates directly with **VS Code + Copilot Chat** and provides
structured, Markdown-based technical reviews focused on:

- Code quality
- Architecture
- Performance
- Security
- Maintainability
- Documentation

---

## 🚀 What This Tool Does

This MCP server exposes a set of **specialized tools** that analyze **selected code**
and return **clear, structured, senior-level feedback** directly inside VS Code.

It does **NOT**:

- Automatically refactor code
- Modify logic
- Run linters or formatters

It **DOES**:

- Explain _why_ something is a problem
- Suggest improvements with examples
- Enforce architectural thinking
- Produce clean Markdown output

---

## 🧠 Supported Frameworks

| Framework | Scope                                      |
| --------- | ------------------------------------------ |
| NestJS    | Backend APIs, services, modules            |
| Next.js   | App Router, Pages Router, React components |

---

## 🧰 Available MCP Tools

### 🔹 NestJS Tools

| Tool                           | Description                            |
| ------------------------------ | -------------------------------------- |
| `review_nestjs_code`           | Full technical review                  |
| `analyze_nestjs_architecture`  | Module & dependency analysis           |
| `security_nestjs_review`       | Security-focused backend review        |
| `hexagonal_architecture_check` | Hexagonal architecture compliance      |
| `ddd_boundary_check`           | Domain-Driven Design boundary analysis |
| `generate_docs`                | Generate JSDoc / TSDoc documentation   |
| `detect_code_smells`           | Detect design & maintainability issues |

---

### 🔹 Next.js Tools

| Tool                          | Description                            |
| ----------------------------- | -------------------------------------- |
| `review_nextjs_code`          | Full technical review                  |
| `analyze_nextjs_architecture` | App/Pages Router analysis              |
| `performance_nextjs_review`   | Rendering & performance review         |
| `security_nextjs_review`      | Frontend & SSR security review         |
| `generate_docs`               | Generate JSDoc / TSDoc documentation   |
| `detect_code_smells`          | Detect design & maintainability issues |

---

## � Recommended Execution Order

### For **NestJS (Backend)**

1. `analyze_nestjs_architecture` - Understand overall structure
2. `review_nestjs_code` - General code review
3. `ddd_boundary_check` - Validate domain boundaries
4. `hexagonal_architecture_check` - Verify layer separation
5. `detect_code_smells` - Find quality issues
6. `security_nestjs_review` - Check security
7. `generate_docs` - Document the code

**Why this order?** From general to specific. Understanding architecture first helps identify where problems lie.

### For **Next.js (Frontend)**

1. `analyze_nextjs_architecture` - Understand component structure & routing
2. `review_nextjs_code` - General React/Next.js review
3. `performance_nextjs_review` - Check optimizations (memoization, bundles)
4. `detect_code_smells` - Find React-specific issues
5. `security_nextjs_review` - Check XSS, SSR, data validation
6. `generate_docs` - Document components and hooks

**Why this order?** Start with structure, then performance, then code quality, then security.

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/mcp-nestjs-nextjs-reviewer.git
cd mcp-nestjs-nextjs-reviewer
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Build the project

```bash
npm run build
```

---

## ⚙️ Configure MCP Server in VS Code

### ⭐ Easy Setup (Recommended for Multi-Machine)

If you work on **multiple machines** (home, office, laptop), use this automated setup:

```bash
npm install
npm run build
npm run setup:mcp
```

This script will:

1. **Automatically detect which machine you're on** by your username
2. **Detect your OS** (Windows, macOS, Linux)
3. **Find the correct VS Code configuration folder**
4. **Create the appropriate server** with the correct path:
   - HOME machine (user `USER`) → `home-nestjs-nextjs-reviewer`
   - OFFICE machine (user `AnibalAntonioRivera`) → `office-nestjs-nextjs-reviewer`

### How it works

The setup script detects your machine by your system username and creates the correct path automatically:

| Machine | Username              | Path                                                                          | Server Name                     |
| ------- | --------------------- | ----------------------------------------------------------------------------- | ------------------------------- |
| HOME    | `USER`                | `C:\Users\USER\Code\mcp-nestjs-nextjs-reviewer\dist\server.js`                | `home-nestjs-nextjs-reviewer`   |
| OFFICE  | `AnibalAntonioRivera` | `C:\Users\AnibalAntonioRivera\code\mcp-nestjs-nextjs-reviewer\dist\server.js` | `office-nestjs-nextjs-reviewer` |

Just run the setup script on each machine—it will automatically detect your environment and configure the correct server with the right path!

**No manual path changes needed ever again!**

---

### Manual Setup (If you prefer)

#### Step 1: Open VS Code Settings JSON directly

**Easiest way - Using keyboard shortcut:**

1. Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on Mac) to open Command Palette
2. Type: `Preferences: Open Settings (JSON)`
3. Press Enter

This will open your `settings.json` file directly in the editor.

**Alternative - Using the menu:**

1. Open VS Code
2. Press `Ctrl + ,` (or `Cmd + ,` on Mac) to open Settings
3. Click the **{}** icon in the top-right corner to open the JSON editor

#### Step 2: Find the MCP configuration file location

**On Windows:**

```
C:\Users\YOUR_USERNAME\AppData\Roaming\Code\User\
```

**On Mac:**

```
~/.config/Code/User/
```

**On Linux:**

```
~/.config/Code/User/
```

These folders contain:

- `settings.json` - General VS Code settings
- `mcp.json` - MCP server configuration (create if it doesn't exist)

#### Step 3: Add MCP Server configuration

#### Create/Update `mcp.json` in the User folder (Recommended for MCP)

1. Navigate to the User folder (see paths above)
2. Create a new file named `mcp.json` (if it doesn't exist)
3. Add this content:

```json
{
	"servers": {
		"nestjs-nextjs-reviewer": {
			"command": "node",
			"args": ["C:\\Path\\To\\mcp-nestjs-nextjs-reviewer\\dist\\server.js"]
		}
	}
}
```

**⚠️ Replace `C:\\Path\\To\\` with your actual project path.**

**Example (Windows) - mcp.json location:**

```
C:\Users\USER\AppData\Roaming\Code\User\mcp.json
```

**Example content:**

```json
{
	"servers": {
		"nestjs-nextjs-reviewer": {
			"command": "node",
			"args": ["C:\\Users\\USER\\Code\\mcp-nestjs-nextjs-reviewer\\dist\\server.js"]
		}
	}
}
```

**Example (Mac/Linux) - mcp.json location:**

```
~/.config/Code/User/mcp.json
```

**Example content:**

```json
{
	"servers": {
		"nestjs-nextjs-reviewer": {
			"command": "node",
			"args": ["/Users/username/Code/mcp-nestjs-nextjs-reviewer/dist/server.js"]
		}
	}
}
```

#### Step 4: Restart VS Code completely

**Save the mcp.json file and then:**

1. **Close VS Code completely** (exit the application)
2. **Reopen VS Code**

This ensures the MCP server configuration is properly loaded.

#### Step 5: Activate the MCP Server in VS Code

1. Open **Command Palette** in VS Code: `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac)
2. Type: `MCP: List Servers` or `MCP: Manage Servers`
3. You should see your server in the list:
   - `home-nestjs-nextjs-reviewer` (if configured via setup:mcp)
   - `office-nestjs-nextjs-reviewer` (if configured via setup:mcp)
   - Or `nestjs-nextjs-reviewer` (if manual setup)
4. Click on it to **enable/activate** it (if it shows as disabled)
5. Confirm that the status shows as **✅ Connected** or **Enabled**

#### Step 6: Verify the configuration

1. Open **Copilot Chat** (Ctrl + Shift + I)
2. Type: `@home-nestjs-nextjs-reviewer` or `@office-nestjs-nextjs-reviewer` and press Space
3. You should see the available tools listed

#### Step 7: Start using the tools

Once configured and activated, you can use any of the available tools:

- `review_nestjs_code`
- `review_nextjs_code`
- `analyze_nestjs_architecture`
- And more...

---

## 📖 How to Use

### Option 1: Use in VS Code Copilot Chat (Recommended)

1. Ensure the MCP Server is configured (see above)
2. Restart VS Code
3. Open **Copilot Chat** (Ctrl + Shift + I)
4. Type (depending on your machine):
   ```
   @home-nestjs-nextjs-reviewer review_nestjs_code
   ```
   or
   ```
   @office-nestjs-nextjs-reviewer review_nestjs_code
   ```
5. Select the code you want reviewed
6. The tool will analyze it and return feedback in Markdown

### Option 2: Run the server in development mode

```bash
npm run dev
```

This starts the server in development mode (useful for testing).

---

## 📚 Usage Examples

### Step-by-Step Example: Review NestJS Code

```
1. Copy your NestJS code to review
2. Open Copilot Chat in VS Code (Ctrl + Shift + I)
3. Type: @nestjs-nextjs-reviewer review_nestjs_code
4. Paste your code
5. Follow the execution order:
   - First: analyze_nestjs_architecture
   - Then: review_nestjs_code
   - Then: ddd_boundary_check
   - Then: detect_code_smells
   - Then: security_nestjs_review
```

### Step-by-Step Example: Review Next.js Code

```
1. Copy your Next.js component or file
2. Open Copilot Chat in VS Code (Ctrl + Shift + I)
3. Type: @nestjs-nextjs-reviewer review_nextjs_code
4. Paste your code
5. Follow the execution order:
   - First: analyze_nextjs_architecture
   - Then: review_nextjs_code
   - Then: performance_nextjs_review
   - Then: detect_code_smells
   - Then: security_nextjs_review
```

### Using Cross-Cutting Tools

For code smells, documentation, or architecture validation (any framework):

```
@nestjs-nextjs-reviewer detect_code_smells
@nestjs-nextjs-reviewer generate_docs
@nestjs-nextjs-reviewer ddd_boundary_check
```

---

## 📊 Output Format

All tools return **structured Markdown** with:

- **Executive Summary** - Overview of findings
- **Issues by Priority** - Critical → Low
- **Code Examples** - Before and after
- **Recommendations** - Actionable steps
- **Impact Assessment** - Why it matters

---

## 💾 Auto-Save Analysis Results

All analysis results are **automatically saved as Markdown files** in your project's `docs/` folder.

### How it works

1. When you run any analysis tool, the output is displayed in VS Code's Copilot Chat
2. **At the same time**, a `.md` file is automatically created in the `docs/` folder
3. The file is named with a timestamp: `{framework}_{analysis-type}_{YYYY-MM-DD_HH-mm-ss}.md`

### Example file structure

```
your-project/
├── docs/
│   ├── nestjs_architecture_2025-01-15_14-30-45.md
│   ├── nextjs_review_2025-01-15_14-35-22.md
│   ├── nestjs_security-review_2025-01-15_14-40-18.md
│   └── general_jsdoc-docs_2025-01-15_14-45-00.md
├── src/
├── package.json
└── ...
```

### File naming convention

- **Framework:** `nestjs` or `nextjs` (or `general` for cross-cutting tools)
- **Analysis type:** `review`, `architecture`, `security-review`, `code-smells`, `ddd-boundary-check`, `hexagonal-check`, `jsdoc-docs`, `performance-review`
- **Timestamp:** `YYYY-MM-DD_HH-mm-ss` format

### Using saved files

1. Open the `docs/` folder in your project
2. Review the generated `.md` files
3. Share them with your team as code review artifacts
4. Use them to track improvements over time
5. Reference specific findings in pull requests

### Note

The `docs/` folder is automatically added to `.gitignore` to avoid committing generated files. If you want to commit them, remove `docs` from `.gitignore`.

---

## � Automatic Project Documentation Initialization

### What is this feature?

When you run the MCP in your project, it **automatically creates a `docs` folder** with markdown templates for all supported analysis types. This works for any project where you use the MCP: `primeraInfancia`, `coffee`, or any other project.

### How it works

1. **First run**: MCP creates a `docs/` folder in your project root with template files for all analysis types
2. **Subsequent runs**:
   - Existing files are preserved (your edits are safe)
   - `README.md` is updated with the current timestamp
   - Missing files are recreated if deleted

### Generated documentation structure

```
your-project/
├── docs/
│   ├── README.md (documentation index)
│   │
│   ├── NestJS Analysis/
│   ├── nestjs-review.md
│   ├── nestjs-architecture.md
│   ├── nestjs-code-smells.md
│   ├── nestjs-security.md
│   ├── nestjs-ddd.md
│   ├── nestjs-hexagonal.md
│   │
│   └── Next.js Analysis/
│   ├── nextjs-review.md
│   ├── nextjs-architecture.md
│   ├── nextjs-code-smells.md
│   ├── nextjs-security.md
│   └── nextjs-performance.md
```

### Example usage

When you run the MCP server in your project, you'll see:

```
[MCP] Documentación creada: nestjs-review.md
[MCP] Documentación creada: nestjs-architecture.md
...
[MCP] Carpeta de documentación inicializada en: /ruta/a/tu/proyecto/docs
```

### Editing generated files

All files in the `docs/` folder can be safely edited. Your changes will be preserved in future MCP executions. Only the `README.md` index will be automatically updated.

### Git Integration

The `docs/` folder is typically ignored by git (add to `.gitignore`), but you can track it if you want to maintain documentation history in your repository.

---

## 🔧 Troubleshooting

### Issue: Tools not showing in Copilot Chat

**Solution:**

1. Make sure the MCP server is properly configured in `settings.json`
2. Verify the path to the server file is correct
3. Check that the project is built: `npm run build`
4. Restart VS Code completely

### Issue: "Cannot find module"

**Solution:**

1. Make sure you ran `npm install` in the project directory
2. Run `npm run build` to compile TypeScript
3. Verify your settings.json path points to `dist/server.js`

### Issue: "Service not available"

**Solution:**

1. Check if the server process is running: `npm run dev`
2. Make sure the MCP configuration in VS Code is correct
3. Check VS Code Output panel for error messages
