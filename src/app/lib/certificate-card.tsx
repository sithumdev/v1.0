import clsx from "clsx";
import { ICertificate } from "../data/data";

type ICertificateCard = {
  certificate: ICertificate;
  css?: string;
};

export default function CertificateCard({
  certificate: { name, institute, image, year },
  css,
}: ICertificateCard) {
  return (
    <div
      className={clsx(
        "flex items-center gap-5 px-4 py-5 border rounded-full",
        css
      )}
    >
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm mt-1">
        {institute} - {year}
      </p>
    </div>
  );
}
