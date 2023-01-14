import { Stars } from "@react-three/drei";

export const StarGroup = (): JSX.Element => {
  return (
    <>
      <Stars count={10000} fade={true} depth={100} factor={3} />
      <Stars count={10000} fade={true} depth={200} factor={3} />
      <Stars count={10000} fade={true} depth={300} factor={3} />
      <Stars count={10000} fade={true} depth={400} factor={3} />
      <Stars count={10000} fade={true} depth={500} factor={3} />
    </>
  );
};
