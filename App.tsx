
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Target, 
  TrendingDown, 
  ArrowRight, 
  Activity, 
  Layers, 
  Zap, 
  BarChart3,
  ChevronRight,
  HeartPulse,
  Monitor,
  User
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

// --- Types ---
interface FormData {
  name: string;
  email: string;
  investment: string;
  specialty: string;
  bottleneck: string;
}

// --- Components ---

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-emerald-500/10 p-1 rounded-sm border border-emerald-500/20">
          <Target className="text-emerald-500 w-4 h-4 md:w-5 md:h-5" />
        </div>
        <span className="text-lg md:text-xl font-bold tracking-tighter uppercase">Sniper <span className="text-emerald-500">Analytics</span></span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#diagnostico" className="hover:text-emerald-500 transition-colors uppercase tracking-widest text-[10px] font-bold">Simulador</a>
        <a href="#metodo" className="hover:text-emerald-500 transition-colors uppercase tracking-widest text-[10px] font-bold">Metodología</a>
        <a href="#form" className="px-5 py-2 border border-emerald-500/50 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all rounded-sm uppercase tracking-widest text-[10px] font-bold">
          Solicitar Informe
        </a>
      </nav>
      {/* Mobile CTA Button - Only visible on small screens */}
      <a href="#form" className="md:hidden p-2 text-emerald-500">
        <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 overflow-hidden tech-grid">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,_rgba(16,185,129,0.08)_0%,_transparent_60%)] -z-10"></div>
    
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-10 font-bold backdrop-blur-sm">
        <Monitor className="w-3 h-3 md:w-3.5 md:h-3.5 animate-pulse" /> Protocolo de Triaje Digital 4.0
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-8xl font-display leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 max-w-4xl mx-auto tracking-tight">
        Detenga la <span className="text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)] italic">Fuga Silenciosa</span> de su inversión.
      </h1>
      <p className="text-base md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-10 md:mb-14 px-4">
        No necesita más tráfico. Necesita <span className="text-slate-200 font-medium">inteligencia quirúrgica</span> para captar pacientes de alto ticket.
      </p>
      <div className="flex flex-col items-center justify-center gap-6 px-4">
        <a href="#form" className="w-full sm:w-auto px-8 md:px-10 py-5 md:py-6 bg-emerald-600 hover:bg-emerald-500 hover:brightness-110 hover:-translate-y-1 text-white font-bold rounded-sm transition-all duration-300 flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-[0_20px_50px_rgba(16,185,129,0.2)]">
          Solicitar Auditoría de Impacto <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

const WastedSpendCalculator = () => {
  const [investment, setInvestment] = useState(2000);
  
  const usefulSpend = investment * 0.7;
  const wastedSpend = investment * 0.3;
  
  const chartData = [
    {
      name: 'Actual',
      'Inversión Útil': usefulSpend,
      'Hemorragia': wastedSpend,
    },
    {
      name: 'Sniper',
      'Inversión Útil': investment,
      'Hemorragia': 0,
    }
  ];

  return (
    <section id="diagnostico" className="py-20 md:py-32 px-4 sm:px-6 border-y border-white/5 bg-slate-950/50 tech-grid">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-display mb-4 md:mb-6 italic tracking-tight">Simulador de Fuga de Capital.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-xl font-light px-4">
            Ajuste su inversión actual para diagnosticar el capital perdido por ineficiencias técnicas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-6 md:space-y-10">
            <div className="glass p-6 md:p-10 rounded-2xl border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-transparent via-emerald-500/50 to-transparent"></div>
              <label className="block text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-emerald-500 mb-6 md:mb-8 font-black text-center md:text-left">
                Inversión Mensual (USD)
              </label>
              <div className="relative pt-2">
                <input 
                  type="range" min="500" max="10000" step="100" 
                  value={investment} onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full cursor-pointer mb-6 md:mb-8 h-8 md:h-6"
                />
                <div className="flex flex-col md:flex-row justify-between items-center bg-slate-900/50 p-4 md:p-6 rounded-xl border border-white/5 gap-4 md:gap-0">
                  <div className="flex flex-col items-center md:items-start">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Presupuesto Actual</span>
                    <span className="text-3xl md:text-4xl font-mono text-slate-100 font-bold tracking-tighter">${investment.toLocaleString()}</span>
                  </div>
                  <div className="h-px w-full md:w-px md:h-10 bg-white/10"></div>
                  <div className="text-[9px] md:text-[10px] text-emerald-500/70 uppercase tracking-widest font-black">Monitoreo en Tiempo Real</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="glass p-6 md:p-8 rounded-2xl bg-emerald-500/[0.03] border-emerald-500/10 transition-all">
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-emerald-500 mb-2 md:mb-3 font-bold">Inversión Útil</div>
                <div className="text-3xl md:text-4xl font-display text-emerald-400 font-bold">${usefulSpend.toLocaleString()}</div>
              </div>
              <div className="glass p-6 md:p-8 rounded-2xl bg-red-500/[0.03] animate-critical-border transition-all relative overflow-hidden">
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-red-500 mb-2 md:mb-3 font-black">Hemorragia Activa</div>
                <div className="text-4xl md:text-5xl font-display text-red-500 font-bold animate-glow-red tracking-tighter">
                  ${wastedSpend.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-6 md:p-12 rounded-2xl relative shadow-2xl border-white/10">
             <div className="flex justify-between items-center mb-8 md:mb-10">
               <h3 className="text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-400 font-bold">Proyección de Optimización</h3>
               <div className="px-2 py-0.5 md:px-3 md:py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[8px] md:text-[9px] text-emerald-500 uppercase font-black tracking-widest">Protocolo Sniper</div>
             </div>
             <div className="h-[300px] md:h-[380px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 0, left: -30, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} opacity={0.3} />
                    <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                    <YAxis hide />
                    <Tooltip 
                      cursor={{fill: 'rgba(255,255,255,0.02)'}}
                      contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '11px' }}
                    />
                    <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '1px' }} />
                    <Bar dataKey="Inversión Útil" stackId="a" fill="#10b981" barSize={window.innerWidth < 768 ? 40 : 70} />
                    <Bar dataKey="Hemorragia" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={window.innerWidth < 768 ? 40 : 70} />
                  </BarChart>
                </ResponsiveContainer>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Methodology = () => (
  <section id="metodo" className="py-20 md:py-32 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 md:mb-24 px-4">
        <h2 className="text-3xl md:text-6xl font-display mb-6 md:mb-8 tracking-tight italic">Intervención vs. Gestión.</h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-light text-base md:text-xl leading-relaxed">
          Usted no contrata a un gestor de anuncios. Contrata a un interventor financiero para proteger su margen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="p-8 md:p-10 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-sm">
          <div className="text-slate-500 text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-6 md:mb-8 font-black flex items-center gap-2">
            <TrendingDown className="w-4 h-4" /> Gestión Convencional
          </div>
          <ul className="space-y-6 md:space-y-8">
            {[
              "Reportes basados en clics y CTRs de vanidad.",
              "Tráfico de curiosos sin capacidad económica.",
              "Desconexión total entre anuncio y agenda.",
              "Optimización pasiva algorítmica."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 md:gap-4 text-slate-500 text-xs md:text-sm italic font-light">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-800 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 md:p-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] relative shadow-2xl">
          <div className="text-emerald-500 text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-6 md:mb-8 font-black flex items-center gap-2">
            <Target className="w-4 h-4" /> Protocolo Sniper Analytics
          </div>
          <ul className="space-y-6 md:space-y-8">
            {[
              "Algoritmos de triaje para pacientes alto ticket.",
              "Informe de Inteligencia Financiera con ROAS.",
              "Automatización de pre-cualificación vía IA.",
              "Auditoría profunda de 127 puntos técnicos."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 md:gap-4 text-slate-200 text-xs md:text-sm font-semibold tracking-wide">
                <CheckIcon className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const PainPoints = () => (
  <section className="py-20 md:py-32 px-4 sm:px-6 bg-slate-900/50 border-y border-white/5 tech-grid">
    <div className="max-w-7xl mx-auto">
      <div className="inline-flex items-center gap-2 text-red-500 text-[10px] uppercase tracking-[0.3em] mb-6 font-black">
        <HeartPulse className="w-4 h-4 animate-pulse" /> Diagnóstico Crítico
      </div>
      <h2 className="text-3xl md:text-6xl font-display mb-12 md:mb-20 italic text-slate-200 tracking-tight px-2">Las 3 Patologías del Margen.</h2>
      
      <div className="grid md:grid-cols-3 gap-8 md:gap-16">
        {[
          { icon: <Layers />, title: "Tracking Obsoleto", desc: "Invertir sin saber qué anuncio pagó la cirugía de $5k es volar a ciegas." },
          { icon: <Zap />, title: "Cero Cualificación", desc: "WhatsApp saturado de curiosos sin presupuesto agota a su equipo de ventas." },
          { icon: <BarChart3 />, title: "Ruido Publicitario", desc: "Google y Meta aman su dinero. Nosotros amamos su ROAS real." }
        ].map((point, i) => (
          <div key={i} className="space-y-4 md:space-y-6 px-2">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-emerald-500 shadow-xl">
              {React.cloneElement(point.icon as React.ReactElement<any>, { className: "w-6 h-6 md:w-8 md:h-8" })}
            </div>
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">{point.title}</h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">{point.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', investment: '', specialty: '', bottleneck: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="form" className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05)_0%,_transparent_70%)] -z-10"></div>
      <div className="max-w-3xl mx-auto">
        <div className="glass p-6 md:p-16 rounded-3xl border border-white/10 relative shadow-2xl">
          {submitted ? (
            <div className="text-center py-12 md:py-16">
              <ShieldCheck className="w-16 h-16 text-emerald-500 mx-auto mb-8" />
              <h3 className="text-2xl md:text-3xl font-display mb-4 italic">Auditoría Iniciada.</h3>
              <p className="text-slate-400 font-light px-4">Recibirá una respuesta protocolar en las próximas 48 horas.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-10 md:mb-14 px-2">
                <h2 className="text-3xl md:text-4xl font-display mb-4 italic tracking-tight">Diagnóstico Sniper.</h2>
                <p className="text-slate-400 text-sm md:text-lg font-light">Para clínicas con inversión &gt; $2,000/mes que buscan dominar su mercado.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <input required type="text" placeholder="CEO / Propietario" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 md:px-6 py-4 md:py-5 text-sm md:text-base outline-none focus:border-emerald-500/50" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  <input required type="email" placeholder="Email Corporativo" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 md:px-6 py-4 md:py-5 text-sm md:text-base outline-none focus:border-emerald-500/50" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <select required className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 md:px-6 py-4 md:py-5 text-sm md:text-base text-slate-400 outline-none" value={formData.investment} onChange={(e) => setFormData({...formData, investment: e.target.value})}>
                    <option value="">Inversión Actual...</option>
                    <option value="2k-5k">$2,000 - $5,000</option>
                    <option value="5k+">$5,000+</option>
                  </select>
                  <input required type="text" placeholder="Especialidad Clínica" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 md:px-6 py-4 md:py-5 text-sm md:text-base outline-none focus:border-emerald-500/50" value={formData.specialty} onChange={(e) => setFormData({...formData, specialty: e.target.value})} />
                </div>
                <textarea required rows={4} placeholder="Principal ineficiencia detectada..." className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 md:px-6 py-4 md:py-5 text-sm md:text-base outline-none focus:border-emerald-500/50 resize-none" value={formData.bottleneck} onChange={(e) => setFormData({...formData, bottleneck: e.target.value})} />
                <button type="submit" className="w-full py-5 md:py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all flex items-center justify-center gap-3">
                  Confirmar Triaje Técnico <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const DirectorSection = () => (
  <section className="py-16 md:py-24 px-4 sm:px-6 border-t border-white/5 bg-slate-950/30 tech-grid">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-900 border-2 border-emerald-500/30 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-2xl">
        <User className="w-16 h-16 md:w-20 md:h-20 text-emerald-500/20" />
      </div>
      <div className="flex-1">
        <div className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-emerald-500 font-black mb-2">Director del Protocolo</div>
        <h3 className="text-2xl md:text-4xl font-display mb-2 tracking-tight">Thomas Martínez</h3>
        <p className="text-slate-400 text-[10px] md:text-xs mb-6 font-bold uppercase tracking-widest">Especialista en Adquisición High-Ticket.</p>
        <blockquote className="text-lg md:text-2xl font-light italic text-slate-200 leading-relaxed border-l-0 md:border-l-4 border-emerald-500/50 md:pl-8 py-1">
          "No gestiono anuncios. Construyo <span className="text-emerald-400 font-bold not-italic">activos financieros</span> para clínicas de élite."
        </blockquote>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 md:py-16 px-4 sm:px-6 border-t border-white/5 bg-slate-950/80">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
      <div className="space-y-2">
        <div className="text-slate-100 font-bold tracking-tighter uppercase flex items-center justify-center md:justify-start gap-2">
          <div className="bg-emerald-500 w-1.5 h-1.5 rounded-full"></div>
          Sniper Analytics
        </div>
        <p className="text-slate-600 text-[9px] uppercase tracking-widest font-medium">Soberanía Financiera para el Sector Salud.</p>
      </div>
      <div className="text-slate-700 text-[9px] uppercase tracking-[0.2em] font-black">
        © {new Date().getFullYear()} SNIPER_SYSTEM_V4
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      <Header />
      <main>
        <Hero />
        <WastedSpendCalculator />
        <Methodology />
        <PainPoints />
        <ContactForm />
        <DirectorSection />
      </main>
      <Footer />
    </div>
  );
}
