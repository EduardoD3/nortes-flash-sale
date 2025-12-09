import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <div>
            <h3 className="font-display text-xl font-semibold text-primary">
              NORTÊS INTERIORES
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Decoração com personalidade para o seu lar
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com/nortesinteriores"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com/nortesinteriores"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="mailto:contato@nortesinteriores.com.br"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="E-mail"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="https://nortesinteriores.com.br" className="hover:text-primary hover:underline">
              Site Oficial
            </a>
            <a href="https://nortesinteriores.com.br/politica-de-privacidade" className="hover:text-primary hover:underline">
              Política de Privacidade
            </a>
            <a href="https://nortesinteriores.com.br/termos-de-uso" className="hover:text-primary hover:underline">
              Termos de Uso
            </a>
            <a href="https://nortesinteriores.com.br/trocas-e-devolucoes" className="hover:text-primary hover:underline">
              Trocas e Devoluções
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground">
            <p>© {currentYear} Nortês Interiores. Todos os direitos reservados.</p>
            <p className="mt-1">CNPJ: XX.XXX.XXX/0001-XX</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
