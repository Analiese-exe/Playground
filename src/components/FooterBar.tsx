import { ManagedImage } from "@/components/ManagedImage";

export function FooterBar() {
  return (
    <footer className="site-footer" data-reveal>
      <div className="site-footer-row">
        <p>
          Designed with <span className="footer-heart">&#10084;</span> by analiese ukeje
        </p>
        <div className="signature-mark signature-mark--image" aria-hidden="true">
          <ManagedImage className="signature-image signature-image--dark" src="/signature-dark.png" alt="" />
          <ManagedImage className="signature-image signature-image--light" src="/signature-light.png" alt="" />
        </div>
      </div>
    </footer>
  );
}
