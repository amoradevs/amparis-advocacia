import { MessageCircle } from 'lucide-react';

const WA_URL =
  'https://wa.me/5511997904557?text=Olá!%20Vim%20pelo%20site%20da%20Amparis%20Advocacia%20e%20gostaria%20de%20uma%20análise%20gratuita%20do%20meu%20caso.';

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5c] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110"
      style={{ boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' }}
    >
      <MessageCircle size={28} className="text-white" fill="white" />
    </a>
  );
}
