const RECUSAMOS = [
  'A neutralidade tecnológica — toda tecnologia carrega valores, escolhas e consequências.',
  'O determinismo digital — o futuro não está escrito no código, mas nas decisões que tomamos.',
  'A redução do humano a dados — somos mais que padrões, métricas e previsões.',
  'A separação entre ética e inovação — não há progresso verdadeiro sem responsabilidade.'
];

const AFIRMAMOS = [
  'A tecnologia como expressão cultural — reflexo e moldadora da condição humana.',
  'A psicologia como bússola — para navegar a complexidade da experiência digital.',
  'A colaboração humano-máquina — não como substituição, mas como ampliação.',
  'A ética como fundação — não como decoração, mas como estrutura.'
];

export const Manifesto = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center">
          MANIFESTO EVIDENCE <span className="text-accent-primary">✦</span>
        </h2>

        {/* Introduction */}
        <p className="text-lg sm:text-xl text-muted text-center mb-16 max-w-2xl mx-auto">
          Em um mundo onde a inteligência artificial redefine o possível, declaramos nossa posição.
        </p>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Recusamos */}
          <div className="glass rounded-2xl p-8 sm:p-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-8 text-accent-secondary">
              RECUSAMOS
            </h3>
            <ul className="space-y-6">
              {RECUSAMOS.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-accent-secondary font-bold flex-shrink-0">✦</span>
                  <span className="text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Afirmamos */}
          <div className="glass rounded-2xl p-8 sm:p-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-8 text-accent-primary">
              AFIRMAMOS
            </h3>
            <ul className="space-y-6">
              {AFIRMAMOS.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-accent-primary font-bold flex-shrink-0">✦</span>
                  <span className="text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
