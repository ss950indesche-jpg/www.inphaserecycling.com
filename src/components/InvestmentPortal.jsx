import React, { useState } from 'react';
import { ChevronRight, Lock, TrendingUp, Award, Zap, Shield, DollarSign, Target, CheckCircle, ArrowRight, X } from 'lucide-react';

const InvestmentPortal = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const [isQualified, setIsQualified] = useState(false);
  const [showQualification, setShowQualification] = useState(false);

  const qualificationCriteria = [
    { id: 1, text: 'Gross income of $500,000+ per year (2 consecutive years)', met: false },
    { id: 2, text: 'Liabilities below 50% of gross income', met: false },
    { id: 3, text: 'Minimum $250,000 in combined liquid assets', met: false },
    { id: 4, text: 'Prior private equity investment experience (last 5 years)', met: false },
    { id: 5, text: 'Completed IPR founder introduction call', met: false },
    { id: 6, text: 'Investment capacity of $100,000 - $250,000', met: false }
  ];

  const [criteria, setCriteria] = useState(qualificationCriteria);

  const toggleCriteria = (id) => {
    setCriteria(criteria.map(c => c.id === id ? { ...c, met: !c.met } : c));
  };

  const allQualified = criteria.every(c => c.met);

  const projectedReturns = [
    { year: 'Year 1', revenue: 3.3, multiple: '1.0x', milestone: 'Product-market fit, first data licenses' },
    { year: 'Year 2', revenue: 8.5, multiple: '2.8x', milestone: 'Patent MOUs, enterprise pilots' },
    { year: 'Year 3', revenue: 22.0, multiple: '7.5x', milestone: 'Market expansion, recurring revenue' },
    { year: 'Year 4', revenue: 45.0, multiple: '15.2x', milestone: 'Scale operations' },
    { year: 'Year 5', revenue: 85.0, multiple: '28.5x', milestone: 'Market leadership, exit opportunities' }
  ];

  if (!isQualified && currentSection === 'hero') {
    return (
      <div className="min-h-screen bg-slate-900">
        <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40" />

          <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
            <div className="flex items-center justify-center mb-8">
              <Lock className="w-8 h-8 mr-3 text-amber-400" />
              <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm">Private · Invitation Only</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 leading-tight">
              In Phase Recycling
            </h1>
            <p className="text-2xl md:text-3xl text-center mb-4 text-emerald-200">
              Climate Tech Investment Opportunity
            </p>
            <p className="text-xl text-center mb-12 text-white opacity-80 max-w-3xl mx-auto">
              AI-Powered Carbon Credit Marketplace with Cryptographically Verifiable MRV Platform
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
                <DollarSign className="w-12 h-12 mb-4 text-emerald-400" />
                <div className="text-4xl font-bold mb-2">$1.0-1.5M</div>
                <div className="text-emerald-200">Seed Round</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
                <TrendingUp className="w-12 h-12 mb-4 text-emerald-400" />
                <div className="text-4xl font-bold mb-2">$3.33M</div>
                <div className="text-emerald-200">12-Month Base Revenue</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
                <Target className="w-12 h-12 mb-4 text-emerald-400" />
                <div className="text-4xl font-bold mb-2">28.5x</div>
                <div className="text-emerald-200">5-Year Projected Multiple</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <button
                onClick={() => setShowQualification(true)}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-12 py-5 rounded-full text-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-2xl flex items-center"
              >
                Begin Qualification Process
                <ChevronRight className="ml-2 w-6 h-6" />
              </button>
              <button
                onClick={() => {
                  setIsQualified(true);
                  setCurrentSection('overview');
                }}
                className="text-white opacity-80 hover:opacity-100 flex items-center text-lg"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {showQualification && (
          <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl max-w-3xl w-full p-8 relative my-8">
              <button
                onClick={() => setShowQualification(false)}
                className="absolute top-6 right-6 text-white opacity-60 hover:opacity-100"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center mb-8">
                <Shield className="w-10 h-10 text-emerald-400 mr-4" />
                <div>
                  <h2 className="text-3xl font-bold text-white">Investor Qualification</h2>
                  <p className="text-white opacity-60">Confirm your eligibility for this exclusive opportunity</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {criteria.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleCriteria(item.id)}
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      item.met
                        ? 'bg-emerald-500 bg-opacity-20 border-2 border-emerald-500'
                        : 'bg-white bg-opacity-5 border-2 border-white border-opacity-10 hover:border-opacity-30'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 ${
                        item.met ? 'bg-emerald-500 border-emerald-500' : 'border-white border-opacity-30'
                      }`}>
                        {item.met && <CheckCircle className="w-5 h-5 text-white" />}
                      </div>
                      <span className="text-white text-lg">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white bg-opacity-5 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white opacity-60">Qualification Progress</span>
                  <span className="text-emerald-400 font-bold">{criteria.filter(c => c.met).length}/{criteria.length}</span>
                </div>
                <div className="w-full bg-white bg-opacity-10 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(criteria.filter(c => c.met).length / criteria.length) * 100}%` }}
                  />
                </div>
              </div>

              {allQualified ? (
                <button
                  onClick={() => {
                    setIsQualified(true);
                    setShowQualification(false);
                    setCurrentSection('overview');
                  }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-xl text-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all flex items-center justify-center"
                >
                  <CheckCircle className="mr-2 w-6 h-6" />
                  Access Investment Details
                </button>
              ) : (
                <div className="text-center text-white opacity-60 py-4">
                  Please confirm all qualification criteria to proceed
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="sticky top-0 bg-slate-900 bg-opacity-95 backdrop-blur-lg border-b border-white border-opacity-10 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IP</span>
              </div>
              <span className="text-white font-bold text-xl">In Phase Recycling</span>
            </div>

            <div className="flex items-center space-x-6">
              <button onClick={() => setCurrentSection('overview')} className="text-white opacity-70 hover:opacity-100 transition-colors">Overview</button>
              <button onClick={() => setCurrentSection('technology')} className="text-white opacity-70 hover:opacity-100 transition-colors">Technology</button>
              <button onClick={() => setCurrentSection('financials')} className="text-white opacity-70 hover:opacity-100 transition-colors">Financials</button>
              <button className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors flex items-center">
                <Lock className="w-4 h-4 mr-2" />
                Invest
              </button>
            </div>
          </div>
        </div>
      </nav>

      {currentSection === 'overview' && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-white mb-6 text-center">Investment Overview</h2>
            <p className="text-xl text-white opacity-70 text-center mb-16 max-w-4xl mx-auto">
              IPR is transforming the $50B+ carbon credit market with the first cryptographically verifiable MRV platform
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-emerald-500 border-opacity-30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Zap className="w-8 h-8 mr-3 text-emerald-400" />
                  Market Opportunity
                </h3>
                <ul className="space-y-4 text-white opacity-80 text-lg">
                  <li className="flex items-start">
                    <ChevronRight className="w-6 h-6 mr-2 text-emerald-400 flex-shrink-0" />
                    $50B+ voluntary carbon market growing at 30% CAGR
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-6 h-6 mr-2 text-emerald-400 flex-shrink-0" />
                    $320B global recycling market with verifiable diversion demand
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-6 h-6 mr-2 text-emerald-400 flex-shrink-0" />
                    Legacy registries vulnerable to disruption
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-emerald-500 border-opacity-30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="w-8 h-8 mr-3 text-emerald-400" />
                  Competitive Advantages
                </h3>
                <ul className="space-y-4 text-white opacity-80 text-lg">
                  <li className="flex items-start">
                    <ChevronRight className="w-6 h-6 mr-2 text-emerald-400 flex-shrink-0" />
                    Patent-pending dual-ledger provenance
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-6 h-6 mr-2 text-emerald-400 flex-shrink-0" />
                    AI valuation engine with explainable pricing
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-6 h-6 mr-2 text-emerald-400 flex-shrink-0" />
                    Tracker Pro hardware for tamper-evident MRV
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-900 to-teal-900 bg-opacity-30 rounded-2xl p-8 border border-emerald-500 border-opacity-50">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Revenue Model</h3>
              <div className="grid grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">1.5%</div>
                  <div className="text-white opacity-70">Transaction Fees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">$149-1.9K</div>
                  <div className="text-white opacity-70">SaaS Tiers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">$50-180K</div>
                  <div className="text-white opacity-70">Data Licensing</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">2-5%</div>
                  <div className="text-white opacity-70">Spread Capture</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {currentSection === 'financials' && (
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-white mb-6 text-center">Financial Projections</h2>
            <p className="text-xl text-white opacity-70 text-center mb-16 max-w-4xl mx-auto">
              Conservative base case with significant upside from data licensing
            </p>

            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 mb-12 border border-emerald-500 border-opacity-30">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">5-Year Revenue Trajectory</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white border-opacity-20">
                        <th className="py-4 px-4 text-emerald-400 font-semibold">Period</th>
                        <th className="py-4 px-4 text-emerald-400 font-semibold">Revenue</th>
                        <th className="py-4 px-4 text-emerald-400 font-semibold">Multiple</th>
                        <th className="py-4 px-4 text-emerald-400 font-semibold">Milestones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projectedReturns.map((row, idx) => (
                        <tr key={idx} className="border-b border-white border-opacity-10">
                          <td className="py-4 px-4 text-white font-semibold">{row.year}</td>
                          <td className="py-4 px-4 text-white text-lg">${row.revenue}M</td>
                          <td className="py-4 px-4 text-emerald-400 text-lg font-bold">{row.multiple}</td>
                          <td className="py-4 px-4 text-white opacity-70">{row.milestone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {currentSection === 'technology' && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-white mb-6 text-center">Technology Stack</h2>
            <p className="text-xl text-white opacity-70 text-center mb-16 max-w-4xl mx-auto">
              Enterprise-grade infrastructure with cryptographic provenance
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-emerald-500 border-opacity-30">
                <div className="w-16 h-16 bg-emerald-500 bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Dual-Ledger Architecture</h3>
                <p className="text-white opacity-70 mb-4">
                  Hybrid permissioned/public ledger prevents double counting
                </p>
                <ul className="space-y-2 text-white opacity-60">
                  <li>• Byzantine fault-tolerant consensus</li>
                  <li>• Ethereum/Bitcoin anchoring</li>
                  <li>• Merkle proofs for verification</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-emerald-500 border-opacity-30">
                <div className="w-16 h-16 bg-emerald-500 bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Valuation Engine</h3>
                <p className="text-white opacity-70 mb-4">
                  Machine learning models provide real-time pricing
                </p>
                <ul className="space-y-2 text-white opacity-60">
                  <li>• Multi-factor regression models</li>
                  <li>• SHAP explainability framework</li>
                  <li>• Continuous re-marking</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-emerald-500 border-opacity-30">
                <div className="w-16 h-16 bg-emerald-500 bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Tracker Pro Device</h3>
                <p className="text-white opacity-70 mb-4">
                  IoT hardware captures tamper-evident MRV data
                </p>
                <ul className="space-y-2 text-white opacity-60">
                  <li>• Secure element attestation</li>
                  <li>• GPS/weight/photo capture</li>
                  <li>• Ed25519 digital signatures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-32 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join the Climate Tech Revolution
            </h2>
            <p className="text-2xl text-white opacity-90 mb-12">
              Limited spots available for qualified investors
            </p>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-10 border border-white border-opacity-30 mb-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-5xl font-bold text-emerald-400 mb-2">$85M</div>
                  <div className="text-white opacity-80">Year 5 Revenue</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-emerald-400 mb-2">28.5x</div>
                  <div className="text-white opacity-80">Projected Multiple</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-emerald-400 mb-2">3-5 yrs</div>
                  <div className="text-white opacity-80">Exit Timeline</div>
                </div>
              </div>

              <div className="border-t border-white border-opacity-20 pt-8">
                <button
                  onClick={() => setShowQualification(true)}
                  className="bg-white text-emerald-900 px-12 py-5 rounded-full text-xl font-bold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center"
                >
                  Begin Investment Process
                  <ArrowRight className="ml-3 w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="text-white opacity-60 text-sm max-w-2xl mx-auto">
              <p>
                This investment opportunity is available exclusively to accredited investors. All investments carry risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-12 border-t border-white border-opacity-10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-white opacity-60 text-sm mb-4">
            © 2025 In Phase Recycling LLC. Confidential & Proprietary.
          </div>
          <div className="text-white opacity-40 text-xs">
            This presentation is for qualified investors only.
          </div>
        </div>
      </footer>

      {showQualification && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl max-w-3xl w-full p-8 relative my-8">
            <button
              onClick={() => setShowQualification(false)}
              className="absolute top-6 right-6 text-white opacity-60 hover:opacity-100"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center mb-8">
              <Shield className="w-10 h-10 text-emerald-400 mr-4" />
              <div>
                <h2 className="text-3xl font-bold text-white">Investor Qualification</h2>
                <p className="text-white opacity-60">Confirm your eligibility</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {criteria.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCriteria(item.id)}
                  className={`p-5 rounded-xl cursor-pointer transition-all ${
                    item.met
                      ? 'bg-emerald-500 bg-opacity-20 border-2 border-emerald-500'
                      : 'bg-white bg-opacity-5 border-2 border-white border-opacity-10'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 ${
                      item.met ? 'bg-emerald-500 border-emerald-500' : 'border-white border-opacity-30'
                    }`}>
                      {item.met && <CheckCircle className="w-5 h-5 text-white" />}
                    </div>
                    <span className="text-white text-lg">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {allQualified && (
              <button
                onClick={() => {
                  setIsQualified(true);
                  setShowQualification(false);
                  setCurrentSection('overview');
                }}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-xl text-xl font-semibold flex items-center justify-center"
              >
                <CheckCircle className="mr-2 w-6 h-6" />
                Access Investment Details
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestmentPortal;
