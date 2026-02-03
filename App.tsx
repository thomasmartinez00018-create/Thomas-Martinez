
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
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-emerald-500/10 p-1.5 rounded-sm border border-emerald-500/20">
          <Target className="text-emerald-500 w-5 h-5" />
        </div>
        <span className="text-xl font-bold tracking-tighter uppercase">Sniper <span className="text-emerald-500">Analytics</span></span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#diagnostico" className="hover:text-emerald-500 transition-colors uppercase tracking-widest text-[10px] font-bold">Simulador</a>
        <a href="#metodo" className="hover:text-emerald-500 transition-colors uppercase tracking-widest text-[10px] font-bold">Metodología</a>
        <a href="#form" className="px-5 py-2 border border-emerald-500/50 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all rounded-sm uppercase tracking-widest text-[10px] font-bold">
          Solicitar Informe
        </a>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative pt-40 pb-24 px-6 overflow-hidden tech-grid">
    {/* Vercel-style radial light */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,_rgba(16,185,129,0.08)_0%,_transparent_60%)] -z-10"></div>
    
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-[10px] uppercase tracking-[0.3em] mb-10 font-bold backdrop-blur-sm">
        <Monitor className="w-3.5 h-3.5 animate-pulse" /> Protocolo de Triaje Digital 4.0
      </div>
      <h1 className="text-5xl md:text-8xl font-display leading-[1.05] mb-8 max-w-4xl mx-auto tracking-tight">
        Detenga la <span className="text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)] italic">Fuga Silenciosa</span> de su inversión en Ads.
      </h1>
      <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-14">
        No necesita más tráfico. Necesita <span className="text-slate-200 font-medium">inteligencia quirúrgica</span> para captar pacientes de alto ticket sin desperdiciar un solo dólar.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a href="#form" className="w-full sm:w-auto px-10 py-6 bg-emerald-600 hover:bg-emerald-500 hover:brightness-110 hover:-translate-y-1 text-white font-bold rounded-sm transition-all duration-300 flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-xs shadow-[0_20px_50px_rgba(16,185,129,0.2)]">
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
    <section id="diagnostico" className="py-32 px-6 border-y border-white/5 bg-slate-950/50 tech-grid">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display mb-6 italic tracking-tight">Simulador de Fuga de Capital.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light">
            Mueva el deslizador para ver cuánto capital está donando a su competencia por ineficiencias técnicas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div className="glass p-10 rounded-2xl border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-transparent via-emerald-500/50 to-transparent"></div>
              <label className="block text-[11px] uppercase tracking-[0.4em] text-emerald-500 mb-8 font-black">
                Inversión Mensual en Ads (USD)
              </label>
              <div className="relative pt-2">
                <input 
                  type="range" min="500" max="10000" step="100" 
                  value={investment} onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full cursor-pointer mb-8"
                />
                <div className="flex justify-between items-center bg-slate-900/50 p-6 rounded-xl border border-white/5">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Monto Seleccionado</span>
                    <span className="text-4xl font-mono text-slate-100 font-bold tracking-tighter">${investment.toLocaleString()}</span>
                  </div>
                  <div className="h-10 w-px bg-white/10 hidden md:block"></div>
                  <div className="text-[10px] text-emerald-500/70 uppercase tracking-widest font-black hidden md:block">Sistema Operativo</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-8 rounded-2xl bg-emerald-500/[0.03] border-emerald-500/10 transition-all hover:bg-emerald-500/[0.05]">
                <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-500 mb-3 font-bold">Presupuesto Útil</div>
                <div className="text-4xl font-display text-emerald-400 font-bold">${usefulSpend.toLocaleString()}</div>
                <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-medium">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Impacto Directo
                </div>
              </div>
              <div className="glass p-8 rounded-2xl bg-red-500/[0.03] animate-critical-border transition-all relative overflow-hidden group">
                <div className="text-[10px] uppercase tracking-[0.2em] text-red-500 mb-3 font-black">Capital Perdido (Mensual)</div>
                <div className="text-5xl font-display text-red-500 font-bold animate-glow-red tracking-tighter">
                  ${wastedSpend.toLocaleString()}
                </div>
                <div className="mt-4 flex items-center gap-2 text-[10px] text-red-500/60 uppercase tracking-widest font-bold italic">
                  <Activity className="w-3 h-3" /> Hemorragia Activa
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-12 rounded-2xl relative shadow-2xl border-white/10">
             <div className="flex justify-between items-center mb-10">
               <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400 font-bold">Optimización con Sniper</h3>
               <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[9px] text-emerald-500 uppercase font-black tracking-widest">Live Preview</div>
             </div>
             <div className="h-[380px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 0, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} opacity={0.5} />
                    <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} dy={15} fontVariant="small-caps" />
                    <YAxis hide />
                    <Tooltip 
                      cursor={{fill: 'rgba(255,255,255,0.02)'}}
                      contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px' }}
                      itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                    />
                    <Legend iconType="circle" wrapperStyle={{ paddingTop: '30px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.7 }} />
                    <Bar 
                      dataKey="Inversión Útil" 
                      stackId="a" 
                      fill="#10b981" 
                      radius={[0, 0, 0, 0]} 
                      barSize={70} 
                      isAnimationActive={true}
                    />
                    <Bar 
                      dataKey="Hemorragia" 
                      stackId="a" 
                      fill="#ef4444" 
                      radius={[6, 6, 0, 0]} 
                      barSize={70} 
                      isAnimationActive={true}
                    />
                  </BarChart>
                </ResponsiveContainer>
             </div>
             <div className="mt-10 p-4 border border-white/5 rounded-xl bg-slate-900/30 text-center">
               <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-[0.15em] font-medium">
                 El protocolo Sniper elimina el desperdicio reasignando cada dólar a la <span className="text-emerald-500 font-black">conversión real</span>.
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Methodology = () => (
  <section id="metodo" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-display mb-8 tracking-tight italic">Intervención vs. Gestión.</h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-light text-xl leading-relaxed">
          Usted no contrata a un gestor de anuncios. Contrata a un interventor financiero para proteger su margen de beneficio.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="p-10 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-sm group hover:border-white/10 transition-all">
          <div className="text-slate-500 text-[10px] uppercase tracking-[0.3em] mb-8 font-black flex items-center gap-2">
            <TrendingDown className="w-4 h-4" /> Gestión Convencional
          </div>
          <ul className="space-y-8">
            {[
              "Configuración genérica sin triaje de pacientes.",
              "Reportes basados en clics y CTRs de vanidad.",
              "Tráfico de curiosos sin capacidad económica.",
              "Desconexión total entre el anuncio y la agenda.",
              "Optimización pasiva esperando que el algoritmo 'aprenda'."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-slate-500 text-sm italic font-light">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-800" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] relative shadow-2xl shadow-emerald-500/5 group hover:border-emerald-500/40 transition-all">
          <div className="absolute top-6 right-10 text-emerald-500/20 group-hover:text-emerald-500/40 transition-all">
            <ShieldCheck className="w-12 h-12" />
          </div>
          <div className="text-emerald-500 text-[10px] uppercase tracking-[0.3em] mb-8 font-black flex items-center gap-2">
            <Target className="w-4 h-4" /> Protocolo Sniper Analytics
          </div>
          <ul className="space-y-8">
            {[
              "Algoritmos de triaje para filtrar pacientes de alto ticket.",
              "Informe de Inteligencia Financiera con ROAS quirúrgico.",
              "Automatización de pre-cualificación vía Scripts de IA.",
              "Auditoría de 127 puntos de control técnico profundo.",
              "Soberanía absoluta sobre el CPL (Costo por Lead) rentable."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-slate-200 text-sm font-semibold tracking-wide">
                <CheckIcon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
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
  <section className="py-32 px-6 bg-slate-900/50 border-y border-white/5 tech-grid">
    <div className="max-w-7xl mx-auto">
      <div className="inline-flex items-center gap-2 text-red-500 text-[10px] uppercase tracking-[0.4em] mb-6 font-black">
        <HeartPulse className="w-4 h-4 animate-pulse" /> Diagnóstico Crítico de Sistema
      </div>
      <h2 className="text-4xl md:text-6xl font-display mb-20 italic text-slate-200 tracking-tight">Las 3 Patologías que Drenan su Rentabilidad.</h2>
      
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-6 group">
          <div className="w-16 h-16 rounded-xl bg-red-500/5 flex items-center justify-center text-red-500 border border-red-500/10 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-all duration-500 shadow-xl shadow-red-500/5">
            <Layers className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-tighter">Tracking Obsoleto</h3>
          <p className="text-base text-slate-400 leading-relaxed font-light">
            Invertir sin saber qué anuncio pagó la cirugía de $5k es volar a ciegas. Restauramos su visión técnica total.
          </p>
        </div>

        <div className="space-y-6 group">
          <div className="w-16 h-16 rounded-xl bg-orange-500/5 flex items-center justify-center text-orange-500 border border-orange-500/10 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-all duration-500 shadow-xl shadow-orange-500/5">
            <Zap className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-tighter">Cero Cualificación</h3>
          <p className="text-base text-slate-400 leading-relaxed font-light">
            WhatsApp saturado de curiosos sin dinero agota a su equipo. Implementamos triaje digital antes del contacto.
          </p>
        </div>

        <div className="space-y-6 group">
          <div className="w-16 h-16 rounded-xl bg-blue-500/5 flex items-center justify-center text-blue-500 border border-blue-500/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500 shadow-xl shadow-blue-500/5">
            <BarChart3 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-tighter">Ruido Publicitario</h3>
          <p className="text-base text-slate-400 leading-relaxed font-light">
            Google y Meta aman su dinero. Nosotros amamos su ROAS. Eliminamos el tráfico 'basura' para atraer solo al 1%.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    investment: '',
    specialty: '',
    bottleneck: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="form" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05)_0%,_transparent_70%)] -z-10"></div>
      
      <div className="max-w-3xl mx-auto">
        <div className="glass p-10 md:p-20 rounded-3xl border border-white/10 relative shadow-2xl">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-2.5 bg-emerald-600 text-white text-[11px] uppercase tracking-[0.4em] font-black rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.4)]">
            Acceso Prioritario
          </div>
          
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-10">
                <ShieldCheck className="w-10 h-10 text-emerald-500" />
              </div>
              <h3 className="text-3xl font-display mb-6 italic">Auditoría Iniciada.</h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Nuestro equipo revisará su caso en las próximas 48 horas. Espere nuestro contacto protocolar.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-14">
                <h2 className="text-4xl font-display mb-6 italic tracking-tight">Solicite su Diagnóstico Sniper.</h2>
                <p className="text-slate-400 text-lg font-light">Para clínicas con inversión > $2,000/mes que buscan dominar su mercado local.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">Propietario / CEO</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-6 py-5 text-base focus:border-emerald-500/50 transition-all outline-none focus:bg-slate-900"
                      placeholder="Dr. Alberto Mendoza"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">Email Corporativo</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-6 py-5 text-base focus:border-emerald-500/50 transition-all outline-none focus:bg-slate-900"
                      placeholder="alberto@clinicamendoza.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">Presupuesto Ads</label>
                    <select 
                      required
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-6 py-5 text-base focus:border-emerald-500/50 transition-all outline-none text-slate-400 appearance-none focus:bg-slate-900"
                      value={formData.investment}
                      onChange={(e) => setFormData({...formData, investment: e.target.value})}
                    >
                      <option value="">Rango Mensual...</option>
                      <option value="2k-5k">$2,000 - $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k+">$15,000+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">Especialidad Clínica</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-6 py-5 text-base focus:border-emerald-500/50 transition-all outline-none focus:bg-slate-900"
                      placeholder="Ej: Odontología Estética"
                      value={formData.specialty}
                      onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">Patología de Negocio Actual</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-6 py-5 text-base focus:border-emerald-500/50 transition-all outline-none resize-none focus:bg-slate-900"
                    placeholder="Describa su principal ineficiencia (ej: leads que no agendan, CPL alto...)"
                    value={formData.bottleneck}
                    onChange={(e) => setFormData({...formData, bottleneck: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-6 bg-emerald-600 hover:bg-emerald-500 hover:brightness-110 hover:-translate-y-1 text-white font-black rounded-xl uppercase tracking-[0.3em] text-xs transition-all duration-300 flex items-center justify-center gap-4 shadow-2xl shadow-emerald-600/20"
                >
                  Confirmar Solicitud de Triaje <ChevronRight className="w-5 h-5" />
                </button>
                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-600 uppercase tracking-widest font-black opacity-60">
                  <ShieldCheck className="w-3 h-3" /> Protección de Datos Encriptada (GDRP)
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const DirectorSection = () => (
  <section className="py-24 px-6 border-t border-white/5 bg-slate-950/30 tech-grid overflow-hidden">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
      <div className="relative group">
         <div className="absolute -inset-1 bg-emerald-500/20 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
         <div className="relative w-40 h-40 rounded-full bg-slate-900 border-2 border-emerald-500/30 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
            <User className="w-20 h-20 text-emerald-500/20" />
            {/* If there was an image source, it would be placed here with object-cover */}
         </div>
      </div>
      <div className="flex-1 text-center md:text-left">
        <div className="text-[10px] uppercase tracking-[0.4em] text-emerald-500 font-black mb-3">Director del Protocolo</div>
        <h3 className="text-3xl md:text-4xl font-display mb-3 tracking-tight italic">Thomas Martínez</h3>
        <p className="text-slate-400 text-xs md:text-sm mb-8 font-bold uppercase tracking-[0.2em]">Especialista en Adquisición de Pacientes High-Ticket.</p>
        <blockquote className="text-xl md:text-2xl font-light italic text-slate-200 leading-relaxed border-l-4 border-emerald-500/50 pl-8 py-2 relative">
          <span className="absolute -top-4 -left-2 text-emerald-500/10 text-7xl font-serif">"</span>
          "No gestiono anuncios. Construyo <span className="text-emerald-400 font-bold not-italic">activos financieros</span> para clínicas."
        </blockquote>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 px-6 border-t border-white/5 bg-slate-950/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-slate-100 font-bold tracking-tighter uppercase">
          <div className="bg-emerald-500 w-2 h-2 rounded-full animate-pulse"></div>
          Sniper Analytics System
        </div>
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em] font-medium">
          Soberanía Financiera para el Sector Salud Elite.
        </p>
      </div>
      
      <div className="flex gap-12 text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold">
        <a href="#" className="hover:text-emerald-500 transition-colors">Términos Legales</a>
        <a href="#" className="hover:text-emerald-500 transition-colors">Protección de Datos</a>
        <a href="#" className="hover:text-emerald-500 transition-colors">Cookies</a>
      </div>
      
      <div className="text-slate-700 text-[10px] uppercase tracking-[0.3em] font-black">
        © {new Date().getFullYear()} SNIPER_PRO_X1
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
