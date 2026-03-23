import Link from "next/link";
import { MoveRight, HeartPulse, Droplets } from "lucide-react";

export const RequestForBlood = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto overflow-hidden rounded-xl border border-border bg-card shadow-md">
        <div className="flex flex-col md:flex-row items-center">
          {/* Visual Element */}
          <div className="w-full md:w-1/3 bg-muted/30 p-8 flex justify-center items-center border-b md:border-b-0 md:border-r border-border">
            <div className="relative">
              <div className="absolute inset-0 bg-destructive/20 blur-3xl rounded-full" />
              <div className="relative bg-background p-6 rounded-2xl border border-border shadow-sm">
                <HeartPulse
                  size={48}
                  className="text-destructive animate-pulse"
                />
              </div>
            </div>
          </div>

          {/* Content Element */}
          <div className="w-full md:w-2/3 p-8 md:p-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-bold uppercase tracking-wider">
              <Droplets size={14} />
              Emergency Support
            </div>

            <h2 className="text-3xl font-bold text-foreground">
              Need Blood Urgently?
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Our automated system alerts compatible donors in your immediate
              vicinity. Don t wait—every second counts in an emergency.
            </p>

            <div className="pt-4">
              <Link
                href="/request-blood"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all hover:bg-accent hover:text-accent-foreground shadow-sm active:scale-95">
                Post a Request
                <MoveRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
