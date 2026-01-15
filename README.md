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

| Tool                          | Description                     |
| ----------------------------- | ------------------------------- |
| `review_nestjs_code`          | Full technical review           |
| `analyze_nestjs_architecture` | Module & dependency analysis    |
| `security_nestjs_review`      | Security-focused backend review |

---

### 🔹 Next.js Tools

| Tool                          | Description                    |
| ----------------------------- | ------------------------------ |
| `review_nextjs_code`          | Full technical review          |
| `analyze_nextjs_architecture` | App/Pages Router analysis      |
| `performance_nextjs_review`   | Rendering & performance review |
| `security_nextjs_review`      | Frontend & SSR security review |

---

### 🔹 Cross-Cutting Tools (Framework-Agnostic)

| Tool                           | Description                            |
| ------------------------------ | -------------------------------------- |
| `generate_docs`                | Generate JSDoc / TSDoc documentation   |
| `detect_code_smells`           | Detect design & maintainability issues |
| `hexagonal_architecture_check` | Hexagonal architecture compliance      |
| `ddd_boundary_check`           | Domain-Driven Design boundary analysis |

---

## 🛠️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/mcp-nestjs-nextjs-reviewer.git
cd mcp-nestjs-nextjs-reviewer
```
