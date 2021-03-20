import * as THREE from "../files/threejs/three.module.js"
import { GLTFLoader } from '../files/threejs/GLTFLoader.js'

let renderer
let render_2d
let scene
let scroll
const data = [   
    {
        title: "Reliance",
        description: "Showcase page of the music band Reliance",
        git_link: "https://github.com/Wizer21/Shop",
        page_link: "https://relianceband.herokuapp.com/",
        start_date: "12/03/2021",
        end_date: "20/03/2021",
        image: "../files/images/projects_images/reliance.jpg",
        youtube: "null",
        tech: ["javascript", "html", "css", "vuejs", "threejs", "locomotive"]
    }, 
    {
        title: "Shop",
        description: "Minimalist online plant store",
        git_link: "https://github.com/Wizer21/Shop",
        start_date: "03/03/2021",
        end_date: "11/03/2021",
        image: "../files/images/projects_images/shop.jpg",
        youtube: "null",
        tech: ["javascript", "html", "css", "vuejs", "lowdb"]
    }, 
    {
        title: "Portfolio",
        description: "Web portfolio, resuming all the projects I've realized.",
        git_link: "https://github.com/Wizer21/Portfolio",
        start_date: "24/02/2021",
        end_date: "02/03/2021",
        image: "../files/images/projects_images/portfolio.jpg",
        youtube: "null",
        tech: ["javascript", "html", "css", "threejs", "matterjs"]
    }, 
    {
        title: "Swich Network",
        description: "Learning Django throught this project, imitating a social network.",
        git_link: "https://github.com/Wizer21/Swich_network",
        start_date: "20/02/2021",
        end_date: "22/02/2021",
        image: "../files/images/projects_images/network.jpg",
        youtube: "null",
        tech: ["python", "django", "javascript", "html", "css", "bulma"]
    },
    {
        title: "Robot arm",
        description: "This project is a 6-axis arm, managed on a Raspberry Pi and controlled from an Xbox controller.",
        git_link: "https://github.com/Wizer21/6Servo_Robot_Arm",
        start_date: "01/02/2021",
        end_date: "19/02/2021",
        image: "../files/images/projects_images/arm.jpg",
        youtube: "null",
        tech: ["python", "qt", "raspberry"]
    },
    {
        title: "Tracking Robot",
        description: "This project is realized on Raspberry Pi 4. This robot is equipped with 2 DC motor that allow it to move around. Two servomotor control the camera which can in this way follow objects. Both DC and servomotors can be controlled from the Qt interface or from an Xbox controller.",
        git_link: "https://github.com/Wizer21/TrackerRobot",
        start_date: "17/01/2021",
        end_date: "01/02/2021",
        image: "../files/images/projects_images/robot_tracking.jpg",
        youtube: "null",
        tech: ["python", "qt", "raspberry"]
    },
    {
        title: "Synchronized Canvas",
        description: "This project is a simple scribble application. Users can create rooms that will synchronize their canvas with the users present in the same room.",
        git_link: "https://github.com/Wizer21/Connected_canvas",
        start_date: "06/01/2021",
        end_date: "16/01/2021",
        image: "../files/images/projects_images/canvas.jpg",
        youtube: "null",
        tech: ["c++", "qt", "nodejs", "lowdb"]
    },
    {
        title: "Command Generator",
        description: "'Command Generator' is an application that generates order mail, based on copied data.",
        git_link: "https://github.com/Wizer21/OrderGenerator",
        start_date: "28/12/2020",
        end_date: "05/01/2021",
        image: "../files/images/projects_images/table_pres.jpg",
        youtube: "null",
        tech: ["python", "qt"]
    },
    {
        title: "Image/Video Tracker",
        description: "This program is able to find complex shapes from an image, depending on their color. By clicking on the video, the algorithm will get the pixel clicked and start tracking it. ",
        git_link: "https://github.com/Wizer21/Image_Tracker",
        start_date: "11/12/2020",
        end_date: "28/12/2020",
        image: "../files/images/projects_images/green.jpg",
        youtube: "null",
        tech: ["python", "qt"]
    },
    {
        title: "TicTacToe",
        description: "The TicTacToe game that allows you to play against the program, it analyzes the board to find the best way to deafeat you.",
        git_link: "https://github.com/Wizer21/TicTacToe",
        start_date: "08/12/2020",
        end_date: "11/12/2020",
        image: "../files/images/projects_images/tictactoe.jpg",
        youtube: "null",
        tech: ["python", "qt"]
    },
    {
        title: "Swich",
        description: "This project was mainly made to showcase my skills and keep an history of my progression.",
        git_link: "https://github.com/Wizer21/Swich",
        start_date: "02/11/2020",
        end_date: "30/11/2020",
        image: "../files/images/projects_images/swich.jpg",
        youtube: "null",
        tech: ["c++", "qt", "mariadb"]
    },
    {
        title: "Simulation Revendeur",
        description: "Learning and discovery of Qt.",
        git_link: "https://github.com/Wizer21/SimulationRevendeur",
        start_date: "12/10/2020",
        end_date: "26/10/2020",
        image: "../files/images/projects_images/Revendeur.jpg",
        youtube: "null",
        tech: ["c++", "qt"]
    },
];

const icon_list = {
    qt: {
        url: "../files/images/icons/qt.svg"
    },
    "c++": {
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
    mariadb: {
        url: "../files/images/icons/mariadb.svg"
    },
    threejs: {
        url: "../files/images/icons/three-dot-js.svg"
    },
    matterjs: {
        url: "../files/images/icons/matter-js.svg"
    },    
    bulma: {
        url: "../files/images/icons/bulma.svg"
    },
    lowdb: {
        url: '../files/images/icons/lowdb.svg'
    },
    vuejs: {
        url: '../files/images/icons/vuejs.svg'
    },
    locomotive: {
        url: '../files/images/icons/locomotive.svg'
    },

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
        let new_link;
        let new_elem_text;
        let new_elem_image;
        let new_elem;
        for (let i = 0; i < data.length; i++) {
            // BUILD DIVS
            new_div = document.createElement("section")
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
            new_elem.dataset.angle = `${dice(0, 8) - 4}`
            new_elem.style.transform = `rotate(${ new_elem.dataset.angle }deg)`
            new_elem_image.children[0].appendChild(new_elem)

            // BUILD DESCRIPTION / START//END 
            new_elem_text.appendChild(build_element_with_text(new_elem, "h1", data[i].title))
            new_elem_text.appendChild(build_element_with_text(new_elem, "p", data[i].description))
            new_elem_text.appendChild(build_element_with_text(new_elem, "p", data[i].start_date + " -> " + data[i].end_date))

            // PAGE LINK            
            if(data[i].page_link){                
                new_link = document.createElement("a")
                new_link.href = data[i].page_link
                new_link.target = "_blank"

                new_elem = document.createElement("p")
                new_elem.className = "url_page_button"
                new_elem.textContent = "Visit"

                new_link.appendChild(new_elem)
                new_elem_text.appendChild(new_link)
            }
            
            for (const icon in data[i].tech){
                let elem = build_element_icon(new_elem, "img", icon_list[data[i].tech[icon]].url)
                elem.dataset.name = data[i].tech[icon]
                new_elem_text.appendChild(elem)
            }

            // Scroll
            // new_div.dataset.scrollSection = ""
            // new_elem_text.dataset.scroll = ""
            // new_elem_text.dataset.scrollSpeed = "3"
            // new_elem_text.dataset.scrollDirection = "horizontal"

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
        locomotive()
   
        setTimeout(() => {   
            // Show main page
            document.getElementById("mainLayout").style.display = "block"
            
            // Set the 3D scene size, after the page loaded, allow to get the header height
            renderer.setSize(document.getElementById("header").offsetWidth, document.getElementById("header").offsetHeight * 1.01)

            // Close the loading screen
            document.getElementById("page_entry").children[0].style.opacity = "0"
            document.getElementById("page_entry").className = "open"
            
            // Resize the scroll container to the page
            scroll.update()
        }, 1500)
    });
}

// CREATE ANIMATIONS 
function build_events(){
    // CUSTOM CURSOR
    const cursor_custom = document.querySelector(".cursor_custom")
    const cursor_expand = document.querySelector(".cursor_expand")
    const cursor_git = document.querySelector(".git_cursor")

    document.addEventListener("mousemove", event => {
        track_mouse(event, cursor_custom, cursor_expand, cursor_git)
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

    // ICON SLIDE ON HOVER
    const displayer = document.getElementById("icon_text")
    const icons = document.getElementsByClassName("icon")
    for (const a of icons){
        a.addEventListener("mouseenter", event => {            
            const rect = a.getBoundingClientRect()            
            displayer.style.top = `${rect.top + window.scrollY}px`
            displayer.style.left = `${rect.left + window.scrollX}px`

            displayer.children[0].textContent = a.dataset.name
            displayer.children[0].classList.add("slide")
            
        })
        a.addEventListener("mouseleave", () => {
            displayer.children[0].classList.remove("slide")
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
    })

    document.addEventListener("wheel", event => {
        track_mouse(event, cursor_custom, cursor_expand, cursor_git)
        
        displayer.children[0].classList.remove("slide")
    })
}

function track_mouse(event, cursor_custom, cursor_expand, cursor_git){    
    cursor_custom.style.top = `${event.pageY - 5}px`
    cursor_custom.style.left = `${event.pageX - 5}px`

    cursor_expand.style.top = `${event.pageY - 2.5}px`
    cursor_expand.style.left = `${event.pageX - 2.5}px`

    cursor_git.style.top = `${event.pageY - 20}px`
    cursor_git.style.left = `${event.pageX - 20}px`
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
    scene = new THREE.Scene();

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
    })

    let ground = Bodies.rectangle(window.innerWidth/2 - 200, window.innerHeight/2 + 20, window.innerWidth + 400, 20, { isStatic: true })
        
    // create two boxes and a ground
    let h = window.innerHeight/2
    let pos_list = [[0, h], [0, h], [100, h], [200, h], [300, h], [400, h], [500, h], [600, h], [700, h], [800, h], 
    [0, h - 100], [100, h - 100], [200, h - 100], [300, h - 100], [400, h - 100], [500, h - 100], [0, h - 200], [100, h - 200], [200, h - 200], [300, h - 200]]
    for (let i of pos_list){
        create_rock(World, engine, Bodies, i[0], i[1])
    }

    for (let i = 0; i < window.innerWidth/25; i++){
        create_leaf(World, engine, Bodies)
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

function create_rock(World, engine, Bodies, w, h){
    var rock = Bodies.rectangle(w, h, 100, 100)
    rock.render.sprite.texture = "../files/images/rocks/stone.png"
    World.add(engine.world, [rock])
}

function create_leaf(World, engine, Bodies){    
    var leaf = Bodies.rectangle(dice(0, window.innerWidth), dice(0, 100), 40, 40, {        
        frictionAir: 0.2,
    })
    leaf.render.sprite.texture = "../files/images/rocks/leaf.png"
    World.add(engine.world, [leaf])
}

function locomotive(){
    scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    })
}