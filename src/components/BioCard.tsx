export function BioCard() {
  return (
    <div className="surface-card flex flex-col justify-center p-8 sm:p-10 md:col-span-2">
      <span className="mb-4 text-sm leading-5 font-medium text-foreground">
        Who I Am?
      </span>
      <p className="text-base leading-[26px] font-normal text-muted-foreground sm:text-[18px] sm:leading-[29.25px]">
        DevSecOps Engineer specializing in hybrid multi-cloud and on-premise
        infrastructure, alongside distributed systems. Experienced in low-level
        Linux debugging and building custom internal developer platforms (IDP)
        using Go and Python. Linux enthusiast and advocate for Immutable
        Infrastructure (NixOS) and Reproducible Builds, with a strong commitment
        to open-source contributions.
      </p>
    </div>
  )
}
