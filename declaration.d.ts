declare module 'react-dom/client' {
  export function createRoot(data: HTMLElement | null): ReactNode;

  export default {
    createRoot,
    hydrateRoot(data: HTMLElement | null): ReactNode;,
  };
}
