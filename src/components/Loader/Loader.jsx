import { ProgressBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <ProgressBar
      visible={true}
      height="80"
      width="80"
      color="#1dca06"
      ariaLabel="progress-bar-loading"
    />
  );
};

export default Loader;
