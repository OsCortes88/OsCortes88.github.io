// SectionHeading.jsx
export default function SectionHeading({
  children,
  leftColor = "border-(--brand-red)",
  rightColor = "border-(--brand-purple)",
}) {
  return (
    <div className="flex items-center justify-center my-8 w-full">
      <div className={`flex-1 max-w-[33vw] border-t ${leftColor}`} />
      <h2 className="shrink-0 px-4 sm:px-6 md:px-8 text-xl sm:text-2xl md:text-3xl uppercase text-center">
        {children}
      </h2>
      <div className={`flex-1 max-w-[33vw] border-t ${rightColor}`} />
    </div>
  );
}
