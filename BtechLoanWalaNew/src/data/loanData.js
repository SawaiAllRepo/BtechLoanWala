// Loan products data - single source of truth
export const loanProducts = [
  {
    id: 'personal',
    slug: 'personal',
    icon: 'User',
    name: 'Personal Loan',
    tagline: 'Up to ₹40 Lakhs',
    description: 'Flexible personal loans for weddings, medical, travel or any personal need with minimal documentation.',
    keyBenefit: 'No end-use restriction',
    tenure: 'Up to 5 years',
    eligibility: [
      'Age: 18 – 60 years',
      'Minimum monthly income: ₹15,000',
      'Credit score 750+ preferred for better approval chances and rates'
    ],
    benefits: [
      'Loan amount up to ₹40 Lakhs, subject to lender eligibility',
      'No restriction on end use',
      'Minimal documentation',
      'Fast approval and quick disbursal',
      'Balance transfer facility',
      'Flexible repayment tenure up to 5 years',
      'Longer tenure with selected banks/NBFCs',
      'Pre-approved/instant offers for eligible customers'
    ]
  },
  {
    id: 'home',
    slug: 'home',
    icon: 'Home',
    name: 'Home Loan',
    tagline: 'Tenure up to 30 years',
    description: 'Realise your dream of owning a home with affordable EMI options and expert guidance.',
    keyBenefit: 'Affordable EMI options',
    tenure: 'Up to 30 years',
    eligibility: [
      'Age: 21 – 70 years',
      'Minimum monthly income ₹25,000 for salaried applicants',
      'Credit score 730+ preferred',
      'Stable income and repayment capacity'
    ],
    benefits: [
      'Affordable EMI options',
      'Tenure up to 30 years',
      'Competitive interest rates',
      'Minimal documentation',
      'Quick approval and disbursal',
      'Balance transfer option',
      'Expert guidance throughout'
    ]
  },
  {
    id: 'business',
    slug: 'business',
    icon: 'Briefcase',
    name: 'Business Loan',
    tagline: 'Grow your business',
    description: 'Working capital, term loans and business expansion finance for self-employed professionals.',
    keyBenefit: 'Multiple business finance solutions',
    tenure: 'Flexible',
    eligibility: [
      'Age: 21 – 60 years',
      'Self-employed',
      'Minimum 1 year business operations',
      'Credit score 730+ preferred'
    ],
    benefits: [
      'Term Loan',
      'Working Capital Loan',
      'Bill Discounting',
      'Letter of Credit',
      'Overdraft Facility',
      'Cash Flow Finance',
      'Business Expansion Finance'
    ]
  },
  {
    id: 'lap',
    slug: 'loan-against-property',
    icon: 'Building2',
    name: 'Loan Against Property',
    tagline: 'High loan value',
    description: 'Unlock the value of your residential or commercial property for personal or business funding needs.',
    keyBenefit: 'High loan amount',
    tenure: 'Up to 30 years',
    eligibility: [
      'Age: 21 – 70 years',
      'Minimum monthly income ₹25,000 for salaried applicants',
      'Credit score 730+ preferred',
      'Residential or commercial property'
    ],
    benefits: [
      'High loan amount against property value',
      'Interest rates from multiple banks/NBFCs',
      'Tenure up to 30 years',
      'Personal or business funding',
      'Minimal documentation',
      'Quick approval and disbursal'
    ]
  },
  {
    id: 'car',
    slug: 'car',
    icon: 'Car',
    name: 'Car Loan',
    tagline: 'New & Pre-Owned Car Loans',
    description: 'Flexible car loan solutions for brand-new cars and quality pre-owned vehicles with competitive interest rates, quick approval and minimal documentation.',
    keyBenefit: 'New & pre-owned car financing',
    tenure: 'Flexible',
    eligibility: [
      'New Car Loan: Age 21 – 60 years',
      'Used Car Loan: Age 21 – 65 years',
      'Self-employed: minimum 1 year in business (new) / 3 years (used)',
      'Credit score 730+ preferred'
    ],
    benefits: [
      'Interest rates starting from 8.35%',
      'Up to 100% vehicle financing',
      'One-day approval & instant disbursal',
      'Minimal documentation',
      'Flexible EMI & repayment options',
      'Expert end-to-end loan assistance'
    ]
  },
  {
    id: 'home-bt',
    slug: 'home-loan-balance-transfer',
    icon: 'Repeat',
    name: 'Home Loan Balance Transfer',
    tagline: 'Lower your EMI',
    description: 'Transfer your existing home loan to reduce EMI and interest cost with top-up options.',
    keyBenefit: 'Lower interest possibilities',
    tenure: 'Up to 30 years',
    eligibility: [
      'Existing home loan customer',
      'Regular EMI repayment track record',
      'Credit score 730+ preferred'
    ],
    benefits: [
      'Lower interest possibilities',
      'Reduced EMI',
      'Tenure up to 30 years',
      'Top-up facility*',
      'Minimal documentation',
      'Quick approval',
      'End-to-end transfer assistance'
    ]
  },
   {
    id: 'education',
    slug: 'education',
    icon: 'GraduationCap',
    name: 'Education Loan',
    tagline: 'Funding your future studies',
    description: 'Finance higher education in India and abroad for UG, PG, professional and vocational courses with flexible repayment options.',
    keyBenefit: 'Covers tuition, hostel & living expenses',
    tenure: 'Flexible, moratorium available',
    eligibility: [
      'Age: 18 – 35 years',
      'Applicant: Student seeking admission to recognised courses in India or abroad',
      'Co-applicant: Parent / guardian with stable income required',
      'Admission confirmation from a recognised institution',
      'Credit score 700+ preferred'
    ],
    benefits: [
      'Covers tuition fees, hostel, books and other education-related expenses',
      'Funding for undergraduate, postgraduate, professional and vocational courses',
      'Loans for studying in India as well as abroad',
      'Moratorium period during the course duration*',
      'Interest tax benefit under Section 80E*',
      'Flexible and long repayment tenure',
      'Minimal documentation with quick approval',
      'End-to-end assistance throughout the application'
    ]
  },
  {
    id: 'project-funding',
    slug: 'project-funding',
    icon: 'Building',
    name: 'Project Funding',
    tagline: 'Powering your construction projects',
    description: 'Get the financial support you need to start, develop, or complete your construction project.',
    keyBenefit: 'Customized funding solutions',
    tenure: 'Flexible',
    eligibility: [
      'Age: 21–70 Years',
      'Applicant: Builders, Developers & Real Estate Firms',
      'Business Vintage: Preferably 2+ Years',
      'Project: Residential, Commercial & Mixed-Use Projects',
      'Financial Profile: Strong repayment capacity and project feasibility',
      'Credit Score: 730+ preferred'
    ],
    benefits: [
      'Funding for New & Ongoing Projects',
      'Construction & Development Finance',
      'High-Value Funding Solutions',
      'Flexible Repayment Structures',
      'Competitive Interest Rates',
      'Support for Project-Related Expenses',
      'Minimal & Structured Documentation',
      'End-to-End Financial Assistance'
    ]
  }
]

export const getLoanBySlug = (slug) => loanProducts.find(l => l.slug === slug)
