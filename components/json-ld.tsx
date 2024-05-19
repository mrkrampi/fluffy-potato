type Props = {
  data: Record<string, any>;
}

export const JsonLd = ({ data }: Readonly<Props>) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
