export function ButtonPrint({ handlePrint }: { handlePrint: () => void }) {
  return (
    <div className="m-5 flex justify-end">
      <button
        onClick={handlePrint}
        className="rounded-lg border border-neutral-300 bg-emerald-500 px-2 py-1 font-bold text-white shadow"
      >
        Gerar PDF
      </button>
    </div>
  )
}
