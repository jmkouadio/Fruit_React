export const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="bg-secondary/20 rounded-full w-32 h-32 flex items-center justify-center">
              <div className="text-sm font-bold text-secondary text-center leading-tight">
                MEILLEURE<br />QUALITÉ
              </div>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-8xl animate-float">🍏</div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              À Propos<span className="text-muted-foreground">—</span>
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-4">
              Chez Juice Bar, nous croyons au pouvoir d'un rafraîchissement pur et naturel. Nos jus sont élaborés à partir de fruits cueillis à la main, sans sucres ajoutés ni conservateurs — juste une bonté honnête dans chaque gorgée.
            </p>
            <p className="text-muted-foreground italic">
              Que vous ayez envie d'un coup de boost matinal ou d'une pause rafraîchissante en milieu de journée, nous sommes là pour vous garder énergisé, en bonne santé et hydraté.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
