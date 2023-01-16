import { useThree } from "@react-three/fiber";
import { CubeTexture, CubeTextureLoader } from "three";
import bgBack from "../assets/textures/milky-way/bg-back.png";
import bgBottom from "../assets/textures/milky-way/bg-bottom.png";
import bgFront from "../assets/textures/milky-way/bg-front.png";
import bgLeft from "../assets/textures/milky-way/bg-left.png";
import bgRight from "../assets/textures/milky-way/bg-right.png";
import bgTop from "../assets/textures/milky-way/bg-top.png";

interface MilkyWayProps {
  children: JSX.Element | JSX.Element[];
}

export const MilkyWay = ({ children }: MilkyWayProps): JSX.Element => {
  const { scene } = useThree();

  const loader: CubeTextureLoader = new CubeTextureLoader();

  const backgroundTexture: CubeTexture = loader.load([
    bgFront,
    bgBack,
    bgTop,
    bgBottom,
    bgLeft,
    bgRight,
  ]);

  scene.background = backgroundTexture;

  return <>{children}</>;
};
