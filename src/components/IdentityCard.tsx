export function IdentityCard() {
  return (
    <section className="surface-card flex flex-col justify-center p-8 sm:p-12 md:col-span-3">
      <div className="mb-6 flex w-fit items-center gap-2 rounded-full border bg-muted/50 px-3 py-1.5 text-[12px]/[16px] font-medium text-muted-foreground">
        <span className="relative size-2" aria-hidden="true">
          <span className="absolute inset-0 animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-[oklch(0.723_0.219_149.579)]" />
          <span className="absolute inset-0 rounded-full bg-[oklch(0.723_0.219_149.579)]" />
        </span>
        DevSecOps Engineer @ Verihubs
      </div>

      <h1 className="text-[36px]/[39.6px] font-bold tracking-[-0.9px] sm:text-[60px]/[66px] sm:tracking-[-1.5px] lg:text-[72px]/[79.2px] lg:tracking-[-1.8px]">
        Rayhan Kafi Pratama
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h2 className="text-[20px]/[22px] font-medium tracking-[-0.5px] text-muted-foreground sm:text-[24px]/[26.4px] sm:tracking-[-0.6px]">
          DevSecOps Engineer
        </h2>
        <span className="text-border" aria-hidden="true">
          /
        </span>
        <span className="font-mono text-[18px]/[28px] font-medium text-muted-foreground sm:text-[20px]/[28px]">
          @raexera
        </span>
      </div>
    </section>
  );
}
