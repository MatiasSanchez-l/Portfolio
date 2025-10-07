import type { EducationProps } from "@/types";
import { useTranslations } from "@/hooks/useTranslations";

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  degreeKey: string;
  field?: string;
  fieldKey?: string;
  period: string;
  periodKey: string;
  gpa?: string;
  gpaKey?: string;
}

export function Education({ currentLang }: EducationProps) {
  const { t } = useTranslations(currentLang);

  const education: EducationItem[] = [
    {
      id: "unlam-bachelor",
      institution: "Universidad Nacional de La Matanza",
      degree: "Bachelor of Technology Management – Project Management",
      degreeKey: "education.unlam.bachelor.degree",
      period: "March 2024 – December 2025",
      periodKey: "education.unlam.bachelor.period"
    },
    {
      id: "unlam-associate",
      institution: "Universidad Nacional de La Matanza",
      degree: "Associate's Degree in Web Application Development",
      degreeKey: "education.unlam.associate.degree",
      field: "IT",
      fieldKey: "education.unlam.associate.field",
      period: "2019 – July 2022",
      periodKey: "education.unlam.associate.period",
      gpa: "GPA: 8.4 / 10",
      gpaKey: "education.unlam.associate.gpa"
    }
  ];

  return (
    <div className="space-y-8">
      {education.map((edu) => (
        <div 
          key={edu.id}
          className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Institution */}
          <h3 className="text-xl font-bold text-foreground mb-3">
            {edu.institution}
          </h3>

          {/* Degree and Field */}
          <div className="mb-3">
            <p className="text-lg font-semibold text-primary">
              {t(edu.degreeKey)}
            </p>
            {edu.fieldKey && (
              <p className="text-base text-muted-foreground">
                {t(edu.fieldKey)}
              </p>
            )}
          </div>

          {/* Period */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{t(edu.periodKey)}</span>
          </div>

          {/* GPA */}
          {edu.gpaKey && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t(edu.gpaKey)}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
