import * as THREE from "../files/threejs/three.module.js"
import { OrbitControls } from "../files/threejs/OrbitControls.js"
import { GLTFLoader } from '../files/threejs/GLTFLoader.js'
//import { Matter } from '../files/matterjs/matter.min.js'

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
    }    
}
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
            document.getElementById("page_entry").className = "open"
            window.scrollTo(0, 0)
        }, 1000)
    });
}

// CREATE ANIMATIONS 
function build_events(){
    // BUILD CURSOR 
    const images = document.getElementsByClassName("image_holder")
    const cursor_custom = document.querySelector(".cursor_custom")
    const cursor_expand = document.querySelector(".cursor_expand")
    const html = document.getElementsByTagName("html")
    const text_surface = document.getElementsByClassName("text_div")

    // CUSTOM CURSOR
    document.addEventListener("mousemove", event => {
        cursor_custom.style.top = `${event.pageY - 5}px`
        cursor_custom.style.left = `${event.pageX - 5}px`

        cursor_expand.style.top = `${event.pageY - 2.5}px`
        cursor_expand.style.left = `${event.pageX - 2.5}px`
    })


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
            console.log("in")
            cursor_custom.classList.add("wave")
            cursor_expand.classList.add("wave_expand")

            setTimeout(() => {
                cursor_custom.classList.remove("wave")
                cursor_expand.classList.remove("wave_expand")
            }, 500)
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
        window.innerWidth * 0.98 / (window.innerHeight/2),
        0.1,
        1000
    )

    // Render
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth * 0.99, window.innerHeight/2 * 0.99)
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
    Bodies = Matter.Bodies;

    // create an engine
    var engine = Engine.create();

    let container = document.getElementById("rock_scene")  
    
    // create a renderer
    var render = Render.create({
    element: container,
    engine: engine,
    options: {
        wireframes: false,
        height: 1000,
        width: document.body.offsetWidth,
        background: 'transparent',
    }
    });

    // create two boxes and a ground
    let radius = 40
    let sides = 4
    var rock1 = Bodies.polygon(200, 220, sides, radius)
    var rock2 = Bodies.polygon(200, 500, sides, radius)
    var rock3 = Bodies.polygon(200, 300, sides, radius)
    var rock4 = Bodies.polygon(300, 200, sides, radius)
    var rock5 = Bodies.polygon(300, 300, sides, radius)
    var rock6 = Bodies.polygon(300, 300, sides, radius)
    var rock7 = Bodies.polygon(300, 500, sides, radius)
    var rock8 = Bodies.polygon(400, 200, sides, radius)
    var rock9 = Bodies.polygon(400, 200, sides, radius)

    rock1.render.sprite.texture = "../files/images/rocks/rock1.png"
    rock2.render.sprite.texture = "../files/images/rocks/rock2.png"
    rock3.render.sprite.texture = "../files/images/rocks/rock3.png"
    rock4.render.sprite.texture = "../files/images/rocks/rock4.png"
    rock5.render.sprite.texture = "../files/images/rocks/rock5.png"
    rock6.render.sprite.texture = "../files/images/rocks/rock6.png"
    rock7.render.sprite.texture = "../files/images/rocks/rock7.png"
    rock8.render.sprite.texture = "../files/images/rocks/rock8.png"
    rock9.render.sprite.texture = "../files/images/rocks/rock9.png"

    var ground = Bodies.rectangle(0, 1030, 2100, 60, { isStatic: true })

    // mouse
    let mouse = Matter.Mouse.create(render.canvas)
    let mouse_Constraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            render: { visible: false }
        }
    })
    render.mouse = mouse

    // Enable scroll page over the scene
    mouse.element.removeEventListener("mousewheel", mouse_Constraint.mouse.mousewheel)
    mouse.element.removeEventListener("DOMMouseScroll", mouse_Constraint.mouse.mousewheel)

    // Add bodies to the world
    World.add(engine.world, [rock1, rock2, rock3, rock4, rock5, rock6, rock7, rock8, rock9, ground, mouse_Constraint])

    // run the engine
    Engine.run(engine)
    // run the renderer
    Render.run(render)
}