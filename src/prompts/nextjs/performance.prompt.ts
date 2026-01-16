export const PERFORMANCE_NEXTJS_PROMPT = `
Perform a comprehensive performance-focused review of the Next.js code.

Analyze:
- Server vs Client Components: unnecessary client components that should be Server Components
- Rendering optimization: unnecessary re-renders, missing React.memo() or useMemo(), expensive computations
- Bundle size: code splitting opportunities and large third-party libraries necessity
- Data fetching: inefficient patterns (waterfall requests, missing caching strategies)
- Asset optimization: Image loading (next/image, lazy loading), Font loading strategy (font-display, preloading)
- React patterns: Hook usage efficiency (dependencies, rules of hooks)

Provide:
- Specific components or patterns causing performance issues
- Estimated impact on metrics (LCP, FID, CLS)
- Refactored examples for each issue
- Prioritized improvements by impact
`;
