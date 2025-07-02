import ServiceDetails from "@/components/service-details/ServiceDetails";
import React from "react";

const Page = async ({ params }) => {
  const { id } = params;
  return <ServiceDetails id={id} />; // Pass the id to ServiceDetails component
};

export default Page;
