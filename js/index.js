import * as THREE from "../files/threejs/three.module.js";
import { OBJLoader } from "../files/threejs/OBJLoader.js";
import { OrbitControls } from "../files/threejs/OrbitControls.js";
import { MTLLoader } from "../files/threejs/MTLLoader.js";

var sphere_list = []

const data = [    
    {
        title: "Swich Network",
        description: "Learning project imitating a social network. This project was realized using Python and Django",
        git_link: "https://github.com/Wizer21/Swich_network",
        start_date: "01/01/2020",
        end_date: "02/02/2021",
        image: "../files/images/network.png",
        youtube: "null",
    },
    {
        title: "Robot arm",
        description: "This project is a 6-axis arm, controlled on a Raspberry Pi. The arm can be managed from an Xbox controller. 🎮 By using the calculation method below, I can create vertical or horizontal movements. If, for example, I want to claw to be lowered, I set this new position and calculate from this one, witch should be the new motors postions.",
        git_link: "https://github.com/Wizer21/6Servo_Robot_Arm",
        start_date: "01/01/2020",
        end_date: "02/02/2021",
        image: "../files/images/arm.jpg",
        youtube: "null",
    },
    {
        title: "Tracking Robot",
        description: "This project is realized on Raspberry Pi 4. This robot is equipped with 2 DC motor that allow it to move around. Two servomotor control the camera which can in this way follow objects. Both DC and servomotors can be controlled from the Qt interface or from an Xbox controller.",
        git_link: "https://github.com/Wizer21/TrackerRobot",
        start_date: "01/01/2020",
        end_date: "02/02/2021",
        image: "../files/images/robot_tracking.jpg",
        youtube: "null",
    },
    {
        title: "Synchronized Canvas",
        description: "This project is a simple scribble application. Users can create rooms that will synchronize their canvas with the users present in the same room.",
        git_link: "https://github.com/Wizer21/Connected_canvas",
        start_date: "01/01/2045",
        end_date: "02/02/2019",
        image: "../files/images/canvas.png",
        youtube: "null",
    },
    {
        title: "Command Generator",
        description: "'Command Generator' is an application that generates order mail in a few clicks.",
        git_link: "https://github.com/Wizer21/OrderGenerator",
        start_date: "01/01/2020",
        end_date: "02/02/2021",
        image: "../files/images/table_pres.jpg",
        youtube: "null",
    },
    {
        title: "Image/Video Tracker",
        description: "This program allows you to find complex shapes from an image, depending on their color, by clicking on the image, the algorithm will get the pixel table of our image, the position of pixel clicked and its color",
        git_link: "https://github.com/Wizer21/Image_Tracker",
        start_date: "01/01/2020",
        end_date: "02/02/2021",
        image: "../files/images/green.png",
        youtube: "null",
    },
    {
        title: "TicTacToe",
        description: "This TicTacToe allows you to play against the program that analyzes the board to find the best way to deafeat you.",
        git_link: "https://github.com/Wizer21/TicTacToe",
        start_date: "01/01/2020",
        end_date: "02/02/2021",
        image: "../files/images/tictactoe.jpg",
        youtube: "null",
    },
    {
        title: "Swich",
        description: "This project was mainly made to showcase my skills and keep an history of my progression. The developpement started on 2nd, november 2020. This project was only made through C++ with the Qt library.",
        git_link: "https://github.com/Wizer21/Swich",
        start_date: "01/01/2020",
        end_date: "02/02/2021",
        image: "../files/images/swich.jpg",
        youtube: "null",
    },
    {
        title: "Simulation Revendeur",
        description: "First Qt Application",
        git_link: "https://github.com/Wizer21/SimulationRevendeur",
        start_date: "01/01/2020",
        end_date: "02/02/2021",
        image: "../files/images/Revendeur.jpg",
        youtube: "null",
    },
];

export function main() {
    document.addEventListener("DOMContentLoaded", () => {
        // BUILD INTERFACE 
        let body = document.getElementById("body_container");
        let container_3D = document.getElementById("container_3d");

        let new_div;
        let new_elem_text;
        let new_elem_image;
        let new_elem;
        for (let i = 0; i < data.length; i++) {
            // BUILD DIVS
            new_div = document.createElement("div")
            new_elem_text = document.createElement("div")
            new_elem_image = document.createElement("div")

            // BUILD IMAGE LINK
            new_elem = document.createElement("a")
            new_elem.href = data[i].git_link
            new_elem.target = "_blank"
            new_elem_image.appendChild(new_elem)

            // BUILD IMAGE
            new_elem = document.createElement("img")
            new_elem.src = data[i].image
            new_elem.className = "row"
            new_elem.dataset.angle = `${dice(0, 10) - 5}`
            new_elem.style.transform = `rotate(${ new_elem.dataset.angle }deg)`
            new_elem_image.children[0].appendChild(new_elem)

            // BUILD DESCRIPTION
            new_elem_text.appendChild(build_element_with_text(new_elem, "h1", data[i].title))
            new_elem_text.appendChild(build_element_with_text(new_elem, "p", data[i].description))
            new_elem_text.appendChild(build_element_with_text(new_elem, "p", "Start " + data[i].start_date))
            new_elem_text.appendChild(build_element_with_text(new_elem, "p", "End " + data[i].end_date))

            // SET POSITION
            new_div.className = "parent row"
            if (i % 2 == 0) {
                new_elem_text.className = "right_col text_div"
                new_elem_image.className = "left_col"
            } else {
                new_elem_text.className = "left_col text_div"
                new_elem_image.className = "right_col"
            }

            // STRUCTURE
            new_div.appendChild(new_elem_text)
            new_div.appendChild(new_elem_image)
            body.appendChild(new_div)
        }

        // BUILD SCENE
        build_events()  

        // BUILD SCENE
        render_scene(container_3D)
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

    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / (window.innerHeight/2),
        0.1,
        1000
    );
    camera.position.z = 5;

    // Render
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight/2);
    container_3D.appendChild(renderer.domElement);

    // Camera Controler    
    //const controls = new OrbitControls(camera, container_3D);

    let simon
    const loader = new OBJLoader();
    //mtl.materials.Material.side = THREE.DoubleSide
    loader.load("../files/models/simon.obj", function (object) {
        object.scale.set(0.05, 0.05, 0.05)
        scene.add(object);   
        simon = object
    })    

    // Build default items
    for (let i = 0; i < 40; i++ ){
        create_sphere(scene)
    }

    // Animate
    const animate = function () {
        requestAnimationFrame(animate);

        simon.rotation.y += 0.002;
        renderer.render(scene, camera);

        // var number = dice(0, 100)
        // if (number > 98){
        //     create_sphere(scene)
        // }
        // else if (number < 2 && sphere_list.length > 3){
        //     delete_sphere(scene, renderer)
        // }
    }
    animate()
}

function create_sphere(scene){
    var position = [dice(-400, 400), dice(-400, 400), dice(-400, 400)]

    // Create Sphere
    var geometry = new THREE.SphereGeometry(2, 2, 2)
    var material = new THREE.MeshBasicMaterial( {color: 0xffffff} )
    var sphere = new THREE.Mesh(geometry, material)
    
    // Create Light
    var light = new THREE.PointLight( 0xc4c4c4 )
    light.intensity = 0.3

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

        var sphere = scene.getObjectById(sphere_list[0][0])
        var light = scene.getObjectById(sphere_list[0][1])

        sphere.geometry.dispose()
        sphere.material.dispose()
        scene.remove(sphere)
        scene.remove(light)
        
        sphere_list.shift()     

        renderer.renderLists.dispose();
    }
}

function dice(min, max){
    return Math.random() * (max - min) + min;
}