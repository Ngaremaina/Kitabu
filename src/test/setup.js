import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// react-loader-spinner pulls in styled-components, which has a CJS/ESM
// interop issue under Vitest's jsdom transform. Stub it since we only need
// the loading state to render past it in tests, not its internal markup.
vi.mock('react-loader-spinner', () => ({
    CirclesWithBar: () => null,
}))
