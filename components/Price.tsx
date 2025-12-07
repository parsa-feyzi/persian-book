interface I_Props { price: number; styles?: string }

function Price({ price, styles }: I_Props) {
  return (
    <div className={`${styles} price flex items-top sm:text-2xl text-xl`}>
      {(price).toLocaleString()}
      <span className="flex flex-col items-end justify-top sm:text-xs text-[11px]! font-[dana-l] font-medium ps-0.5 text-black sm:-translate-y-0.5 -translate-y-1">
        <div className="translate-y-1.5 translate-x-px">ن</div>
        <div>توما</div>
      </span>
    </div>
  );
}

export default Price;
