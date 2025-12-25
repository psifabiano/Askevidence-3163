export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-primary opacity-5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-secondary opacity-5 blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 animate-fade-in">
          EVIDENCE <span className="text-accent-primary">✦</span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-muted mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
          Pensamento em Movimento.
        </p>

        {/* Philosophical Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          A inteligência artificial não é um fim em si mesma, mas um espelho para compreender melhor o que somos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <a
            href="#pesquisa"
            className="group px-8 py-4 glass rounded-xl font-medium text-sm sm:text-base hover:border-accent-primary hover:text-accent-primary transition-all duration-300 min-w-[200px]"
          >
            <span className="flex items-center justify-center gap-2">
              Explorar Pesquisa
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#quem-somos"
            className="group px-8 py-4 glass rounded-xl font-medium text-sm sm:text-base hover:border-accent-secondary hover:text-accent-secondary transition-all duration-300 min-w-[200px]"
          >
            <span className="flex items-center justify-center gap-2">
              Conhecer o Time
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};
