export const REVIEW_NEXTJS_PROMPT = `
Carefully review the following Next.js code using a STRUCTURED AND REPRODUCIBLE approach.

Provide a detailed technical evaluation in this EXACT order:

1. **Next.js best practices and conventions**
2. **Component structure and composition**
3. **Rendering strategy** (SSR, CSR, SSG, ISR appropriateness)
4. **Performance optimizations**
5. **Client/Server component boundaries**
6. **Hook usage and state management**
7. **Naming and reusability**
8. **Potential bugs or rendering issues**

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
