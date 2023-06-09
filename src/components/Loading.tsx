import { Vortex } from "react-loader-spinner";

const Loading = () => (
  <div className={` min-h-[30vh] flex w-full items-center justify-center`}>
    <Vortex visible={true} height="80" width="80" ariaLabel="vortex-loading" wrapperClass="vortex-wrapper" colors={["#22c55e", "#86efac", "#16a34a", "#84cc16", "#4ade80", "#22d3ee"]} />
  </div>
);

export default Loading;
