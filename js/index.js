import * as THREE from "../files/threejs/three.module.js";
import { OBJLoader } from "../files/threejs/OBJLoader.js";

const data = [
  {
    title: "Projet 1",
    description: "JavaScript Object Notation est un format de données textuelles dérivé de la notation des objets du langage JavaScript. Il permet de représenter de l’information structurée comme le perm",
    git_link: "https://github.com/Wizer21?tab=repositories",
    start_date: "01/01/2020",
    end_date: "02/02/2021",
    image: "../files/images/winter.jpg",
    youtube: "null",
  },
  {
    title: "Projet 2",
    description: "amework that just works. Bulma is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build respon",
    git_link: "https://bulma.io/",
    start_date: "01/01/2045",
    end_date: "02/02/2019",
    image: "../files/images/witch.png",
    youtube: "null",
  },
];

export function main() {
  document.addEventListener("DOMContentLoaded", () => {
    let body = document.getElementById("body_container");
    let container_3D = document.getElementById("3d_container");

    let new_div;
    let new_elem_text;
    let new_elem_image;
    let new_elem;
    for (let i = 0; i < data.length; i++) {
      // BUILD DIVS
      new_div = document.createElement("div", { className: "parent" });
      new_elem_text = document.createElement("div");
      new_elem_image = document.createElement("div");

      // BUILD IMAGE
      new_elem = document.createElement("img");
      new_elem.src = data[i].image;
      new_elem_image.appendChild(new_elem);

      // BUILD DESCRIPTION
      new_elem_text.appendChild(build_element_with_text(new_elem, "h1", data[i].title));
      new_elem_text.appendChild(build_element_with_text(new_elem, "p", data[i].description));
      new_elem_text.appendChild(build_element_with_text(new_elem, "p", "Start " + data[i].start_date));
      new_elem_text.appendChild(build_element_with_text(new_elem, "p", "End " + data[i].end_date));

      // SET POSITION
      if (i % 2 == 0) {
        new_elem_text.className = "right_col";
        new_elem_image.className = "left_col";
      } else {
        new_elem_text.className = "left_col";
        new_elem_image.className = "right_col";
      }

      // STRUCTURE
      new_div.appendChild(new_elem_text);
      new_div.appendChild(new_elem_image);
      body.appendChild(new_div);
    }
    render_scene(container_3D);
  });
}

function build_element_with_text(element, type, text) {
  element = document.createElement(type);
  element.textContent = text;
  return element;
}

function render_scene(container_3D) {
  // SCENE
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container_3D.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const light = new THREE.AmbientLight( 0x404040 )
  scene.add( light )

  // ANIMATION
  camera.position.z = 5;
  const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };
  animate();

  // IMPORT OBJ
  const loader = new OBJLoader();
  loader.load("../files/models/arm_rig.obj",
  function (object) {
      scene.add(object);
  },
  function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
      console.log("An error happened");
  }
  );
}
