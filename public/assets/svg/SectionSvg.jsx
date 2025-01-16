import PlusSvg from "./PlusSvg";

const SectionSvg = ({ crossesOffset }) => {
  return (
    <>
      <PlusSvg
        className={`hidden absolute ${
          crossesOffset ? crossesOffset : "-top-[0.3000rem] left-[1.5650rem]"
        } pointer-events-none lg:block xl:left-[2.1875rem]`}
      />

      <PlusSvg
        className={`hidden absolute ${
          crossesOffset ? crossesOffset : "-top-[0.3125rem] right-[1.5625rem]"
        } pointer-events-none lg:block xl:right-[2.1875rem]`}
      />
    </>
  );
};

export default SectionSvg;
