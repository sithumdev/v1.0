import { CertificateCard } from ".";
import { CERTIFICATES } from "../data/data";

export default function Certificates() {
  return (
    <div className="mt-10">
      <hr className="my-5" />

      <div>
        <h4 className="text-2xl mb-5">Professional Certificates</h4>
        {CERTIFICATES.map((certificate) => (
          <CertificateCard
            certificate={certificate}
            key={certificate.name}
            css="mb-4"
          />
        ))}
      </div>
    </div>
  );
}
