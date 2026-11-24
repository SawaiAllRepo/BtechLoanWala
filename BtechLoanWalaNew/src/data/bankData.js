// Bank / NBFC connections as provided by the company,
// organized into category rows: Govt / Private / NBFC.
export const bankCategories = [
  {
    title: 'Govt Banks',
    banks: [
      'State Bank of India',
      'Bank of Maharashtra',
      'Central Bank of India',
      'Bank Of India',
      'Panjab National Bank'
    ]
  },
  {
    title: 'Private Banks',
    banks: [
      'HDFC Bank',
      'ICICI Bank',
      'Kotak Mahindra Bank',
      'Axis Bank',
      'IndusInd Bank'
    ]
  },
  {
    title: 'NBFC',
    banks: [
      'Bajaj Finance Ltd',
      'Shriram Finance Company Ltd',
      'Aditya Birla Capital Ltd',
      'InCred Finance',
      'Tata Capital'
    ]
  }
]

// Flat list kept for backward compatibility
export const banks = bankCategories.flatMap(c => c.banks)
