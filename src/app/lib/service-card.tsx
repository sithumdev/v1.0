import Image from "next/image";
import { IService } from "../data/data";

type IServiceCard = {
  service: IService;
};

export default function ServiceCard({
  service: { service, description, clients, image },
}: IServiceCard) {
  return (
    <div className="flex w-full p-4 rounded-2xl border flex-col items-center">
      <Image
        src={image}
        width="100"
        height="100"
        alt={image}
        className="object-contain rounded-full"
      />

      <h4 className="text-lg text-center mt-5">{service}</h4>
      <p className="mt-2 text-sm text-center">{description}</p>
      <div className="flex items-center gap-1 mt-4 justify-center">
        <Image
          src="/check.svg"
          width="20"
          height="20"
          alt="check"
          className="object-contain"
        />
        <h5 className="text-xs">More than {clients} projects completed</h5>
      </div>
    </div>
  );
}
