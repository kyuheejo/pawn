export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-mono">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-base font-bold tracking-[0.1em] uppercase">
            <span className="text-accent">&#x265F;</span> pawn
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how" className="text-xs font-medium text-fg-secondary uppercase tracking-[0.08em] hover:text-foreground transition-colors">How it works</a>
            <a href="#builders" className="text-xs font-medium text-fg-secondary uppercase tracking-[0.08em] hover:text-foreground transition-colors">Builders</a>
            <a href="#buyers" className="text-xs font-medium text-fg-secondary uppercase tracking-[0.08em] hover:text-foreground transition-colors">Buyers</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#waitlist" className="text-xs font-medium text-fg-secondary uppercase tracking-[0.08em] hover:text-foreground transition-colors hidden sm:block">Log In</a>
            <a href="#waitlist" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] bg-foreground text-background px-4 py-2.5 border border-foreground hover:bg-accent hover:border-accent transition-colors">
              List Agent <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded-sm font-normal">L</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative grid-bg overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6 py-24 md:py-32 text-center">
          <pre className="font-mono text-[11px] leading-[1.15] text-accent opacity-50 mb-10 inline-block animate-fade-in-up">{`        _  _
       ( \`   )_
      (    )    \`)
    (_   (_ .  _) _)
           |
           |
         __|__
        /     \\
       |       |
        \\_____/
       /       \\
      |_________|
     /___________\\`}</pre>

          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-5 animate-fade-in-up delay-100">
            Sell your AI agent.<br />
            <span className="text-accent">No engineering required.</span>
          </h1>

          <p className="text-[15px] text-fg-secondary max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
            Pawn turns your agent harness into a hosted product — with checkout,
            billing, sandboxing, and a marketplace of users built in. You write
            the agent. We do the rest.
          </p>

          <div className="flex justify-center gap-4 animate-fade-in-up delay-300">
            <a href="#waitlist" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] bg-foreground text-background px-7 py-3.5 border border-foreground hover:bg-accent hover:border-accent transition-colors">
              List Your Agent <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded-sm font-normal">L</span>
            </a>
            <a href="#how" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-foreground px-7 py-3.5 border border-border-strong hover:border-foreground transition-colors">
              Explore Agents
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <p className="text-[11px] font-bold text-accent uppercase tracking-[0.15em] mb-3">The Problem</p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-16">
            You wrote a great agent. Now what?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Col 1 */}
            <div className="bg-surface border border-border p-6 group hover:border-border-strong transition-colors">
              <div className="text-[11px] font-bold text-fg-muted uppercase tracking-[0.1em] mb-4">Option A</div>
              <h3 className="font-mono text-lg font-semibold mb-3">Open source it</h3>
              <p className="text-[13px] text-fg-secondary leading-relaxed">
                Free. Forever. You ship to GitHub, get stars, watch other people
                use it without paying you. The hosting, billing, and UI is on
                the user. Most never run it.
              </p>
              <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-fg-muted">
                Revenue: $0
              </div>
            </div>

            {/* Col 2 */}
            <div className="bg-surface border border-border p-6 group hover:border-border-strong transition-colors">
              <div className="text-[11px] font-bold text-fg-muted uppercase tracking-[0.1em] mb-4">Option B</div>
              <h3 className="font-mono text-lg font-semibold mb-3">Build a full SaaS</h3>
              <p className="text-[13px] text-fg-secondary leading-relaxed">
                Six months of work. You learn auth, Stripe webhooks,
                sandboxing, rate limits, dashboards. Two-thirds of that work
                has nothing to do with your actual agent.
              </p>
              <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-fg-muted">
                Time to market: 6 months
              </div>
            </div>

            {/* Col 3 */}
            <div className="bg-surface border border-accent/30 p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-accent-glow pointer-events-none" />
              <div className="relative">
                <div className="text-[11px] font-bold text-accent uppercase tracking-[0.1em] mb-4">Option C</div>
                <h3 className="font-mono text-lg font-semibold mb-3">Use Pawn</h3>
                <p className="text-[13px] text-fg-secondary leading-relaxed">
                  Import your harness. Get a live, paid product in 60 seconds.
                  Spend your time making the agent better — not rebuilding the
                  same infrastructure as everyone else.
                </p>
                <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-accent">
                  Time to market: 60 seconds
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <p className="text-[11px] font-bold text-accent uppercase tracking-[0.15em] mb-3">How It Works</p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-16">
            From harness to paid product in 60 seconds.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-[36px] font-bold text-fg-ghost leading-none mb-4 font-mono">01</div>
              <h3 className="font-mono text-lg font-semibold mb-3">Import</h3>
              <p className="text-[13px] text-fg-secondary leading-relaxed">
                Paste a GitHub URL. Drop in a Claude skill. Upload a Cursor
                rule. We parse your harness — tools, prompts, memory schema,
                integrations — automatically.
              </p>
            </div>
            <div>
              <div className="text-[36px] font-bold text-fg-ghost leading-none mb-4 font-mono">02</div>
              <h3 className="font-mono text-lg font-semibold mb-3">Configure</h3>
              <p className="text-[13px] text-fg-secondary leading-relaxed">
                Pick a name, set your price, choose a model. We give you a
                hosted URL, secure sandbox, OAuth, and Stripe checkout out of
                the box.
              </p>
            </div>
            <div>
              <div className="text-[36px] font-bold text-fg-ghost leading-none mb-4 font-mono">03</div>
              <h3 className="font-mono text-lg font-semibold mb-3">Get paid</h3>
              <p className="text-[13px] text-fg-secondary leading-relaxed">
                Share your URL. Users pay with credits that work across any
                agent on Pawn. You get the cut every time someone runs your
                agent.
              </p>
            </div>
          </div>

          {/* Terminal demo */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-surface border border-border font-mono text-[13px] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-raised border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="text-[11px] text-fg-muted ml-2">~/my-agent</span>
              </div>
              <div className="p-4 leading-[1.8]">
                <div className="flex gap-2">
                  <span className="text-accent">$</span>
                  <span className="text-foreground">pawn deploy ./my-skill</span>
                </div>
                <div className="text-fg-muted">&nbsp;</div>
                <div className="text-fg-muted">&nbsp;&nbsp;Packaging agent...</div>
                <div className="text-fg-muted">&nbsp;&nbsp;Uploading to Pawn registry...</div>
                <div className="text-fg-muted">&nbsp;&nbsp;Setting up payments...</div>
                <div className="text-fg-muted">&nbsp;</div>
                <div className="text-success">&nbsp;&nbsp;&#x2713; Agent &quot;my-skill&quot; is live!</div>
                <div className="text-success">&nbsp;&nbsp;&#x2713; Storefront: pawn.market/agents/my-skill</div>
                <div className="text-fg-muted">&nbsp;</div>
                <div className="flex gap-2">
                  <span className="text-accent">$</span>
                  <span className="inline-block w-2 h-4 bg-accent animate-blink align-text-bottom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR BUILDERS */}
      <section id="builders" className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <p className="text-[11px] font-bold text-accent uppercase tracking-[0.15em] mb-3">For Builders</p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-3">
            Built for builders, not no-coders.
          </h2>
          <p className="text-[15px] text-fg-secondary mb-16 max-w-lg">
            If you can write a Claude skill, you can ship a SaaS on Pawn.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: ">_",
                title: "One-click hosting",
                desc: "Your agent lives at a dedicated URL with SSL, auth, and analytics. Custom domains included.",
              },
              {
                icon: "$$",
                title: "Stripe-powered billing",
                desc: "Credits, subscriptions, or one-time purchases — your call. Payouts via Stripe Connect.",
              },
              {
                icon: "[]",
                title: "Sandboxed runtime",
                desc: "Every session runs isolated. Tools, browser-use, file access — all secured by default.",
              },
              {
                icon: "<>",
                title: "Native integrations",
                desc: "Pawn agents work in Slack, Discord, WhatsApp, and SMS without extra code.",
              },
              {
                icon: "{}",
                title: "Memory + history",
                desc: "Per-user memory and conversation history out of the box. No database setup needed.",
              },
              {
                icon: "#>",
                title: "Built-in analytics",
                desc: "See where users drop off, which tools fire, which prompts win. Optimize without instrumentation.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-surface border border-border p-6 hover:border-border-strong transition-colors"
              >
                <div className="text-accent font-mono text-lg font-bold mb-3">
                  {feature.icon}
                </div>
                <h3 className="font-mono text-[15px] font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-fg-secondary leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR BUYERS */}
      <section id="buyers" className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold text-accent uppercase tracking-[0.15em] mb-3">For Buyers</p>
            <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-6">
              One subscription. Every agent.
            </h2>
            <p className="text-[15px] text-fg-secondary leading-relaxed mb-6">
              Stop juggling ten different AI tools with ten different bills.
              Pawn gives you one credit balance that works across every agent
              on the marketplace — from cold-mailing to thumbnail generation
              to legal research.
            </p>
            <p className="text-[15px] text-fg-secondary leading-relaxed mb-10">
              Find the one built by an expert. Use it instantly. Switch to
              another tomorrow.
            </p>
            <a href="#waitlist" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-foreground px-7 py-3.5 border border-border-strong hover:border-foreground transition-colors">
              Browse agents &rarr;
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-16 pt-10 border-t border-border">
            {[
              { value: "142", label: "Agents Listed" },
              { value: "2.4k", label: "Subscribers" },
              { value: "$89k", label: "Paid to Creators" },
              { value: "<30s", label: "Deploy Time" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-mono text-[36px] font-bold leading-none">
                  {stat.value}
                </div>
                <div className="text-[11px] text-fg-muted uppercase tracking-[0.1em] mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST CTA */}
      <section id="waitlist" className="border-t border-border relative grid-bg">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 text-center">
          <pre className="font-mono text-[10px] leading-[1.15] text-fg-ghost mb-8 inline-block">{`   _______________________________________________
  |                                               |
  |   skill ──> pawn deploy ──> $$$               |
  |                                               |
  |   You build it. We sell it.                   |
  |_______________________________________________|`}</pre>

          <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
            Ready to ship?
          </h2>
          <p className="text-[15px] text-fg-secondary mb-10 max-w-md mx-auto">
            Join the waitlist and be the first to list your agent on Pawn.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            action="#"
          >
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 font-mono text-[13px] bg-surface border border-border text-foreground px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-fg-ghost"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] bg-accent text-background px-6 py-3 border border-accent hover:bg-accent-bright hover:border-accent-bright transition-colors whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h5 className="text-[11px] font-bold uppercase tracking-[0.1em] text-fg-secondary mb-4">Product</h5>
              <ul className="space-y-2">
                {["Marketplace", "Pricing", "CLI", "API"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] text-fg-muted hover:text-foreground transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[11px] font-bold uppercase tracking-[0.1em] text-fg-secondary mb-4">Creators</h5>
              <ul className="space-y-2">
                {["Get Started", "Documentation", "Examples", "Revenue Guide"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] text-fg-muted hover:text-foreground transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[11px] font-bold uppercase tracking-[0.1em] text-fg-secondary mb-4">Company</h5>
              <ul className="space-y-2">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] text-fg-muted hover:text-foreground transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[11px] font-bold uppercase tracking-[0.1em] text-fg-secondary mb-4">Legal</h5>
              <ul className="space-y-2">
                {["Terms", "Privacy", "Cookies"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] text-fg-muted hover:text-foreground transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between text-[12px] text-fg-ghost">
            <span>&#x265F; pawn &copy; 2025</span>
            <span>Built for the agent economy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
