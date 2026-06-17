/* Minimal ambient shims so `tsc` can type-check project logic
   while npm registry access is unavailable. Not used by the real build. */
declare const process: any;

declare module "react" {
  export type ReactNode = any;
  export type CSSProperties = any;
  export function useState<T>(init: T | (() => T)): [T, (v: T | ((p: T) => T)) => void];
  export function useEffect(fn: (...a: any[]) => any, deps?: any[]): void;
  export function useRef<T>(init?: T | null): { current: T };
  export function useId(): string;
  export function useCallback<T>(fn: T, deps: any[]): T;
  const React: any;
  export default React;
}

declare namespace React {
  type ReactNode = any;
  type CSSProperties = any;
  type FormEvent = any;
  type MouseEvent = any;
}

declare module "next" {
  export type Metadata = any;
  export type NextConfig = any;
  export namespace MetadataRoute {
    type Sitemap = any;
    type Robots = any;
  }
}
declare module "next/link" { const Link: any; export default Link; }
declare module "next/script" { const Script: any; export default Script; }
declare module "next/navigation" {
  export function usePathname(): string;
  export function notFound(): never;
}
declare module "next/server" { export const NextResponse: any; }

declare namespace JSX {
  interface IntrinsicElements { [elemName: string]: any; }
  interface Element {}
  interface ElementChildrenAttribute { children: {}; }
}

declare module "*.css";

declare namespace JSX {
  interface IntrinsicAttributes { key?: any; }
}
