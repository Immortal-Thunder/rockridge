// This should match the format of a $scope.plan object and be used for testing.
// The inputs in this object match the inputs in the example excel document for comparrison.

var testPlan = {
  assets: {
    fixed: [
      { asset: 'Checking Account', value: 5000 },
      { asset: 'Savings Account', value: 10000 }
    ],
    personal: [
      { asset: 'Home', value: 500000 },
      { asset: 'Auto', value: 40000 },
      { asset: 'Other Stuff', value: 10000 }
    ],
    variable: [
      { asset: 'Brokerage Account', value: 25000, retirementAcct: false },
      { asset: 'User 401k', value: 137000, retirementAcct: true },
      { asset: 'Spouse 401k', value: 10000, retirementAcct: true }
    ],
  },
  birthdate: new Date(1969, 5, 9),
  charitableContributions: 10000,
  children: [
    { name: 'Child 1 Name', birthdate: new Date(2015, 2, 14) }
  ],
  cityResident: 'San Francisco',
  streetResident: '1234 W. 5th St.',
  zipResident: '12345',
  debts: {
    creditCards: [
      { asset: 'VISA', rate: 10.99, balance: 5000 },
      { asset: 'Chase Credit Card', rate: 15.99, balance: 4000 },
    ],
    other: [
      { asset: 'Auto Loan', rate: 0.9, balance: 35000 },
      { asset: 'Disney Wedding Loan', rate: 9.5, balance: 41000 }
    ],
    studentLoans: [
      { asset: 'Federal Stafford', rate: 6.8, balance: 150000 },
      { asset: 'Federal Perkins', rate: 5.0, balance: 50000 }
    ],
  },
  dependents: 2,
  firstname: 'Test',
  filingStatus: 'married',
  fixedExpenses: [
    { asset: 'Mortgage', value: 1960 },
    { asset: 'Utilities', value: 450 },
    { asset: 'Auto Loan', value: 500 },
    { asset: 'Student Loans', value: 1200 },
    { asset: 'Insurances', value: 700 },
    { asset: 'Groceries', value: 1000 },
    { asset: 'Childcare', value: 800 }
  ],
  flexibleExpenses: [
    { asset: 'Entertainment', value: 800 },
    { asset: 'Travel / Vacations', value: 1000 },
    { asset: 'Miscellaneous', value: 500 }
  ],
  grossAnnualIncome: 250000,
  hasChildren: 'true',
  hasMortgage: 'true',
  hasPrimaryResidence: 'true',
  lastname: 'User',
  maritalStatus: 'true',
  mortgage: {
    homeValue: 500000,
    currentBalance: 300000,
    currentRate: 3.9,
    currentTerm: 30,
    initialBalance: 400000,
    startDate: new Date(2006, 5, 1),
  },
  netWorth: 57000,
  otherDeductions: 5000,
  pensionIncome: 0,
  sameWorkResidence: 'true',
  spouse401kContribution: 19000,
  spouseBirthdate: new Date(1996, 8, 6),
  spouseCityResident: 'San Francisco',
  spouseEmployerDisabilityInsurance: undefined,
  spouseEmployerLifeInsurance: 50000,
  spouseFirstName: 'Spouse',
  spouseGrossAnnualIncome: 100000,
  spouseHealthInsurance: 'true',
  spouseIndividualDisabilityInsurance: 0,
  spouseIndividualLifeInsurance: 10000,
  spouseLastName: 'User',
  spousePayrollDeductions: 400,
  spouseRothContribution: 5500,
  spouseStateResident: 'CA',
  stateResident: 'CA',
  targetRetirementAge: 55,
  targetRetirementIncome: 8000,
  user401kContribution: 15000,
  userAutoInsurance: 'true',
  userEmployerDisabilityInsurance: undefined,
  userEmployerLifeInsurance: 15000,
  userHealthInsurance: 'true',
  userHomeInsurance: 'true',
  userIndividualDisabilityInsurance: 0,
  userIndividualLifeInsurance: 0,
  userPayrollDeductions: 2000,
  userRothContribution: 5500,
  taxProjection: {
    householdGross: 350000,
    pretaxContributions: 34000,
    agi: 316000,
    deductions: {
      standard: 12600,
      itemized: {
        localTaxes: 38930,
        propertyTaxes: 3050,
        mortgageInterest: 10280,
        miscDeduction: 5000
      },
      maxApplicable: 52061
    },
    exemptions: {
      claimed: 8000,
      reductions: 720,
      maxApplicable: 7280
    },
    taxableIncome: 256659,
    projected: {
      federal: 60391,
      amt: 13339,
      local: 38930,
      fica: {
        ss: 13547,
        medicare: 5075,
        addlMedicare: 900
      }
    },
    netIncome: 143999
  }
};

module.exports = testPlan;
