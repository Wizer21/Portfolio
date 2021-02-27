import * as THREE from "../files/threejs/three.module.js"
import { OBJLoader } from "../files/threejs/OBJLoader.js"
import { OrbitControls } from "../files/threejs/OrbitControls.js"
import { MTLLoader } from "../files/threejs/MTLLoader.js"
import { GLTFLoader } from '../files/threejs/GLTFLoader.js'

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
        tech: ["python", "django", "javascript", "html", "css"]
    },
    {
        title: "Robot arm",
        description: "This project is a 6-axis arm, controlled on a Raspberry Pi. The arm can be managed from an Xbox controller. 🎮 By using the calculation method below, I can create vertical or horizontal movements. If, for example, I want to claw to be lowered, I set this new position and calculate from this one, witch should be the new motors postions.",
        git_link: "https://github.com/Wizer21/6Servo_Robot_Arm",
        start_date: "01/01/2020",
        end_date: "02/02/2021",
        image: "../files/images/arm.jpg",
        youtube: "null",
        tech: ["python", "qt", "raspberry"]
    },
    {
        title: "Tracking Robot",
        description: "This project is realized on Raspberry Pi 4. This robot is equipped with 2 DC motor that allow it to move around. Two servomotor control the camera which can in this way follow objects. Both DC and servomotors can be controlled from the Qt interface or from an Xbox controller.",
        git_link: "https://github.com/Wizer21/TrackerRobot",
        start_date: "01/01/2020",
        end_date: "02/02/2021",
        image: "../files/images/robot_tracking.jpg",
        youtube: "null",
        tech: ["python", "qt", "raspberry"]
    },
    {
        title: "Synchronized Canvas",
        description: "This project is a simple scribble application. Users can create rooms that will synchronize their canvas with the users present in the same room.",
        git_link: "https://github.com/Wizer21/Connected_canvas",
        start_date: "01/01/2045",
        end_date: "02/02/2019",
        image: "../files/images/canvas.png",
        youtube: "null",
        tech: ["cplusplus", "qt", "nodejs"]
    },
    {
        title: "Command Generator",
        description: "'Command Generator' is an application that generates order mail in a few clicks.",
        git_link: "https://github.com/Wizer21/OrderGenerator",
        start_date: "01/01/2020",
        end_date: "02/02/2021",
        image: "../files/images/table_pres.jpg",
        youtube: "null",
        tech: ["python", "qt"]
    },
    {
        title: "Image/Video Tracker",
        description: "This program allows you to find complex shapes from an image, depending on their color, by clicking on the image, the algorithm will get the pixel table of our image, the position of pixel clicked and its color",
        git_link: "https://github.com/Wizer21/Image_Tracker",
        start_date: "01/01/2020",
        end_date: "02/02/2021",
        image: "../files/images/green.png",
        youtube: "null",
        tech: ["python", "qt"]
    },
    {
        title: "TicTacToe",
        description: "This TicTacToe allows you to play against the program that analyzes the board to find the best way to deafeat you.",
        git_link: "https://github.com/Wizer21/TicTacToe",
        start_date: "01/01/2020",
        end_date: "02/02/2021",
        image: "../files/images/tictactoe.jpg",
        youtube: "null",
        tech: ["python", "qt"]
    },
    {
        title: "Swich",
        description: "This project was mainly made to showcase my skills and keep an history of my progression. The developpement started on 2nd, november 2020. This project was only made through C++ with the Qt library.",
        git_link: "https://github.com/Wizer21/Swich",
        start_date: "01/01/2020",
        end_date: "02/02/2021",
        image: "../files/images/swich.jpg",
        youtube: "null",
        tech: ["cplusplus", "qt", "maria"]
    },
    {
        title: "Simulation Revendeur",
        description: "First Qt Application",
        git_link: "https://github.com/Wizer21/SimulationRevendeur",
        start_date: "01/01/2020",
        end_date: "02/02/2021",
        image: "../files/images/Revendeur.jpg",
        youtube: "null",
        tech: ["cplusplus", "qt"]
    },
];

const icon_list = {
    qt: {
        url: "../files/images/icons/qt.svg"
    },
    cplusplus: {
        url: "../files/images/icons/cplusplus.svg"
    },
    python: {
        url: "../files/images/icons/python.svg"
    },
    nodejs: {
        url: "../files/images/icons/node-dot-js.svg"
    },
    raspberry: {
        url: "../files/images/icons/raspberrypi.svg"
    },
    django: {
        url: "../files/images/icons/django.svg"
    },
    javascript: {
        url: "../files/images/icons/javascript.svg"
    },
    html: {
        url: "../files/images/icons/html5.svg"
    },
    css: {
        url: "../files/images/icons/css3.svg"
    },    
    maria: {
        url: "../files/images/icons/mariadb.svg"
    },
    
}

export function main() {
    document.addEventListener("DOMContentLoaded", () => {
        // BUILD INTERFACE 
        let body = document.getElementById("body_container");
        let header = document.getElementById("header");

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

            for (const icon in data[i].tech){
                new_elem_text.appendChild(build_element_icon(new_elem, "img", icon_list[data[i].tech[icon]].url))
            }

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
        render_scene(header)
    });
}

// CREATE ANIMATIONS 
function build_events(){
    // BUILD CURSOR 
    const images = document.getElementsByTagName("img")
    const cursor_custom = document.getElementById("cursor_custom")
    const html = document.getElementsByTagName("html")

    // CUSTOM CURSOR
    document.addEventListener("mousemove", event => {
        cursor_custom.style.top = `${event.pageY}px`
        cursor_custom.style.left = `${event.pageX}px`
    })

    // IMAGE RESIZE
    for (const i of images){
        i.addEventListener("mouseenter", () => {
            cursor_custom.style.display = "block" 
            i.style.transform = `scale(1.1)`
        })
        i.addEventListener("mouseleave", () => {
            cursor_custom.style.display = "none"
            i.style.transform = `scale(1) rotate(${ i.dataset.angle }deg)`
        })        
    }

    // MOVING TEXT
    const text = document.getElementsByClassName("text_div")

    for (const t of text){
        t.addEventListener("mouseenter", () => {
            t.dataset.in = "1"
            t.dataset.half_width = t.offsetWidth / 2
            t.dataset.half_height = t.offsetHeight / 2
        })
        t.addEventListener("mouseleave", () => {
            t.dataset.in = "0"
            t.style.top = 0
            t.style.left = 0
        })
        t.addEventListener("mousemove", event => {
            if (t.dataset.in == "1"){

                var offsets = t.getBoundingClientRect()
                t.style.left = `${((event.pageX - (offsets.left + window.scrollX)) -  t.dataset.half_width) / 10}px`
                t.style.top = `${((event.pageY - (offsets.top + window.scrollY)) -  t.dataset.half_height) / 10}px`
            }            
        })
    }
}

function build_element_with_text(element, type, text) {
    element = document.createElement(type);
    element.textContent = text;
    return element;
}

function build_element_icon(element, type, text) {
    element = document.createElement(type);
    element.className = "icon"
    element.src = text
    return element;
}

// CREATE 3D SCENE
function render_scene(container_3D) {
    // Scene
    const scene = new THREE.Scene();

    // Light
    const light = new THREE.HemisphereLight()
    scene.add(light)


    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth * 0.98 / (window.innerHeight/2),
        0.1,
        1000
    )
    camera.position.set(-1, 0.8, 6)

    // Render
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth * 0.98, window.innerHeight/2)
    renderer.setClearColor( 0x000000, 0 )
    container_3D.appendChild(renderer.domElement)

    // Camera Controler    
    const controls = new OrbitControls(camera, container_3D);   


    let monstera
    const loader = new GLTFLoader();
    loader.load( '../files/models/monstera.glb', function ( gltf ) {
        scene.add( gltf.scene );
    });    
    // const mlt_loader = new MTLLoader()
    // const obj_loader = new OBJLoader()
    // mlt_loader.load("../files/models/Monstera Deliciosa Plant/monstera.mtl", function(material){
    //     material.preload()
    //     obj_loader.setMaterials(material)

    //     obj_loader.load("../files/models/Monstera Deliciosa Plant/monstera.obj", function(object){
    //         object.scale.set(0.5, 0.5, 0.5)
    //         scene.add(object)
    //         monstera = object
    //     })
    // })

    // Animate

    const animate = function () {
        requestAnimationFrame(animate)
        //monstera.rotation.y += 0.002

        renderer.render(scene, camera);
    }
    animate()
}

function dice(min, max){
    return Math.random() * (max - min) + min
}