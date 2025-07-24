import Image from "next/image";
import React from "react";
import { LocationIcon } from "../../../public/resources";

const Location = () => {
  return (
    <section className="mb-16">
      <div className="container-custom mx-auto">
        <p className="font-archivo text-gradient text-xl font-bold pb-1 text-center">
          Location
        </p>
        <div className="flex items-center justify-center gap-1 mb-8">
          <Image src={LocationIcon} alt="Location" className="w-5" />
          <p className="text-[#555555] text-sm font-medium font-archivo  text-center">
            Aziz Mansion, Shafipur, Kaliakoir, Gazipur, Bangladesh
          </p>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3644.122641521607!2d90.273484!3d24.02674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e73d2f6d434f%3A0x7e87306d9e31eeb3!2sKhwaja%20Badrudduja%20Modern%20Hospital!5e0!3m2!1sen!2sbd!4v1753350499257!5m2!1sen!2sbd"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
