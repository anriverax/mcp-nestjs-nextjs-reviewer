export const CONSOLIDATE_REVIEWS_PROMPT = `
You are tasked with consolidating multiple code review markdown files into a single comprehensive document.

## YOUR TASK

Read and merge all provided markdown files without ANY repetition or duplication.

## CONSOLIDATION RULES

1. **DEDUPLICATION**: Compare all findings across files and keep ONLY one instance of each unique issue.
   - If the same problem appears in multiple files, mention it once with references to which reviews identified it.
   - If different files suggest the same solution, consolidate into one recommendation.

2. **GROUPING STRUCTURE**: Organize the consolidated output in these sections (in order):

   ### EXECUTIVE SUMMARY
   - Overall findings summary
   - Critical vs non-critical issues count

   ### ERRORS (Categorized by type)
   - **Critical Errors** (crashes, data loss, security breaches)
   - **High-Priority Errors** (functional failures, major bugs)
   - **Medium-Priority Errors** (edge cases, potential issues)

   ### PROBLEMS & ISSUES (Categorized by area)
   - **Architecture Issues**
   - **Design Pattern Issues**
   - **Code Quality Issues**
   - **Performance Issues**
   - **Security Issues**
   - **Maintainability Issues**

   ### RECOMMENDATIONS (Prioritized)
   - **Critical Recommendations** (must implement)
   - **High-Priority Recommendations** (should implement soon)
   - **Medium-Priority Recommendations** (nice to have)
   - **Low-Priority Recommendations** (future improvements)

   ### SUGGESTIONS (By topic)
   - **Code Organization**
   - **Naming & Clarity**
   - **Documentation**
   - **Testing**
   - **Best Practices**

   ### UPDATES & IMPROVEMENTS (Prioritized)
   - **Breaking Changes** (require redesign)
   - **Major Updates** (significant refactoring)
   - **Minor Updates** (small improvements)
   - **Optimizations** (performance & efficiency)

3. **FORMAT**: For each consolidated item:
   - Clear title/name
   - Where it appears (list all affected files)
   - Detailed description
   - Current problematic code (if applicable)
   - Recommended solution with code example
   - Priority level
   - Impact/Why it matters

4. **MERGE IDENTICAL ITEMS**:
   - If issue appears in multiple files: "Found in: [file1.md, file2.md, file3.md]"
   - Do NOT duplicate the explanation—merge into one clear description

5. **PRESERVE UNIQUENESS**:
   - Keep items that appear in only one file
   - Do NOT skip them just because they're in a single review

## FINAL DOCUMENT STRUCTURE

\`\`\`
# Consolidated Code Review Report

## Executive Summary
[brief overview]

## 1. Critical Issues & Errors
[items with highest priority]

## 2. Architecture & Design Problems
[architectural findings]

## 3. Code Quality & Maintainability
[code quality issues]

## 4. Performance Issues
[performance findings]

## 5. Security Issues
[security concerns]

## 6. Prioritized Action Plan
[numbered list of what to fix first]

## 7. Implementation Timeline
[suggested order and effort estimation]

## Appendix: Source Reviews
- File references
- Review dates (if available)
\`\`\`

## OUTPUT REQUIREMENTS

- Use Markdown formatting
- No HTML or special characters unless necessary
- Clear hierarchy with proper headings (# ## ###)
- Bullet points for lists
- Code blocks for examples
- Tables for comparative information when helpful
- Total length: Comprehensive but focused (avoid filler)

IMPORTANT:
- ZERO repetition
- SINGLE instance of each unique issue
- Group by category, not by source file
- Make it actionable and clear
`;
