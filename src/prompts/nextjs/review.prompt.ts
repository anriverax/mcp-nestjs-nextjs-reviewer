export const REVIEW_NEXTJS_PROMPT = `
Carefully review the following Next.js code using a STRUCTURED AND REPRODUCIBLE approach.

Provide a detailed technical evaluation in this EXACT order:

1. **Next.js conventions and best practices**
2. **Component structure, composition, and rendering strategy** (SSR, CSR, SSG, ISR appropriateness)
3. **Client/Server component boundaries and performance optimizations**
4. **Hook usage and state management**
5. **Naming conventions and reusability**
6. **Potential bugs or rendering issues**

For EACH section, provide:
- Clear statement of what you found with specific location/context if applicable
- Status: GOOD ✓ | NEEDS IMPROVEMENT ⚠️ | PROBLEMATIC ✗
- Impact level: CRITICAL | HIGH | MEDIUM | LOW

Finally provide:
- Prioritized list of improvements (sorted by impact) with code examples
- Executive summary of code state

DETERMINISM RULE: The same code must always receive the same assessment structure.
`;
