import clsx from "clsx";
import { ICertificate } from "../data/data";
import Image from "next/image";

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
        "flex items-center gap-5 px-4 py-5 border rounded-full min-h-[6rem]",
        css
      )}
    >
      <Image
        src={image}
        width="50"
        height="50"
        alt={name}
        className="object-cover"
      />
      <h2 className="text-sm lg:text-lg font-semibold">{name}</h2>
      <p className="text-xs lg:text-sm mt-1">
        {institute} - {year}
      </p>
    </div>
  );
}
