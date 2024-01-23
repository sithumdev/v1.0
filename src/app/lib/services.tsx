import { ServiceCard } from ".";
import { SERVICES } from "../data/data";

export default function Services() {
  return (
    <div className="mt-10" id="services">
      <hr className="my-5" />

      <div>
        <h4 className="text-2xl mb-5">Services</h4>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.service} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
