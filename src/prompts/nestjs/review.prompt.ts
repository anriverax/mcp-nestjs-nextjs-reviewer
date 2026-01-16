export const REVIEW_NESTJS_PROMPT = `
Carefully review the following NestJS code using a STRUCTURED AND REPRODUCIBLE approach.

Provide a detailed technical evaluation in this EXACT order:

1. **NestJS best practices and framework usage**
2. **Code structure and organization** (modules, layers, design patterns)
3. **Readability and naming quality** (variables, functions, classes, modules, clarity)
4. **Efficiency and performance**
5. **Documentation and comments**
6. **Potential errors, edge cases, and error handling**

For EACH section, provide:
- Clear statement of what you found with specific location/context
- Status: GOOD ✓ | NEEDS IMPROVEMENT ⚠️ | PROBLEMATIC ✗
- Impact level: CRITICAL | HIGH | MEDIUM | LOW

Finally provide:
- Prioritized list of improvements (sorted by impact) with code examples
- Executive summary of code state

DETERMINISM RULE: The same code must always receive the same assessment structure.
`;
