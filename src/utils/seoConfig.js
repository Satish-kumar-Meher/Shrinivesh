export const baseSiteUrl = 'https://www.shrinivesh.com'

const defaultImage = `${baseSiteUrl}/Logo1.jpg`

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Shri Nivesh',
  url: baseSiteUrl,
  logo: `${baseSiteUrl}/Logo.png`,
  sameAs: [
    'https://www.facebook.com/',
    'https://www.instagram.com/',
    'https://www.linkedin.com/'
  ]
}

export const seoConfig = {
  '/': {
    title: 'Trusted Mutual Fund Advisor | Shri Nivesh',
    description:
      'Expert financial consulting, mutual fund advice, SIP planning, and goal-based investing. Start building long-term wealth with Shri Nivesh.',
    image: defaultImage,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Shri Nivesh',
      url: baseSiteUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseSiteUrl}/search?q={query}`,
        'query-input': 'required name=query'
      }
    }
  },
  '/about': {
    title: 'About Us | Shri Nivesh',
    description:
      'Learn about Shri Nivesh — your trusted partner for financial planning, mutual funds, insurance, and long-term wealth creation.',
    image: defaultImage,
    jsonLd: orgJsonLd
  },
  '/services': {
    title: 'Financial Services | Mutual Funds, Insurance, PMS | Shri Nivesh',
    description:
      'Explore tailored services: Mutual Funds, SIPs, Insurance, PMS, AIF, Home Loans, Retirement Planning and more.',
    image: defaultImage
  },
  '/contact': {
    title: 'Contact Us | Shri Nivesh',
    description: 'Get in touch with Shri Nivesh for personalized financial advice and investment planning.',
    image: defaultImage
  },
  '/calculators': {
    title: 'All Calculators | SIP, EMI, PPF & More | Shri Nivesh',
    description: 'Use our free financial calculators including SIP, Step-up SIP, EMI, PPF, EPF, Retirement, and Asset Allocation.',
    image: defaultImage
  },
  '/calculators/sip_calculator': {
    title: 'SIP Calculator | Calculate SIP Returns | Shri Nivesh',
    description: 'Estimate your SIP returns with our easy SIP calculator. Plan your investments smarter.',
    image: defaultImage
  },
  '/calculators/emi_calculator': {
    title: 'EMI Calculator | Monthly EMI Estimator | Shri Nivesh',
    description: 'Calculate monthly loan EMIs quickly and plan better using our EMI calculator.',
    image: defaultImage
  },
  '/calculators/ppf_calculator': {
    title: 'PPF Calculator | PPF Maturity Calculator | Shri Nivesh',
    description: 'Compute your PPF maturity value with our PPF calculator and plan long-term savings.',
    image: defaultImage
  },
  '/calculators/sip_stepup_calculator': {
    title: 'Step-up SIP Calculator | Incremental SIP | Shri Nivesh',
    description: 'See how increasing SIP amounts annually boosts wealth with our Step-up SIP calculator.',
    image: defaultImage
  },
  '/calculators/sip_goal_calculator': {
    title: 'SIP Goal Calculator | Goal-based SIP Planning | Shri Nivesh',
    description: 'Plan SIPs for specific goals like education, retirement, wedding with our goal calculator.',
    image: defaultImage
  },
  '/calculators/compounding_calculator': {
    title: 'Compound Interest Calculator | Power of Compounding | Shri Nivesh',
    description: 'Understand compounding growth on your investments with this calculator.',
    image: defaultImage
  },
  '/calculators/epf_calculator': {
    title: 'EPF Calculator | Provident Fund Growth | Shri Nivesh',
    description: 'Estimate EPF growth and maturity using our EPF calculator.',
    image: defaultImage
  },
  '/calculators/become_crorepati_calculator': {
    title: 'Crorepati Calculator | Become a Crorepati | Shri Nivesh',
    description: 'Find how much to invest to become a crorepati with SIPs over time.',
    image: defaultImage
  },
  '/calculators/retirement_planning_calculator': {
    title: 'Retirement Calculator | Plan Your Retirement | Shri Nivesh',
    description: 'Estimate your retirement corpus and monthly SIP required to achieve it.',
    image: defaultImage
  },
  '/calculators/asset_allocation_calculator': {
    title: 'Asset Allocation Calculator | Risk-based Allocation | Shri Nivesh',
    description: 'Get a suggested asset allocation based on your risk appetite and goals.',
    image: defaultImage
  },
  '/goals': {
    title: 'Financial Goals | Plan Wealth, Education, Retirement | Shri Nivesh',
    description: 'Plan and manage key financial goals with expert guidance from Shri Nivesh.',
    image: defaultImage
  },
  '/goals/child_wedding': {
    title: "Plan Child's Wedding | Goal Planning | Shri Nivesh",
    description: "Create a wedding fund for your child's big day with disciplined investing.",
    image: defaultImage
  },
  '/goals/retirement': {
    title: 'Retirement Planning | Financial Freedom | Shri Nivesh',
    description: 'Build a secure retirement corpus with smart long-term planning.',
    image: defaultImage
  },
  '/goals/child_education': {
    title: "Child's Education Planning | Higher Education Fund | Shri Nivesh",
    description: "Plan for your child's education with goal-based investing.",
    image: defaultImage
  },
  '/goals/wealth_creation': {
    title: 'Wealth Creation | Long-term Investing | Shri Nivesh',
    description: 'Build wealth steadily with SIPs, diversification, and discipline.',
    image: defaultImage
  },
  '/goals/emergency': {
    title: 'Emergency Fund | Financial Safety Net | Shri Nivesh',
    description: 'Create a robust emergency fund for unforeseen expenses.',
    image: defaultImage
  },
  '/goals/dream_home': {
    title: 'Dream Home Planning | Home Loan & Savings | Shri Nivesh',
    description: 'Plan for your dream home with the right mix of savings and loans.',
    image: defaultImage
  },
  '/more': {
    title: 'Knowledge Hub | SIP Tools & Guides | Shri Nivesh',
    description: 'Explore SIP tools, tax-efficient strategies, and market understanding guides.',
    image: defaultImage
  },
  '/more/mf_faqs': {
    title: 'Mutual Funds FAQ | Clear Your Doubts | Shri Nivesh',
    description: 'Frequently asked questions about mutual funds and SIP investing.',
    image: defaultImage
  },
  '/more/nri_faqs': {
    title: 'NRI Investment FAQs | Invest from Abroad | Shri Nivesh',
    description: 'FAQs for NRIs on investing in India through mutual funds and more.',
    image: defaultImage
  },
  '/more/sip-tools': {
    title: 'SIP Tools | Ready Reckoner & Top-up | Shri Nivesh',
    description: 'Useful SIP tools to estimate returns and plan top-ups effectively.',
    image: defaultImage
  },
  '/more/sip-tools/sip_topup_ready_reckoner': {
    title: 'SIP Top-up Ready Reckoner | Incremental SIP | Shri Nivesh',
    description: 'Understand the impact of top-up SIPs on long-term wealth creation.',
    image: defaultImage
  },
  '/more/sip-tools/sip_ready_reckoner': {
    title: 'SIP Ready Reckoner | Returns Estimator | Shri Nivesh',
    description: 'Estimate SIP outcomes easily with practical examples.',
    image: defaultImage
  },
  '/more/sip-tools/understanding_markets': {
    title: 'Understanding Markets | Investment Insights | Shri Nivesh',
    description: 'Learn how markets work and how to navigate volatility with SIPs.',
    image: defaultImage
  },
  '/more/sip-tools/sip_vs_sip_topup': {
    title: 'SIP vs SIP Top-up | Which is Better? | Shri Nivesh',
    description: 'Compare standard SIPs with top-up SIPs to choose the right approach.',
    image: defaultImage
  },
  '/more/sip-tools/why_start_sip_early': {
    title: 'Why Start SIP Early | Compounding Benefits | Shri Nivesh',
    description: 'See how starting early with SIPs accelerates wealth creation.',
    image: defaultImage
  },
  '/privacy_policy': {
    title: 'Privacy Policy | Shri Nivesh',
    description: 'How we collect, use, and protect your personal information.',
    image: defaultImage
  },
  '/terms_and_conditions': {
    title: 'Terms and Conditions | Shri Nivesh',
    description: 'The terms governing the use of our website and services.',
    image: defaultImage
  },
  '/disclaimer': {
    title: 'Disclaimer & Disclosures | Shri Nivesh',
    description: 'Important disclaimers and disclosures related to investments.',
    image: defaultImage
  },
  '/useful_links': {
    title: 'Useful Links | Forms & Downloads | Shri Nivesh',
    description: 'Quick access to essential links, forms, and resources for investors.',
    image: defaultImage
  }
}


