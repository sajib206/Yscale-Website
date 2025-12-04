import React, { useState } from 'react';
import { X, Sparkles, Loader2 } from 'lucide-react';
import { generateProjectBrief } from '../services/gemini';

interface BriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BriefModal: React.FC<BriefModalProps> = ({ isOpen, onClose }) => {
  const [company, setCompany] = useState('');
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [brief, setBrief] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
        // Fallback if API key isn't set in environment for the demo
        if (!process.env.API_KEY) {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setBrief(`**Demo Mode (No API Key Detected)**\n\nSince no API key was provided, here is a simulation:\n\n# Project: ${idea}\n\n**Strategic Goals:**\n1. Increase brand awareness for ${company}.\n2. Streamline user acquisition flows.\n3. Modernize visual identity.\n\n**Next Steps:**\nSchedule a 30-min discovery call to discuss timeline and budget.`);
        } else {
            const result = await generateProjectBrief(company, idea);
            setBrief(result);
        }
    } catch (err) {
      setBrief("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <div className="flex items-center gap-2 text-brand-orange">
            <Sparkles size={20} fill="currentColor" className="opacity-20" />
            <h3 className="font-serif font-semibold text-xl text-gray-900">AI Design Brief</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-900 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {!brief ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-gray-600 text-sm mb-4">
                Tell us a little about your project, and our AI will generate a preliminary strategic brief for our call.
              </p>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  required
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-all"
                  placeholder="e.g. Acme Corp"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">What are you building?</label>
                <textarea
                  required
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-all h-32 resize-none"
                  placeholder="e.g. A new marketing website for our SaaS platform focusing on enterprise clients..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-brand-orange hover:bg-orange-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Generate Brief & Book"}
              </button>
            </form>
          ) : (
            <div className="prose prose-orange prose-sm">
              <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-4 text-sm">
                Brief generated successfully! Mention this ID during your call.
              </div>
              <div className="whitespace-pre-line text-gray-700">
                {brief}
              </div>
              <button 
                onClick={onClose}
                className="mt-6 w-full py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};