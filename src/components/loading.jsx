import { tailspin } from "ldrs";

tailspin.register();

export default function Loading() {
  return (
    <div className="w-full flex justify-center items-center">
      <l-tailspin size="40" stroke="5" speed="0.9" color="black"></l-tailspin>{" "}
    </div>
  );
}
