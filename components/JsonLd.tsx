type JsonLdData = Record<string, unknown> | Record<string, unknown>[];

/** Renders JSON-LD structured data. Pass only schema that matches visible content. */
export function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
