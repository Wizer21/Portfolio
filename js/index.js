import * as THREE from "../files/threejs/three.module.js";
import { OBJLoader } from "../files/threejs/OBJLoader.js";
import { OrbitControls } from "../files/threejs/OrbitControls.js";
import { MTLLoader } from "../files/threejs/MTLLoader.js";

var sphere_list = []

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
        new_div = document.createElement("div");
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
        new_div.className = "parent";
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
    // Scene
    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 5;

    // Render
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container_3D.appendChild(renderer.domElement);

    // Camera Controler
    const controls = new OrbitControls(camera, container_3D);

    // // Light
    // const light = new THREE.PointLight( 0xc4c4c4 )
    // light.intensity = 2
    // light.position.set(50, 10, 40);
    // scene.add( light )

    let simon
    const loader = new OBJLoader();
    //mtl.materials.Material.side = THREE.DoubleSide
    loader.load("../files/models/simon.obj", function (object) {
        object.scale.set(0.05, 0.05, 0.05)
        scene.add(object);   
        simon = object
    })    

    // Build default items
    for (let i = 0; i < 5; i++ ){
        create_sphere(scene)
    }

    // Animate
    const animate = function () {
        requestAnimationFrame(animate);

        simon.rotation.y += 0.001;
        renderer.render(scene, camera);

        var number = dice(0, 100)
        if (number > 98){
            create_sphere(scene)
        }
        else if (number < 2){
            delete_sphere(scene, renderer)
        }
    }
    animate()
}

function create_sphere(scene){
    var position = [dice(-400, 400), dice(-400, 400), dice(-400, 400)]

    // Create Sphere
    var geometry = new THREE.SphereGeometry(2, 2, 2)
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} )
    var sphere = new THREE.Mesh(geometry, material)
    
    // Create Light
    var light = new THREE.PointLight( 0xc4c4c4 )
    light.intensity = 1

    // Set position
    light.position.set(position[0], position[1], position[2])
    sphere.position.set(position[0], position[1], position[2])

    // Store
    sphere_list.push([sphere.id, light.id])

    // Display
    scene.add(light)
    scene.add(sphere)
}

function delete_sphere(scene, renderer){
    if (sphere_list.length > 0){

        console.log(sphere_list)
        var sphere = scene.getObjectById(sphere_list[0][0])
        var light = scene.getObjectById(sphere_list[0][1])
        console.log(sphere)
        console.log(light)

        sphere.geometry.dispose()
        sphere.material.dispose()
        scene.remove(sphere)
        scene.remove(light)
        
        sphere_list.shift()     
        console.log("pop")   
        console.log(sphere_list)

        renderer.renderLists.dispose();
    }
}

function dice(min, max){
    return Math.random() * (max - min) + min;
}