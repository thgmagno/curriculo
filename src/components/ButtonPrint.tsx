export function ButtonPrint({ handlePrint }: { handlePrint: () => void }) {
  return (
    <div className="flex justify-end">
      <button
        onClick={handlePrint}
        className="fixed m-2 mx-2 rounded-lg border border-neutral-300 bg-emerald-500 px-2 py-1 font-bold text-white shadow"
      >
        Gerar PDF
      </button>
    </div>
  )
}
