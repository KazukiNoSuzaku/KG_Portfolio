import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail, Linkedin, ExternalLink, BookOpen, FileText, Cpu, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
  const writingRef = useRef<HTMLDivElement>(null);

  // Hero entrance animation (auto-play on load)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      // Photo card entrance
      heroTl.fromTo('.hero-photo', 
        { opacity: 0, x: '-12vw', scale: 0.98 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9 },
        0
      );
      
      // Content stagger
      heroTl.fromTo('.hero-content > *',
        { opacity: 0, x: '6vw' },
        { opacity: 1, x: 0, duration: 0.7, stagger: 0.08 },
        0.15
      );
      
      // Micro label
      heroTl.fromTo('.hero-micro',
        { opacity: 0, rotate: -90, y: 10 },
        { opacity: 1, rotate: -90, y: 0, duration: 0.6 },
        0.35
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven animations for pinned sections
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero scroll exit animation
      const heroScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          onLeaveBack: () => {
            gsap.set('.hero-photo, .hero-content > *, .hero-micro', { opacity: 1, x: 0, y: 0 });
          }
        }
      });

      // Hero EXIT (70% - 100%)
      heroScrollTl.fromTo('.hero-photo',
        { x: 0, opacity: 1 },
        { x: '-55vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
      heroScrollTl.fromTo('.hero-content',
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
      heroScrollTl.fromTo('.hero-micro',
        { y: 0, opacity: 1 },
        { y: '-6vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Featured Work section
      const featuredTl = gsap.timeline({
        scrollTrigger: {
          trigger: featuredRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        }
      });

      // ENTRANCE (0% - 30%)
      featuredTl.fromTo('.featured-headline',
        { x: '-40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );
      featuredTl.fromTo('.featured-card-1',
        { x: '60vw', scale: 0.96, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0.06
      );
      featuredTl.fromTo('.featured-card-2',
        { x: '60vw', scale: 0.96, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0.12
      );
      featuredTl.fromTo('.featured-card-3',
        { x: '60vw', scale: 0.96, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0.18
      );
      featuredTl.fromTo('.featured-numeral',
        { y: '18vh', opacity: 0 },
        { y: 0, opacity: 0.12, ease: 'none' },
        0.1
      );

      // EXIT (70% - 100%)
      featuredTl.fromTo('.featured-card-3',
        { x: 0, opacity: 1 },
        { x: '-22vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
      featuredTl.fromTo('.featured-card-2',
        { x: 0, opacity: 1 },
        { x: '-22vw', opacity: 0, ease: 'power2.in' },
        0.72
      );
      featuredTl.fromTo('.featured-card-1',
        { x: 0, opacity: 1 },
        { x: '-22vw', opacity: 0, ease: 'power2.in' },
        0.74
      );
      featuredTl.fromTo('.featured-headline',
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.75
      );
      featuredTl.fromTo('.featured-numeral',
        { y: 0, opacity: 0.12 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Manifesto section
      const manifestoTl = gsap.timeline({
        scrollTrigger: {
          trigger: manifestoRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        }
      });

      manifestoTl.fromTo('.manifesto-label',
        { y: '-10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );
      manifestoTl.fromTo('.manifesto-text',
        { y: '18vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.08
      );
      manifestoTl.fromTo('.manifesto-sub',
        { y: '6vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.18
      );
      manifestoTl.fromTo('.manifesto-numeral',
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 0.12, ease: 'none' },
        0.12
      );

      manifestoTl.fromTo('.manifesto-text',
        { y: 0, opacity: 1 },
        { y: '-18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
      manifestoTl.fromTo('.manifesto-label',
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.85
      );
      manifestoTl.fromTo('.manifesto-numeral',
        { x: 0, opacity: 0.12 },
        { x: '6vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Principles section
      const principlesTl = gsap.timeline({
        scrollTrigger: {
          trigger: principlesRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        }
      });

      principlesTl.fromTo('.principles-headline',
        { x: '-40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );
      principlesTl.fromTo('.principle-card-1',
        { x: '60vw', scale: 0.96, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0.06
      );
      principlesTl.fromTo('.principle-card-2',
        { x: '60vw', scale: 0.96, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0.12
      );
      principlesTl.fromTo('.principle-card-3',
        { x: '60vw', scale: 0.96, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0.18
      );
      principlesTl.fromTo('.principles-numeral',
        { y: '18vh', opacity: 0 },
        { y: 0, opacity: 0.12, ease: 'none' },
        0.1
      );

      principlesTl.fromTo('.principle-card-1, .principle-card-2, .principle-card-3',
        { y: 0, opacity: 1 },
        { y: '14vh', opacity: 0, ease: 'power2.in', stagger: 0.02 },
        0.7
      );
      principlesTl.fromTo('.principles-headline',
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.85
      );
      principlesTl.fromTo('.principles-numeral',
        { opacity: 0.12 },
        { opacity: 0, ease: 'power2.in' },
        0.8
      );

      // Writing section
      const writingTl = gsap.timeline({
        scrollTrigger: {
          trigger: writingRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        }
      });

      writingTl.fromTo('.writing-headline',
        { x: '-40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );
      writingTl.fromTo('.writing-card-1',
        { x: '70vw', scale: 0.97, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0.08
      );
      writingTl.fromTo('.writing-card-2',
        { x: '70vw', scale: 0.97, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0.14
      );
      writingTl.fromTo('.writing-numeral',
        { y: '18vh', opacity: 0 },
        { y: 0, opacity: 0.12, ease: 'none' },
        0.1
      );

      writingTl.fromTo('.writing-card-1, .writing-card-2',
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in', stagger: 0.03 },
        0.7
      );
      writingTl.fromTo('.writing-headline',
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.85
      );
      writingTl.fromTo('.writing-numeral',
        { opacity: 0.12 },
        { opacity: 0, ease: 'power2.in' },
        0.8
      );

      // Global snap for pinned sections
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
            if (!inPinned) return value;
            
            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        }
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  // Flowing sections animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Work Index items
      gsap.utils.toArray<HTMLElement>('.work-item').forEach((item) => {
        gsap.fromTo(item,
          { y: 40, scale: 0.985, opacity: 0 },
          {
            y: 0, scale: 1, opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 0.4,
            }
          }
        );
      });

      // Reading list items
      gsap.utils.toArray<HTMLElement>('.reading-item').forEach((item) => {
        gsap.fromTo(item,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'top 65%',
              scrub: 0.4,
            }
          }
        );
      });

      // Contact section
      gsap.fromTo('.contact-photo',
        { x: '-8vw', opacity: 0 },
        {
          x: 0, opacity: 1,
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 70%',
            end: 'top 40%',
            scrub: 0.4,
          }
        }
      );

      gsap.fromTo('.contact-content',
        { x: '6vw', opacity: 0 },
        {
          x: 0, opacity: 1,
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 60%',
            end: 'top 35%',
            scrub: 0.4,
          }
        }
      );

    }, mainRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={mainRef} className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex justify-between items-center">
        <a href="https://www.linkedin.com/in/kaustav-ghosh-b978a6119/" target="_blank" rel="noopener noreferrer" className="text-[#F6F7F9] font-semibold text-lg tracking-tight hover:text-[#FF4D2E] transition-colors">KG</a>
        <div className="flex gap-8">
          <button onClick={() => scrollToSection('work')} className="text-[#A7ACB5] hover:text-[#F6F7F9] text-sm font-medium transition-colors">Work</button>
          <button onClick={() => scrollToSection('writing')} className="text-[#A7ACB5] hover:text-[#F6F7F9] text-sm font-medium transition-colors">Writing</button>
          <button onClick={() => scrollToSection('contact')} className="text-[#A7ACB5] hover:text-[#F6F7F9] text-sm font-medium transition-colors">Contact</button>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section ref={heroRef} className="section-pinned bg-[#0B0D10] z-10">
        {/* Background image */}
        <img
          src="/hero_bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        />
        <div className="vignette" />
        
        {/* Vertical micro label */}
        <div className="hero-micro absolute left-[2.2vw] top-1/2 -translate-y-1/2 -rotate-90 origin-center z-40">
          <span className="micro-label whitespace-nowrap">PRODUCT / AI / SYSTEMS</span>
        </div>

        {/* Photo card */}
        <div className="hero-photo absolute left-[6vw] top-[14vh] w-[44vw] h-[72vh] rounded-[28px] overflow-hidden z-20">
          <img 
            src="/hero_portrait.jpg" 
            alt="Kaustav Ghosh" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content block */}
        <div className="hero-content absolute left-[56vw] top-[22vh] w-[38vw] z-30">
          <h1 className="text-[clamp(44px,5vw,72px)] font-semibold text-[#F6F7F9] leading-[0.95] tracking-[-0.02em] mb-4">
            Kaustav Ghosh
          </h1>
          <p className="text-[clamp(18px,2vw,24px)] text-[#A7ACB5] font-medium mb-3">
            Product Manager • GenAI Engineer
          </p>
          <div className="w-[72px] h-[3px] bg-[#FF4D2E] mb-6" />
          <p className="text-[#A7ACB5] text-base leading-relaxed max-w-[32vw] mb-8">
            I turn ambiguity into product direction—shipping AI-powered features, improving retention, 
            and building systems that scale.
          </p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('work')}
              className="pill-button flex items-center gap-2"
            >
              View selected work
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollToSection('manifesto')}
              className="text-link"
            >
              Read the manifesto
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: Featured Work */}
      <section ref={featuredRef} id="work" className="section-pinned bg-[#0B0D10] z-20">
        {/* Headline block */}
        <div className="featured-headline absolute left-[6vw] top-[14vh] w-[28vw] z-30">
          <h2 className="text-[clamp(34px,3.6vw,52px)] font-medium text-[#F6F7F9] leading-[1.0] tracking-[-0.01em] mb-4">
            Featured work
          </h2>
          <p className="text-[#A7ACB5] text-base mb-6">
            Three launches—retention, infrastructure, and AI.
          </p>
          <button className="text-link flex items-center gap-2">
            Explore the index
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Project cards */}
        <div className="featured-card-1 absolute left-[36vw] top-[14vh] w-[18vw] h-[72vh] card-dark z-20 group cursor-pointer">
          <div className="h-[78%] overflow-hidden">
            <img 
              src="/project_onboarding.jpg" 
              alt="Onboarding Rewrite" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="h-[22%] px-5 py-4 flex flex-col justify-center">
            <h3 className="text-[#F6F7F9] font-medium text-lg mb-1">Onboarding Rewrite</h3>
            <span className="micro-label">Retention</span>
          </div>
        </div>

        <div className="featured-card-2 absolute left-[56vw] top-[14vh] w-[18vw] h-[72vh] card-dark z-20 group cursor-pointer">
          <div className="h-[78%] overflow-hidden">
            <img 
              src="/project_designsystem.jpg" 
              alt="Design System" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="h-[22%] px-5 py-4 flex flex-col justify-center">
            <h3 className="text-[#F6F7F9] font-medium text-lg mb-1">Design System</h3>
            <span className="micro-label">Platform</span>
          </div>
        </div>

        <div className="featured-card-3 absolute left-[76vw] top-[14vh] w-[18vw] h-[72vh] card-dark z-20 group cursor-pointer">
          <div className="h-[78%] overflow-hidden">
            <img 
              src="/project_ai_assistant.jpg" 
              alt="AI Assistant" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="h-[22%] px-5 py-4 flex flex-col justify-center">
            <h3 className="text-[#F6F7F9] font-medium text-lg mb-1">AI Assistant</h3>
            <span className="micro-label">GenAI</span>
          </div>
        </div>

        {/* Background numeral */}
        <div className="featured-numeral bg-numeral absolute right-[4vw] bottom-[6vh] z-0">01</div>
      </section>

      {/* Section 3: Work Index */}
      <section className="relative bg-[#0B0D10] py-[10vh] z-30">
        <div className="px-[6vw] mb-12">
          <h2 className="text-[clamp(34px,3.6vw,52px)] font-medium text-[#F6F7F9] leading-[1.0] tracking-[-0.01em] mb-4">
            Work index
          </h2>
          <p className="text-[#A7ACB5] text-base max-w-[46vw]">
            A running list of product bets, systems, and experiments.
          </p>
        </div>

        <div className="space-y-[2.2vh]">
          {[
            { title: 'Checkout Flow', desc: 'Reduced friction, increased completion.', tags: ['UX', 'Metrics'], icon: <Cpu className="w-5 h-5" /> },
            { title: 'Analytics Overhaul', desc: 'Rebuilt dashboards for clarity and action.', tags: ['Data', 'Platform'], icon: <FileText className="w-5 h-5" /> },
            { title: 'Mobile Navigation', desc: 'Simplified IA for core actions.', tags: ['Mobile', 'IA'], icon: <ExternalLink className="w-5 h-5" /> },
            { title: 'API Documentation', desc: 'Developer experience upgrade.', tags: ['DX', 'Content'], icon: <BookOpen className="w-5 h-5" /> },
          ].map((item, i) => (
            <div key={i} className="work-item card-dark-sm w-[88vw] mx-[6vw] h-[18vh] flex items-center cursor-pointer group hover:translate-y-[-4px] transition-transform duration-300">
              <div className="w-[18vw] h-full bg-[#1a1d24] flex items-center justify-center">
                <div className="text-[#A7ACB5] group-hover:text-[#FF4D2E] transition-colors">
                  {item.icon}
                </div>
              </div>
              <div className="flex-1 px-8 py-6">
                <h3 className="text-[#F6F7F9] font-medium text-xl mb-2">{item.title}</h3>
                <p className="text-[#A7ACB5] text-sm mb-3">{item.desc}</p>
                <div className="flex gap-2">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-[#1a1d24] rounded-full text-xs text-[#A7ACB5]">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="px-8">
                <ArrowRight className="w-5 h-5 text-[#A7ACB5] group-hover:text-[#F6F7F9] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Manifesto */}
      <section ref={manifestoRef} id="manifesto" className="section-pinned bg-[#0B0D10] z-40 flex items-center justify-center">
        <div className="text-center max-w-[78vw]">
          <div className="manifesto-label mb-8">
            <span className="micro-label">MANIFESTO</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E] mx-auto mt-4" />
          </div>
          <p className="manifesto-text text-[clamp(28px,3.5vw,48px)] font-medium text-[#F6F7F9] leading-[1.15] tracking-[-0.01em] mb-8">
            I believe product work is decision-making under uncertainty—anchored by taste, 
            validated by usage, and shipped with restraint.
          </p>
          <p className="manifesto-sub text-[#A7ACB5] text-lg">
            Clear beats clever. Systems beat one-offs. Users remember how it feels.
          </p>
        </div>
        <div className="manifesto-numeral bg-numeral absolute right-[4vw] bottom-[6vh] z-0">02</div>
      </section>

      {/* Section 5: Principles */}
      <section ref={principlesRef} className="section-pinned bg-[#0B0D10] z-50">
        {/* Headline block */}
        <div className="principles-headline absolute left-[6vw] top-[14vh] w-[28vw] z-30">
          <h2 className="text-[clamp(34px,3.6vw,52px)] font-medium text-[#F6F7F9] leading-[1.0] tracking-[-0.01em] mb-4">
            Principles
          </h2>
          <p className="text-[#A7ACB5] text-base">
            How I approach product work—every time.
          </p>
        </div>

        {/* Principle cards */}
        <div className="principle-card-1 absolute left-[36vw] top-[14vh] w-[18vw] h-[72vh] card-dark z-20">
          <div className="h-[70%] overflow-hidden">
            <img 
              src="/principle_clarity.jpg" 
              alt="Clarity first" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[30%] px-5 py-5 flex flex-col justify-center">
            <h3 className="text-[#F6F7F9] font-medium text-xl mb-2">Clarity first</h3>
            <p className="text-[#A7ACB5] text-sm leading-relaxed">Remove the noise. Make the next step obvious.</p>
          </div>
        </div>

        <div className="principle-card-2 absolute left-[56vw] top-[14vh] w-[18vw] h-[72vh] card-dark z-20">
          <div className="h-[70%] overflow-hidden">
            <img 
              src="/principle_systems.jpg" 
              alt="Systems over hacks" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[30%] px-5 py-5 flex flex-col justify-center">
            <h3 className="text-[#F6F7F9] font-medium text-xl mb-2">Systems over hacks</h3>
            <p className="text-[#A7ACB5] text-sm leading-relaxed">Build reusable patterns that scale.</p>
          </div>
        </div>

        <div className="principle-card-3 absolute left-[76vw] top-[14vh] w-[18vw] h-[72vh] card-dark z-20">
          <div className="h-[70%] overflow-hidden">
            <img 
              src="/principle_ship.jpg" 
              alt="Ship to learn" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[30%] px-5 py-5 flex flex-col justify-center">
            <h3 className="text-[#F6F7F9] font-medium text-xl mb-2">Ship to learn</h3>
            <p className="text-[#A7ACB5] text-sm leading-relaxed">Small releases, clear signals, fast iteration.</p>
          </div>
        </div>

        {/* Background numeral */}
        <div className="principles-numeral bg-numeral absolute right-[4vw] bottom-[6vh] z-0">03</div>
      </section>

      {/* Section 6: Writing */}
      <section ref={writingRef} id="writing" className="section-pinned bg-[#0B0D10] z-[60]">
        {/* Headline block */}
        <div className="writing-headline absolute left-[6vw] top-[14vh] w-[28vw] z-30">
          <h2 className="text-[clamp(34px,3.6vw,52px)] font-medium text-[#F6F7F9] leading-[1.0] tracking-[-0.01em] mb-4">
            Writing
          </h2>
          <p className="text-[#A7ACB5] text-base mb-6">
            Notes on product, AI, and building teams.
          </p>
          <button className="text-link flex items-center gap-2">
            Browse all essays
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Writing cards */}
        <div className="writing-card-1 absolute left-[36vw] top-[14vh] w-[28vw] h-[72vh] card-dark z-20 group cursor-pointer">
          <div className="h-[65%] overflow-hidden">
            <img 
              src="/writing_retention.jpg" 
              alt="The Retention Map" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="h-[35%] px-6 py-6 flex flex-col justify-center">
            <h3 className="text-[#F6F7F9] font-medium text-2xl mb-3">The Retention Map</h3>
            <p className="text-[#A7ACB5] text-base leading-relaxed">A framework for diagnosing churn and building habits.</p>
          </div>
        </div>

        <div className="writing-card-2 absolute left-[66vw] top-[14vh] w-[28vw] h-[72vh] card-dark z-20 group cursor-pointer">
          <div className="h-[65%] overflow-hidden">
            <img 
              src="/writing_prompts.jpg" 
              alt="Prompt Engineering for PMs" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="h-[35%] px-6 py-6 flex flex-col justify-center">
            <h3 className="text-[#F6F7F9] font-medium text-2xl mb-3">Prompt Engineering for PMs</h3>
            <p className="text-[#A7ACB5] text-base leading-relaxed">How to prototype with LLMs and ship AI features.</p>
          </div>
        </div>

        {/* Background numeral */}
        <div className="writing-numeral bg-numeral absolute right-[4vw] bottom-[6vh] z-0">04</div>
      </section>

      {/* Section 7: Reading List */}
      <section className="relative bg-[#0B0D10] py-[10vh] z-[70]">
        <div className="px-[6vw] mb-12">
          <h2 className="text-[clamp(34px,3.6vw,52px)] font-medium text-[#F6F7F9] leading-[1.0] tracking-[-0.01em] mb-4">
            Reading list
          </h2>
          <p className="text-[#A7ACB5] text-base max-w-[46vw]">
            Books, papers, and threads that shaped how I think.
          </p>
        </div>

        <div className="space-y-[2.2vh]">
          {[
            { title: 'Inspired', author: 'Marty Cagan', note: 'Product discovery fundamentals.' },
            { title: 'The Lean Startup', author: 'Eric Ries', note: 'Validated learning loops.' },
            { title: 'Attention Is All You Need', author: 'Vaswani et al.', note: 'Transformers paper—core concepts for AI products.' },
            { title: 'Shape Up', author: 'Basecamp', note: 'Appetite-based planning.' },
          ].map((item, i) => (
            <div key={i} className="reading-item card-dark-sm w-[88vw] mx-[6vw] h-[14vh] flex items-center px-8 cursor-pointer group hover:translate-y-[-4px] transition-transform duration-300">
              <div className="flex-1">
                <h3 className="text-[#F6F7F9] font-medium text-lg mb-1">{item.title}</h3>
                <p className="text-[#A7ACB5] text-sm">{item.author} — {item.note}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#A7ACB5] group-hover:text-[#F6F7F9] group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </section>

      {/* Section 8: Contact */}
      <section className="contact-section relative bg-[#F4F1EC] py-[14vh] z-[80]">
        <div className="px-[6vw] flex">
          {/* Photo card */}
          <div className="contact-photo w-[44vw] h-[72vh] rounded-[28px] overflow-hidden">
            <img 
              src="/contact_photo.jpg" 
              alt="Kaustav Ghosh" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content block */}
          <div className="contact-content ml-[6vw] w-[38vw] pt-[8vh]">
            <h2 className="text-[clamp(34px,3.6vw,52px)] font-medium text-[#0B0D10] leading-[1.0] tracking-[-0.01em] mb-6">
              Let's build what's next.
            </h2>
            <p className="text-[#5a5d65] text-base leading-relaxed mb-8">
              I'm open to product and AI leadership roles, advisory work, and ambitious side projects.
            </p>
            <button className="px-6 py-3 rounded-full bg-[#0B0D10] text-[#F6F7F9] font-medium text-sm flex items-center gap-2 hover:bg-[#FF4D2E] transition-all duration-300 mb-10">
              Start a conversation
              <Mail className="w-4 h-4" />
            </button>
            <div className="space-y-3">
              <a href="mailto:ghosh1k4@gmail.com" className="flex items-center gap-3 text-[#5a5d65] hover:text-[#0B0D10] transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">ghosh1k4@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/kaustav-ghosh-b978a6119/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#5a5d65] hover:text-[#0B0D10] transition-colors">
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">linkedin.com/in/kaustav-ghosh-b978a6119</span>
              </a>
              <a href="tel:+919477304065" className="flex items-center gap-3 text-[#5a5d65] hover:text-[#0B0D10] transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9477304065</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Footer */}
      <footer id="contact" className="relative bg-[#F4F1EC] py-[6vh] z-[90]">
        <div className="text-center">
          <p className="text-[#0B0D10] text-sm mb-2">© 2026 Kaustav Ghosh</p>
          <p className="text-[#9a9d95] text-xs mb-6">Built with care. No trackers.</p>
          <div className="flex justify-center gap-6">
            <button onClick={() => scrollToSection('work')} className="text-[#5a5d65] hover:text-[#0B0D10] text-sm transition-colors">Work</button>
            <button onClick={() => scrollToSection('writing')} className="text-[#5a5d65] hover:text-[#0B0D10] text-sm transition-colors">Writing</button>
            <button onClick={() => scrollToSection('contact')} className="text-[#5a5d65] hover:text-[#0B0D10] text-sm transition-colors">Contact</button>
            <a href="/Kaustav_Ghosh_CV_2026.docx" className="text-[#5a5d65] hover:text-[#0B0D10] text-sm transition-colors">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
