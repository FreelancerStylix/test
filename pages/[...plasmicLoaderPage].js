/** This file is auto-generated by Plasmic; please do not edit! */
import { useRouter } from "next/router";
import PlasmicLoader from "@plasmicapp/loader";

const componentsByPath = {
  
    "test": {name: "Test", projectId: "ecExdpFC8Vb4GD9EyAb8Nn" },
  
    "objective": {name: "Objective", projectId: "ecExdpFC8Vb4GD9EyAb8Nn" },
  
    "page-2": {name: "ExamplePage", projectId: "ecExdpFC8Vb4GD9EyAb8Nn" },
  
    "test-2": {name: "Test2", projectId: "ecExdpFC8Vb4GD9EyAb8Nn" },
  
};

export default function PlasmicLoaderPage() {
  const router = useRouter();
  let { plasmicLoaderPage } = router.query;
  if (Array.isArray(plasmicLoaderPage)) {
    plasmicLoaderPage = plasmicLoaderPage.join('/');
  }
  const {name, projectId} = componentsByPath[plasmicLoaderPage];

  return <PlasmicLoader component={name} projectId={projectId} />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      
        { params: { plasmicLoaderPage: ["test",] } },
      
        { params: { plasmicLoaderPage: ["objective",] } },
      
        { params: { plasmicLoaderPage: ["page-2",] } },
      
        { params: { plasmicLoaderPage: ["test-2",] } },
      
    ],
    fallback: false,
  };
}
