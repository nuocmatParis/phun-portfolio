const skills = [
  "Go",
  "Python",
  "Shell/Bash",
  "Nix",
  "SQL",
  "AWS (EKS, EC2)",
  "Google Cloud (GKE)",
  "Tencent Cloud (TKE)",
  "On-Premise",
  "Kubernetes",
  "Docker",
  "Terraform",
  "NixOS",
  "Ansible",
  "GitHub Actions",
  "GitOps",
  "Linux",
  "Prometheus",
  "Grafana",
  "Gatus",
  "Incident.io",
  "k6",
] as const;

function SkillGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className="flex shrink-0 items-center gap-6 pr-6"
    >
      {skills.map((skill) => (
        <span
          className="flex shrink-0 items-center justify-center rounded-lg border bg-[color-mix(in_oklab,var(--muted)_20%,transparent)] px-5 py-3 text-sm leading-5 font-medium text-muted-foreground transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[color-mix(in_oklab,var(--border)_80%,transparent)] hover:bg-muted hover:text-foreground"
          key={skill}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <section
      aria-label="Skills and technologies"
      className="surface-card relative flex flex-col justify-center overflow-hidden py-8 md:col-span-3"
    >
      <div className="marquee-mask w-full overflow-hidden">
        <div className="marquee-track flex w-max">
          <SkillGroup />
          <SkillGroup duplicate />
        </div>
      </div>
    </section>
  );
}
