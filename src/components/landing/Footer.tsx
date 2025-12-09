import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="container">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <div>
            <span className="font-display text-lg font-semibold tracking-[0.15em] text-primary uppercase">
              Nortês Interiores
            </span>
            <p className="mt-2 text-sm text-muted-foreground">
              Decoração com personalidade para o seu lar
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {[
              { href: 'https://instagram.com/nortesinteriores', icon: Instagram, label: 'Instagram' },
              { href: 'https://facebook.com/nortesinteriores', icon: Facebook, label: 'Facebook' },
              { href: 'mailto:contato@nortesinteriores.com.br', icon: Mail, label: 'E-mail' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-soft"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-border" />

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <a href="https://nortesinteriores.com.br" className="hover:text-primary transition-colors">
              Site Oficial
            </a>
            <a href="https://nortesinteriores.com.br/politica-de-privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="https://nortesinteriores.com.br/termos-de-uso" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="https://nortesinteriores.com.br/trocas-e-devolucoes" className="hover:text-primary transition-colors">
              Trocas e Devoluções
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground/70">
            <p>© {currentYear} Nortês Interiores. Todos os direitos reservados.</p>
            <p className="mt-1">CNPJ: XX.XXX.XXX/0001-XX</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;