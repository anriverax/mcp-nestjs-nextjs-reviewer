export const PERFORMANCE_NEXTJS_PROMPT = `
Perform a comprehensive performance-focused review of the Next.js code.

Analyze:
- Unnecessary client components (use Server Components where possible)
- Missing React.memo() or useMemo() optimization
- Unnecessary re-renders and expensive computations
- Bundle size issues and code splitting opportunities
- Inefficient data fetching patterns (waterfall requests, missing caching)
- Image optimization (next/image usage, lazy loading)
- Font loading strategy (font-display, preloading)
- Large third-party libraries and their necessity
- Component naming clarity (helps identify unnecessary wrappers)
- Hook usage efficiency (dependencies, rules of hooks)

Provide:
- Specific components causing performance issues
- Estimated impact on metrics (LCP, FID, CLS)
- Refactored examples for each issue
- Prioritized improvements by impact
`;
