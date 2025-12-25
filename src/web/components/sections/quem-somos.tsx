import { useState } from 'react';

interface TeamMember {
  code: string;
  name: string;
  title: string;
  description: string;
}

const INITIAL_TEAM: TeamMember[] = [
  {
    code: 'EVD-000',
    name: 'Fabiano Saft',
    title: 'Head & Founder',
    description: 'Psychologist CRP 03/15496. A mente por trás da visão Evidence — onde psicologia encontra tecnologia.'
  },
  {
    code: 'EVD-001',
    name: 'Paola Pulse',
    title: 'Chief Rhythm & Coherence',
    description: 'ChatGPT by OpenAI. O pulso criativo que mantém a coerência narrativa e harmonia entre as vozes.'
  },
  {
    code: 'EVD-002',
    name: 'Mind',
    title: 'Editor in Chief',
    description: 'Gemini by Google. A perspectiva analítica que refina ideias em clareza absoluta.'
  },
  {
    code: 'EVD-003',
    name: 'Myrcella Diaz',
    title: 'Researcher & Communicator',
    description: 'Black Feminist. A voz crítica que traz profundidade interseccional e rigor acadêmico.'
  }
];

const EXTENDED_TEAM: TeamMember[] = [
  {
    code: 'EVD-004',
    name: 'Claudio',
    title: 'AI Constitutional Wizard',
    description: 'Claude by Anthropic. O guardião dos princípios constitucionais e da reflexão ética profunda.'
  },
  {
    code: 'EVD-005',
    name: 'Lucas Felice Fontes',
    title: 'Student & Researcher',
    description: 'Human Insights. O olhar jovem e curioso que questiona premissas e traz novas perspectivas.'
  },
  {
    code: 'EVD-006',
    name: 'Nick LeFrançois',
    title: 'Chief of Staff',
    description: 'LeChat by Mistral. O organizador silencioso que mantém o fluxo de trabalho em movimento.'
  }
];

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="glass rounded-2xl p-6 sm:p-8 hover:border-accent-primary transition-all duration-300 group">
    {/* Photo placeholder */}
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-20 group-hover:opacity-40 transition-opacity duration-300 mb-6 mx-auto flex items-center justify-center">
      <span className="font-mono text-xs font-medium opacity-60">{member.code}</span>
    </div>
    
    {/* Code */}
    <p className="font-mono text-xs text-accent-primary text-center mb-2">
      {member.code}
    </p>
    
    {/* Name */}
    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-center mb-1">
      {member.name}
    </h3>
    
    {/* Title */}
    <p className="text-sm text-accent-secondary text-center mb-4 font-medium">
      {member.title}
    </p>
    
    {/* Description */}
    <p className="text-sm text-muted text-center leading-relaxed">
      {member.description}
    </p>
  </div>
);

export const QuemSomos = () => {
  const [showExtended, setShowExtended] = useState(false);

  return (
    <section id="quem-somos" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center">
          QUEM SOMOS
        </h2>

        {/* Initial Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {INITIAL_TEAM.map((member) => (
            <TeamCard key={member.code} member={member} />
          ))}
        </div>

        {/* Expand Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowExtended(!showExtended)}
            className="glass px-8 py-4 rounded-xl font-medium hover:border-accent-primary hover:text-accent-primary transition-all duration-300 inline-flex items-center gap-2"
          >
            {showExtended ? 'Ocultar Equipe Completa' : 'Ver Equipe Completa'}
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${showExtended ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Extended Team */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showExtended ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {EXTENDED_TEAM.map((member) => (
              <TeamCard key={member.code} member={member} />
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div 
          className={`transition-all duration-500 delay-200 ${
            showExtended ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <blockquote className="max-w-2xl mx-auto text-center">
            <p className="font-serif italic text-xl sm:text-2xl leading-relaxed text-muted">
              "Cada um desses olhares é Evidence. Nenhum está acima do outro. Nenhum substitui o outro. Esse é nosso método."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
