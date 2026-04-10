import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/e221788a-da44-4ad4-8197-021653002bd2/files/2ab1cd8f-6ede-46ff-ab53-065aef5c18e8.jpg";

const projects = [
  {
    id: 1,
    title: "Веб-приложение",
    category: "Разработка",
    description: "Современное SPA с интерактивным интерфейсом и API-интеграцией",
    tags: ["React", "TypeScript", "REST API"],
    year: "2024",
    color: "#00F5D4",
    emoji: "⚡",
  },
  {
    id: 2,
    title: "Мобильный дизайн",
    category: "UI/UX",
    description: "Дизайн-система и прототипирование для мобильного приложения",
    tags: ["Figma", "Design System", "Prototype"],
    year: "2024",
    color: "#BF5AF2",
    emoji: "🎨",
  },
  {
    id: 3,
    title: "Корпоративный сайт",
    category: "Frontend",
    description: "Лендинг с анимациями, формами и CMS-интеграцией",
    tags: ["Next.js", "Tailwind", "CMS"],
    year: "2023",
    color: "#FF6B6B",
    emoji: "💻",
  },
  {
    id: 4,
    title: "Dashboard аналитики",
    category: "Разработка",
    description: "Панель управления с графиками и отчётами в реальном времени",
    tags: ["Vue", "Charts", "PostgreSQL"],
    year: "2023",
    color: "#F7C948",
    emoji: "📊",
  },
  {
    id: 5,
    title: "E-commerce платформа",
    category: "Fullstack",
    description: "Интернет-магазин с корзиной, оплатой и личным кабинетом",
    tags: ["React", "Node.js", "Stripe"],
    year: "2023",
    color: "#00C2FF",
    emoji: "🚀",
  },
  {
    id: 6,
    title: "Брендинг & Айдентика",
    category: "Дизайн",
    description: "Разработка логотипа, фирменного стиля и брендбука",
    tags: ["Illustrator", "Brand", "Logo"],
    year: "2022",
    color: "#FF9F43",
    emoji: "✏️",
  },
];

const skills = [
  { name: "Frontend", level: 95, color: "#00F5D4" },
  { name: "Backend", level: 80, color: "#BF5AF2" },
  { name: "UI/UX Design", level: 85, color: "#FF6B6B" },
  { name: "Mobile", level: 70, color: "#F7C948" },
];

const contacts = [
  { icon: "Mail", label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
  { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00", href: "tel:+79990000000" },
  { icon: "MessageCircle", label: "Telegram", value: "@username", href: "https://t.me/username" },
  { icon: "Linkedin", label: "LinkedIn", value: "linkedin.com/in/username", href: "#" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Все");

  const categories = ["Все", "Разработка", "UI/UX", "Frontend", "Fullstack", "Дизайн"];
  const filtered = activeFilter === "Все" ? projects : projects.filter((p) => p.category === activeFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-white overflow-x-hidden" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-xl bg-[#080C14]/70 border-b border-white/5">
        <span className="text-xl tracking-widest text-white/90 uppercase font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Portfolio
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#work" className="hover:text-[#00F5D4] transition-colors">Работы</a>
          <a href="#skills" className="hover:text-[#00F5D4] transition-colors">Навыки</a>
          <a href="#contact" className="hover:text-[#00F5D4] transition-colors">Контакт</a>
        </div>
        <a
          href="#contact"
          className="px-5 py-2 rounded-full text-sm font-medium bg-[#00F5D4] text-[#080C14] hover:bg-[#00F5D4]/80 transition-all"
        >
          Связаться
        </a>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})`, opacity: 0.25 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080C14]/40 via-transparent to-[#080C14]" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ background: "#00F5D4" }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-15" style={{ background: "#BF5AF2" }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 text-[#00F5D4] text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse inline-block" />
            Открыт к новым проектам
          </div>

          <h1
            className="text-6xl md:text-8xl font-bold uppercase leading-none mb-6"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Иван<br />
            <span style={{ WebkitTextStroke: "2px #00F5D4", color: "transparent" }}>Петров</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Fullstack-разработчик и UI/UX дизайнер. Создаю цифровые продукты, которые работают быстро, выглядят современно и решают реальные задачи бизнеса.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#work"
              className="px-8 py-4 rounded-full font-semibold bg-[#00F5D4] text-[#080C14] hover:scale-105 transition-all text-base"
            >
              Смотреть работы
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-semibold border border-white/20 text-white hover:border-white/50 hover:scale-105 transition-all text-base"
            >
              Написать мне
            </a>
          </div>

          <div className="flex items-center justify-center gap-12 mt-20">
            {[["5+", "лет опыта"], ["40+", "проектов"], ["30+", "клиентов"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-bold text-[#00F5D4]" style={{ fontFamily: "'Oswald', sans-serif" }}>{num}</div>
                <div className="text-white/40 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/30" />
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-[#00F5D4] text-sm font-medium tracking-widest uppercase mb-3">Портфолио</p>
          <h2 className="text-5xl font-bold uppercase mb-8" style={{ fontFamily: "'Oswald', sans-serif" }}>Избранные работы</h2>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-[#00F5D4] text-[#080C14]"
                    : "border border-white/15 text-white/50 hover:border-white/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden border border-white/8 bg-white/[0.03] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div
                className="h-48 flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
                >
                  {project.emoji}
                </div>
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}30` }}
                >
                  {project.year}
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">{project.category}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00F5D4] transition-colors" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/40 border border-white/8">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#BF5AF2] text-sm font-medium tracking-widest uppercase mb-3 text-center">Экспертиза</p>
          <h2 className="text-5xl font-bold uppercase mb-16 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>Навыки</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-white/80">{skill.name}</span>
                  <span className="text-xl font-bold" style={{ color: skill.color, fontFamily: "'Oswald', sans-serif" }}>{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/8 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "Code2", label: "React / Vue / Next" },
              { icon: "Server", label: "Node.js / Python" },
              { icon: "Palette", label: "Figma / Photoshop" },
              { icon: "Database", label: "PostgreSQL / Redis" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl p-6 border border-white/8 bg-white/[0.03] text-center hover:border-[#00F5D4]/30 transition-all group">
                <Icon name={item.icon} fallback="Code2" size={28} className="mx-auto mb-3 text-white/30 group-hover:text-[#00F5D4] transition-colors" />
                <p className="text-sm text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#FF6B6B] text-sm font-medium tracking-widest uppercase mb-3 text-center">Связь</p>
          <h2 className="text-5xl font-bold uppercase mb-4 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>Напишите мне</h2>
          <p className="text-white/40 text-center mb-16 max-w-xl mx-auto">
            Готов обсудить ваш проект, ответить на вопросы или просто поговорить о сотрудничестве
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-3xl p-8 border border-white/8 bg-white/[0.03]">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#00F5D4]/20 flex items-center justify-center mb-6">
                    <Icon name="Check" size={32} className="text-[#00F5D4]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>Сообщение отправлено!</h3>
                  <p className="text-white/50">Я свяжусь с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm text-white/50 mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="ivan@example.com"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-2">Сообщение</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Расскажите о вашем проекте..."
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#00F5D4]/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-semibold bg-[#00F5D4] text-[#080C14] hover:bg-[#00F5D4]/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Отправить сообщение
                  </button>
                </form>
              )}
            </div>

            <div className="flex flex-col justify-center gap-5">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-center gap-5 p-5 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-[#00F5D4]/30 hover:bg-white/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00F5D4]/20 transition-all">
                    <Icon name={c.icon} fallback="Mail" size={20} className="text-[#00F5D4]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/30 uppercase tracking-wider mb-0.5">{c.label}</div>
                    <div className="text-white font-medium">{c.value}</div>
                  </div>
                  <Icon name="ArrowUpRight" size={16} className="ml-auto text-white/20 group-hover:text-[#00F5D4] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5 text-center text-white/20 text-sm">
        <p>© 2024 Иван Петров. Все права защищены.</p>
      </footer>
    </div>
  );
}