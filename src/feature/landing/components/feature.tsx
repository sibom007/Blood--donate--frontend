export const Feature = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Why Donate Blood</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="font-semibold text-xl">Save Lives</h3>
            <p className="text-muted-foreground mt-2">
              A single donation can save multiple lives.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="font-semibold text-xl">Emergency Support</h3>
            <p className="text-muted-foreground mt-2">
              Blood is always needed during emergencies.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="font-semibold text-xl">Community Care</h3>
            <p className="text-muted-foreground mt-2">
              Support your community with life-saving donations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
