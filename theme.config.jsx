import { useRouter } from 'next/router'

export default {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <img src="/syllabi_logo.png" alt="Syllabi Logo" style={{ height: '32px', width: '32px' }} />
      <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>Syllabi</span>
    </div>
  ),
  project: {
    link: 'https://github.com/Achu-shankar/Syllabi/tree/main'
  },
  chat: {
    link: 'https://discord.gg/syllabi'
  },
  docsRepositoryBase: 'https://github.com/Achu-shankar/Syllabi/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Syllabi Documentation'
      }
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Syllabi Documentation" />
      <meta property="og:description" content="Build AI-powered chatbots with RAG using Syllabi - an open-source platform for document-based Q&A." />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  primaryHue: 210, // Blue color matching Nextra's official docs
  banner: {
    key: 'release-1.0',
    text: (
      <a href="https://github.com/Achu-shankar/Syllabi/tree/main" target="_blank">
        🎉 Syllabi - Open Source AI Chatbot Platform. Check it out →
      </a>
    )
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div>
          <a
            href="https://github.com/Achu-shankar/Syllabi/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '1rem' }}
          >
            GitHub
          </a>
          <a
            href="https://discord.gg/syllabi"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '1rem' }}
          >
            Discord
          </a>
          <a
            href="https://twitter.com/syllabi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        <span>
          MIT {new Date().getFullYear()} © Syllabi.
        </span>
      </div>
    )
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  toc: {
    backToTop: true,
    float: true
  },
  navigation: {
    prev: true,
    next: true
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system'
  },
  search: {
    placeholder: 'Search documentation...'
  },
  gitTimestamp: 'Last updated on'
}
