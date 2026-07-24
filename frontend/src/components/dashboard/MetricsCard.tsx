interface Props {
  title: string;
  children: React.ReactNode;
}

export default function MetricsCard({ title, children }: Props) {
  return (
    <div className="bg-white rounded-xl border p-5 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">
        {title}
      </h2>

      {children}
    </div>
  );
}
