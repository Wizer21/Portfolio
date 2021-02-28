import * as THREE from "../files/threejs/three.module.js"
import { OrbitControls } from "../files/threejs/OrbitControls.js"
import { GLTFLoader } from '../files/threejs/GLTFLoader.js'
//import { Matter } from '../files/matterjs/matter.min.js'

let renderer
let render_2d
const data = [    
    {
        title: "Swich Network",
        description: "Learning project imitating a social network. This project was realized using Python and Django",
        git_link: "https://github.com/Wizer21/Swich_network",
        start_date: "20/02/2020",
        end_date: "22/02/2021",
        image: "../files/images/network.png",
        youtube: "null",
        tech: ["python", "django", "javascript", "html", "css"]
    },
    {
        title: "Robot arm",
        description: "This project is a 6-axis arm, controlled on a Raspberry Pi. The arm can be managed from an Xbox controller. 🎮 By using the calculation method below, I can create vertical or horizontal movements. If, for example, I want to claw to be lowered, I set this new position and calculate from this one, witch should be the new motors postions.",
        git_link: "https://github.com/Wizer21/6Servo_Robot_Arm",
        start_date: "01/02/2020",
        end_date: "19/02/2021",
        image: "../files/images/arm.jpg",
        youtube: "null",
        tech: ["python", "qt", "raspberry"]
    },
    {
        title: "Tracking Robot",
        description: "This project is realized on Raspberry Pi 4. This robot is equipped with 2 DC motor that allow it to move around. Two servomotor control the camera which can in this way follow objects. Both DC and servomotors can be controlled from the Qt interface or from an Xbox controller.",
        git_link: "https://github.com/Wizer21/TrackerRobot",
        start_date: "17/01/2021",
        end_date: "01/02/2021",
        image: "../files/images/robot_tracking.jpg",
        youtube: "null",
        tech: ["python", "qt", "raspberry"]
    },
    {
        title: "Synchronized Canvas",
        description: "This project is a simple scribble application. Users can create rooms that will synchronize their canvas with the users present in the same room.",
        git_link: "https://github.com/Wizer21/Connected_canvas",
        start_date: "06/01/2021",
        end_date: "16/01/2021",
        image: "../files/images/canvas.png",
        youtube: "null",
        tech: ["cplusplus", "qt", "nodejs"]
    },
    {
        title: "Command Generator",
        description: "'Command Generator' is an application that generates order mail in a few clicks.",
        git_link: "https://github.com/Wizer21/OrderGenerator",
        start_date: "28/12/2020",
        end_date: "05/01/2021",
        image: "../files/images/table_pres.jpg",
        youtube: "null",
        tech: ["python", "qt"]
    },
    {
        title: "Image/Video Tracker",
        description: "This program allows you to find complex shapes from an image, depending on their color, by clicking on the image, the algorithm will get the pixel table of our image, the position of pixel clicked and its color",
        git_link: "https://github.com/Wizer21/Image_Tracker",
        start_date: "11/12/2020",
        end_date: "28/12/2020",
        image: "../files/images/green.png",
        youtube: "null",
        tech: ["python", "qt"]
    },
    {
        title: "TicTacToe",
        description: "This TicTacToe allows you to play against the program that analyzes the board to find the best way to deafeat you.",
        git_link: "https://github.com/Wizer21/TicTacToe",
        start_date: "08/12/2020",
        end_date: "11/12/2020",
        image: "../files/images/tictactoe.jpg",
        youtube: "null",
        tech: ["python", "qt"]
    },
    {
        title: "Swich",
        description: "This project was mainly made to showcase my skills and keep an history of my progression. The developpement started on 2nd, november 2020. This project was only made through C++ with the Qt library.",
        git_link: "https://github.com/Wizer21/Swich",
        start_date: "02/11/2020",
        end_date: "30/11/2020",
        image: "../files/images/swich.jpg",
        youtube: "null",
        tech: ["cplusplus", "qt", "maria"]
    },
    {
        title: "Simulation Revendeur",
        description: "First Qt Application",
        git_link: "https://github.com/Wizer21/SimulationRevendeur",
        start_date: "12/10/2020",
        end_date: "26/10/2020",
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
    }    
}

const rock_list = [
    "../files/images/rocks/rock1.png",
    "../files/images/rocks/rock2.png",
    "../files/images/rocks/rock3.png",
    "../files/images/rocks/rock4.png",
    "../files/images/rocks/rock5.png",
    "../files/images/rocks/rock6.png",
    "../files/images/rocks/rock7.png",
    "../files/images/rocks/rock8.png",
    "../files/images/rocks/rock9.png"
]

export function main() {
    document.addEventListener("DOMContentLoaded", () => {
        // BUILD INTERFACE 
        let body = document.getElementById("body_container")
        let header = document.getElementById("header")

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
            new_elem.className = "row image_holder"
            new_elem.dataset.angle = `${dice(0, 10) - 5}`
            new_elem.style.transform = `rotate(${ new_elem.dataset.angle }deg)`
            new_elem_image.children[0].appendChild(new_elem)

            // BUILD DESCRIPTION
            new_elem_text.appendChild(build_element_with_text(new_elem, "h1", data[i].title))
            new_elem_text.appendChild(build_element_with_text(new_elem, "p", data[i].description))
            new_elem_text.appendChild(build_element_with_text(new_elem, "p", data[i].start_date + " -> " + data[i].end_date))

            for (const icon in data[i].tech){
                new_elem_text.appendChild(build_element_icon(new_elem, "img", icon_list[data[i].tech[icon]].url))
            }

            // SET POSITION
            new_div.className = "parent row"
            if (i % 2 == 0) {
                new_elem_text.className = "right_col text_div"
                new_elem_image.className = "left_col loaded_image"
            } else {
                new_elem_text.className = "left_col text_div"
                new_elem_image.className = "right_col loaded_image"
            }

            // STRUCTURE
            new_div.appendChild(new_elem_text)
            new_div.appendChild(new_elem_image)
            body.appendChild(new_div)
        }
        
        // CREATE ROCK SCENE 
        new_div = document.createElement("div")
        new_div.id = "rock_scene"
        
        new_elem_image = document.createElement("img")
        new_elem_image.src = "../files/images/dog.gif"
        new_elem_image.id = "dogo"
        
        new_div.appendChild(new_elem_image)
        body.appendChild(new_div)

        // BUILD SCENE
        build_events()  

        // BUILD SCENE
        render_3D_scene(header)
        render_2d_scene()

        setTimeout(() => {
            document.getElementById("mainLayout").style.display = "block"
            renderer.setSize(document.getElementById("header").offsetWidth, document.getElementById("header").offsetHeight * 1.01)
            window.scrollTo(0, 0)

            document.getElementById("page_entry").className = "open"
        }, 1000)
    });
}

// CREATE ANIMATIONS 
function build_events(){
    // CUSTOM CURSOR
    const cursor_custom = document.querySelector(".cursor_custom")
    const cursor_expand = document.querySelector(".cursor_expand")
    const cursor_git = document.querySelector(".git_cursor")

    document.addEventListener("mousemove", event => {
        cursor_custom.style.top = `${event.pageY - 5}px`
        cursor_custom.style.left = `${event.pageX - 5}px`

        cursor_expand.style.top = `${event.pageY - 2.5}px`
        cursor_expand.style.left = `${event.pageX - 2.5}px`

        cursor_git.style.top = `${event.pageY - 20}px`
        cursor_git.style.left = `${event.pageX - 20}px`
    })

    const text_surface = document.getElementsByClassName("text_div")
    for (const i of text_surface){
        i.addEventListener("mouseenter", () => {
            cursor_custom.style.display = "block"
            cursor_expand.style.display = "block"
        })
        i.addEventListener("mouseleave", () => {
            cursor_custom.style.display = "none"
            cursor_expand.style.display = "none"
        }) 
        i.addEventListener("click", () => {
            cursor_custom.classList.add("wave")
            cursor_expand.classList.add("wave_expand")

            setTimeout(() => {
                cursor_custom.classList.remove("wave")
                cursor_expand.classList.remove("wave_expand")
            }, 500)
        })
    }

    // ICON SLIDE ON SHOW
    const icons = document.getElementsByClassName("icon")
    for (const a of icons){
        a.addEventListener("show", event => {
            console.log("show")
            a.style.transform = "scale(5)"
        })
    }

    // GIT ICON
    const images = document.getElementsByClassName("image_holder")
    for (const e of images){
        e.addEventListener("mouseenter", () => {
            cursor_git.classList.remove("git_exit")
            cursor_git.classList.add("git_enter")
        })
        e.addEventListener("mouseleave", () => {
            cursor_git.classList.remove("git_enter")
            cursor_git.classList.add("git_exit")
        })
    }


    // IMAGE RESIZE
    for (const i of images){
        i.addEventListener("mouseenter", () => {
            i.style.transform = `scale(1.1)`
        })
        i.addEventListener("mouseleave", () => {
            i.style.transform = `scale(1) rotate(${ i.dataset.angle }deg)`
        })        
    }

    window.addEventListener("resize", () => {        
        renderer.setSize(document.getElementById("header").offsetWidth, document.getElementById("header").offsetHeight)

        render_2d.canvas.width = document.body.offsetWidth
        render_2d.canvas.height = window.innerHeight/2
    })
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
function render_3D_scene(container_3D) {
    // Scene
    const scene = new THREE.Scene();

    // Light
    create_point_light(scene, [-10, 5, 0], "#ffffff", 1.5)
    create_point_light(scene, [10, 10, 10], "#ffffff", 0.5)
    create_point_light(scene, [10, -5, -10], "#ffffff", 1)

    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth * 0.99 / (window.innerHeight/2),
        0.1,
        1000
    )

    // Render
    renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setClearColor( 0x000000, 0 )
    renderer.domElement.id = "canvas_3d"
    container_3D.appendChild(renderer.domElement)

    // Camera Controler    
    //const controls = new OrbitControls(camera, container_3D);   

    let monstera
    const loader = new GLTFLoader();
    loader.load( '../files/models/monstera.glb', function ( gltf ) {
        monstera = scene.add( gltf.scene );
        monstera.rotation.y += 0.8
    });    

    camera.position.set(-2.5, 4.5, 1)

    // Animate

    const animate = function () {
        requestAnimationFrame(animate)
        if (monstera){
            monstera.rotation.y += 0.0003
        }

        renderer.render(scene, camera);
    }
    animate()
}

function create_point_light(scene, position, color, power){
    let light = new THREE.PointLight()
    light.position.set(position[0], position[1], position[2])
    light.intensity = power
    light.color.set(color)
    scene.add(light)

    return light
}

function dice(min, max){
    return Math.random() * (max - min) + min
}

function render_2d_scene(){
    // module aliases
    var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint;

    // create an engine
    var engine = Engine.create();

    let container = document.getElementById("rock_scene")  
    
    // create a renderer
    render_2d = Render.create({
    element: container,
    engine: engine,
    options: {
        wireframes: false,
        height: window.innerHeight/2,
        width: document.body.offsetWidth,
        background: 'transparent',
    }
    });

    let ground = Bodies.rectangle(window.innerWidth/2, window.innerHeight/2 + 20, window.innerWidth, 20, { isStatic: true })
        
    // create two boxes and a ground
    for (let i = 0; i < 50; i++){
        create_rock(World, engine, Bodies)
    }



    // mouse
    let mouse = Matter.Mouse.create(render_2d.canvas)
    let mouse_Constraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            render_2d: { visible: false }
        }
    })
    render_2d.mouse = mouse

    // Enable scroll page over the scene
    mouse.element.removeEventListener("mousewheel", mouse_Constraint.mouse.mousewheel)
    mouse.element.removeEventListener("DOMMouseScroll", mouse_Constraint.mouse.mousewheel)

    // Add bodies to the world
    World.add(engine.world, [ground, mouse_Constraint])

    // run the engine
    Engine.run(engine)
    // run the renderer
    Render.run(render_2d)
}

function create_rock(World, engine, Bodies){
    var rock = Bodies.polygon(dice(100, 500), dice(200, 400), 4, 40)
    rock.render.sprite.texture = rock_list[Math.round(dice(0, 8))]
    World.add(engine.world, [rock])
}
