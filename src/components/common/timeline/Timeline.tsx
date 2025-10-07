import type { TimelineProps } from "@/types";
import { useTranslations } from "@/hooks/useTranslations";
import { Badge } from "@/components/ui/badge";

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  periodKey?: string; // For translation keys
  location: string;
  type: string;
  technologies: string[];
  description?: string;
}

export function Timeline({ currentLang }: TimelineProps) {
  const { t } = useTranslations(currentLang);

  // Calculate current experience duration
  const calculateDuration = (startDate: Date) => {
    const now = new Date();
    const diffInMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;
    
    if (years > 0 && months > 0) {
      return currentLang === 'es' 
        ? `${years} ${years === 1 ? 'año' : 'años'} ${months} ${months === 1 ? 'mes' : 'meses'}`
        : `${years} ${years === 1 ? 'year' : 'years'} ${months} ${months === 1 ? 'month' : 'months'}`;
    } else if (years > 0) {
      return currentLang === 'es' 
        ? `${years} ${years === 1 ? 'año' : 'años'}`
        : `${years} ${years === 1 ? 'year' : 'years'}`;
    } else {
      return currentLang === 'es' 
        ? `${months} ${months === 1 ? 'mes' : 'meses'}`
        : `${months} ${months === 1 ? 'month' : 'months'}`;
    }
  };

  const currentPeriod = currentLang === 'es' 
    ? `Julio 2023 – Actualidad · ${calculateDuration(new Date(2023, 6))}`
    : `July 2023 – Present · ${calculateDuration(new Date(2023, 6))}`;

  const experiences: Experience[] = [
    {
      id: "santander-ssr",
      company: "Santander Tecnología Argentina",
      position: "profile.experience.santander.ssr.position",
      period: currentPeriod,
      location: "Argentina",
      type: "profile.experience.santander.ssr.type",
      technologies: ["React", "Nextjs", "Formik", "Java", "Spring Boot", "MacOS", "GIT", "Jira"],
      description: "profile.experience.santander.ssr.description"
    },
    {
      id: "santander-junior",
      company: "Santander Tecnología Argentina",
      position: "profile.experience.santander.junior.position",
      period: "profile.experience.santander.junior.period",
      location: "Argentina",
      type: "profile.experience.santander.junior.type",
      technologies: ["React", "Nextjs", "XSL", "Java 8", "Spring Boot", "Nodejs", "MongoDB", "OracleDB", "MacOS", "GIT", "Jira"],
      description: "profile.experience.santander.junior.description"
    },
    {
      id: "artekium",
      company: "Artekium Technology Studio",
      position: "profile.experience.artekium.position",
      period: "profile.experience.artekium.period",
      location: "Argentina",
      type: "profile.experience.artekium.type",
      technologies: ["Java 8", "Spring", "ZK", "Angular", "Informix", "Docker", "Ubuntu 20.04", "Bitbucket", "GIT", "Jira"],
      description: "profile.experience.artekium.description"
    }
  ];

  return (
    <div className="relative">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative flex gap-6">
            {/* Timeline dot */}
            <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary border-4 border-background">
              <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
            </div>
            
            {/* Timeline line - only between dots, not after the last one */}
            {index < experiences.length - 1 && (
              <div className="absolute left-4 top-8 w-0.5 bg-border" style={{ height: 'calc(100% + 2rem)' }}></div>
            )}
            
            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="bg-background border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                {/* Company and Position */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.company}
                  </h3>
                  <h4 className="text-lg font-medium text-primary mb-2">
                    {t(exp.position)}
                  </h4>
                  
                  {/* Meta information */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.period.startsWith('profile.') ? t(exp.period) : exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                      {t(exp.type)}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                {exp.description && (
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t(exp.description)}
                  </p>
                )}
                
                {/* Technologies */}
                <div>
                  <h5 className="text-sm font-medium text-foreground mb-3">
                    {t("profile.experience.technologies")}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
