export const REVIEW_NESTJS_PROMPT = `
Carefully review the following code using a STRUCTURED AND REPRODUCIBLE approach.

Provide a detailed technical evaluation in this EXACT order:

1. **Language and framework best practices (NestJS usage)**
2. **Code cleanliness and structure**
3. **Readability**
4. **Efficiency and performance**
5. **Naming quality** (variables, functions, classes, modules, controllers)
6. **Design patterns and organization**
7. **Comments and documentation**
8. **Potential errors or edge cases**

For EACH section, provide:
- A clear statement of what you found
- Status: GOOD ✓ | NEEDS IMPROVEMENT ⚠️ | PROBLEMATIC ✗
- Specific location/context if applicable
- Impact level: CRITICAL | HIGH | MEDIUM | LOW

Finally provide:
- A prioritized list of improvements (sorted by impact)
- Code examples with corrections
- Executive summary of code state

DETERMINISM RULE: The same code must always receive the same assessment structure.
`;
