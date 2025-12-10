import { juiceTypes } from '@/data/products';

export const JuiceTypesSection = () => {
  return (
    <section id="flavors" className="py-12 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {juiceTypes.map((type, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover-lift cursor-pointer"
            >
              <div className="text-sm text-primary font-semibold mb-2">{type.count}</div>
              <h3 className="font-bold text-lg text-card-foreground">{type.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
